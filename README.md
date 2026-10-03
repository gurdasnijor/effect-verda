# Effect Verda client

Generated Effect HTTP client and schemas for the [Verda Cloud public API](https://api.verda.com/v1/docs).

The source OpenAPI snapshot is in `spec/verda.openapi.json`. `spec/patch.json` fixes numeric defaults represented as strings, removes proxy headers incorrectly required on the OAuth token endpoint, and makes utilization triggers optional in the scaling request, matching the documented queue-only request shape. It also corrects two response-only nullability mismatches observed on existing deployments: disabled entrypoint overrides return `entrypoint: null`, and disabled CPU/GPU scaling triggers return `threshold: null`. The current [published OpenAPI schema](https://api.verda.com/v1/openapi.json) declares arrays and numbers respectively. Request schemas retain the published types.

`src/generated.ts` and `dist/` are committed here so Git dependencies install without running code generation. Run `pnpm install --frozen-lockfile && pnpm check` to regenerate them, verify they match the committed artifacts, and run tests. The package exports the generated `make(httpClient)` constructor, operation methods, and Schema types. `makeAuthenticated(httpClient, credentials)` supplies the Verda base URL and renews an OAuth client-credentials token. It accepts a custom base URL for tests.

This package is generated from the public API. It does not manage deployment ownership or Alchemy state.
