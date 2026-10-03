import assert from "node:assert/strict";
import { test } from "node:test";
import * as Effect from "effect/Effect";
import * as HttpClient from "effect/unstable/http/HttpClient";
import * as HttpClientResponse from "effect/unstable/http/HttpClientResponse";
import { makeAuthenticated } from "../dist/index.js";

test("renews credentials through the generated OAuth operation and reuses the token", async () => {
  const requests = [];
  const httpClient = HttpClient.make((request, url) => Effect.sync(() => {
    requests.push({ path: url.pathname, authorization: request.headers.authorization });
    const response = url.pathname === "/v1/oauth2/token"
      ? Response.json({
        access_token: "test-token",
        token_type: "Bearer",
        expires_in: 3600,
        refresh_token: "test-refresh",
        scope: "cloud-api-v1",
      })
      : Response.json([]);
    return HttpClientResponse.fromWeb(request, response);
  }));
  const client = await Effect.runPromise(makeAuthenticated(httpClient, {
    clientId: "test-id",
    clientSecret: "test-secret",
    baseUrl: "https://api.test/v1",
  }));

  await Effect.runPromise(client.PublicApiControllerGetDeploymentsList(undefined));
  await Effect.runPromise(client.PublicApiControllerGetDeploymentsList(undefined));
  assert.deepEqual(requests, [
    { path: "/v1/oauth2/token", authorization: undefined },
    { path: "/v1/container-deployments", authorization: "Bearer test-token" },
    { path: "/v1/container-deployments", authorization: "Bearer test-token" },
  ]);
});
