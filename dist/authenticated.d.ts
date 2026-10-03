import * as Effect from "effect/Effect";
import * as HttpClient from "effect/unstable/http/HttpClient";
import { type Verda } from "./generated.js";
export type Credentials = {
    readonly clientId: string;
    readonly clientSecret: string;
    /** Origin of the Verda API. A trailing /v1 is accepted for compatibility. */
    readonly baseUrl?: string;
};
/** Make a generated client with OAuth client-credential renewal. */
export declare const makeAuthenticated: (httpClient: HttpClient.HttpClient, credentials: Credentials) => Effect.Effect<Verda>;
