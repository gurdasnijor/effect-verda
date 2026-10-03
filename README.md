# Effect Verda client

Generated Effect HTTP client and schemas for the [Verda Cloud public API](https://api.verda.com/v1/docs).

The source OpenAPI snapshot is in `spec/verda.openapi.json`. `spec/patch.json` fixes numeric defaults represented as strings, removes proxy headers incorrectly required on the OAuth token endpoint, and makes utilization triggers optional in the scaling request, matching the documented queue-only request shape. Rebuild with `pnpm install --frozen-lockfile && pnpm generate && pnpm build`.

`src/generated.ts` and `dist/` are committed here so Git dependencies install without running code generation. The package exports the generated `make(httpClient)` constructor, operation methods, and Schema types. Supply an Effect `HttpClient` with the Verda base URL and bearer authentication, or use the generated OAuth operation to obtain a token.

This package is generated from the public API. It does not manage deployment ownership or Alchemy state.
