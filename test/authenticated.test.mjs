import assert from "node:assert/strict";
import { test } from "node:test";
import * as Effect from "effect/Effect";
import * as Result from "effect/Result";
import * as Schema from "effect/Schema";
import * as HttpClient from "effect/http/HttpClient";
import * as HttpClientResponse from "effect/http/HttpClientResponse";
import { makeAuthenticated, UtilizationScalingTrigger } from "../dist/index.js";

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

test("decodes disabled utilization triggers with null thresholds in scaling responses", async () => {
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
        min_replica_count: 0,
        max_replica_count: 1,
        queue_message_ttl_seconds: 14400,
        concurrent_requests_per_replica: 1,
        scale_down_policy: { delay_seconds: 300 },
        scale_up_policy: { delay_seconds: 0 },
        scaling_triggers: {
          queue_load: { threshold: 1 },
          cpu_utilization: { enabled: false, threshold: null },
          gpu_utilization: { enabled: false, threshold: null },
        },
      }),
  )));
  const client = await Effect.runPromise(makeAuthenticated(httpClient, {
    clientId: "test-id",
    clientSecret: "test-secret",
  }));

  const scaling = await Effect.runPromise(client.PublicApiControllerGetDeploymentScalingOptionsByName("model", undefined));
  assert.equal(scaling.scaling_triggers.cpu_utilization?.threshold, null);
  assert.equal(scaling.scaling_triggers.gpu_utilization?.threshold, null);
  assert.equal(Result.isFailure(Schema.decodeUnknownResult(UtilizationScalingTrigger)({ enabled: false, threshold: null })), true);
});
