import * as Clock from "effect/Clock";
import * as Effect from "effect/Effect";
import * as Ref from "effect/Ref";
import * as HttpClient from "effect/http/HttpClient";
import * as HttpClientError from "effect/http/HttpClientError";
import * as HttpClientRequest from "effect/http/HttpClientRequest";
import { make, type Verda } from "./generated.js";

export type Credentials = {
  readonly clientId: string;
  readonly clientSecret: string;
  /** Origin of the Verda API. A trailing /v1 is accepted for compatibility. */
  readonly baseUrl?: string;
};

type Token = { readonly value: string; readonly expiresAt: number };

/** Make a generated client with OAuth client-credential renewal. */
export const makeAuthenticated = (
  httpClient: HttpClient.HttpClient,
  credentials: Credentials,
): Effect.Effect<Verda> => Effect.gen(function* () {
  const baseUrl = (credentials.baseUrl ?? "https://api.verda.com")
    .replace(/\/+$/, "")
    .replace(/\/v1$/, "");
  const baseClient = httpClient.pipe(
    HttpClient.mapRequest(HttpClientRequest.prependUrl(baseUrl)),
  );
  const oauth = make(baseClient);
  const token = yield* Ref.make<Token | undefined>(undefined);

  const accessToken = Effect.gen(function* () {
    const now = yield* Clock.currentTimeMillis;
    const cached = yield* Ref.get(token);
    if (cached && cached.expiresAt > now) return cached.value;
    const response = yield* oauth.Oauth2ControllerGetAccessToken({
      payload: {
        grant_type: "client_credentials",
        client_id: credentials.clientId,
        client_secret: credentials.clientSecret,
      },
    });
    yield* Ref.set(token, {
      value: response.access_token,
      expiresAt: now + Math.max(0, response.expires_in * 1000 - 60_000),
    });
    return response.access_token;
  });

  const authenticated = baseClient.pipe(
    HttpClient.mapRequestEffect((request) => accessToken.pipe(
      Effect.map((value) => HttpClientRequest.setHeader(request, "authorization", `Bearer ${value}`)),
      Effect.mapError(() => new HttpClientError.HttpClientError({
        reason: new HttpClientError.TransportError({
          request,
          description: "Verda authentication failed",
        }),
      })),
    )),
  );
  return make(authenticated);
});
