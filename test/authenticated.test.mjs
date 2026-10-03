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

test("decodes null entrypoint overrides returned by a deployment GET", async () => {
  const httpClient = HttpClient.make((request, url) => Effect.sync(() => HttpClientResponse.fromWeb(
    request,
    Response.json(url.pathname === "/v1/oauth2/token"
      ? {
        access_token: "test-token",
        token_type: "Bearer",
        expires_in: 3600,
        refresh_token: "test-refresh",
        scope: "cloud-api-v1",
      }
      : {
        name: "model",
        containers: [{
          name: "model-0",
          image: { image: "vccr.io/model:sha-example" },
          exposed_port: 5000,
          entrypoint_overrides: { enabled: false, entrypoint: null, cmd: null },
        }],
        endpoint_base_url: "https://model.example",
        created_at: "2026-10-02T00:00:00Z",
        compute: { name: "B300", size: 1 },
        container_registry_settings: { is_private: true, credentials: { name: "registry" } },
        is_spot: false,
      }),
  )));
  const client = await Effect.runPromise(makeAuthenticated(httpClient, {
    clientId: "test-id",
    clientSecret: "test-secret",
  }));

  const deployment = await Effect.runPromise(client.PublicApiControllerGetDeploymentByName("model", undefined));
  assert.equal(deployment.containers[0].entrypoint_overrides?.entrypoint, null);
});
