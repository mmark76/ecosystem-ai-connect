# Test Strategy

## Current applicable checks

| Level | Command | Purpose | Status |
|---|---|---|---|
| Foundation integrity | `node scripts/validate-foundations.cjs` | Required imports, revision pins, sensitive-file/credential-shape scan of the Foundation snapshot. | AVAILABLE |
| Foundation regression | `node --test tests/foundations.test.cjs foundations/shield/tests/*.test.cjs` | Validates the import gate and pinned Shield utilities. | AVAILABLE |
| SDK unit tests | `npm run test:sdk` | Builds TypeScript and verifies credential isolation, stateless request construction, local disconnect, and error redaction with fakes. | AVAILABLE |
| Provider integration/API tests | Not run: no live OpenAI key or provider account is authorized. | Require separate live-smoke-test approval. | NOT_APPLICABLE_CURRENTLY |
| UI/accessibility/browser tests | Not applicable: this project has no UI or site. | Consumer applications own UI verification. | NOT_APPLICABLE |
| Build and type-check | `npm run build` | Compiles the TypeScript SDK with strict compiler settings. | AVAILABLE |
| Dependency scan | `npm run audit:dependencies` | Audits production dependencies without introducing an external runtime service. | AVAILABLE |

## Future implementation evidence

Before a live OpenAI request, add an owner-approved smoke test with a disposable, non-administrative project key and confirm OpenAI account/billing/retention settings. Before any OAuth-capable provider, add authorization-state and PKCE tests; before any other provider, add its adapter contract and threat review. Do not add artificial live tests before a credential and account are separately authorized.

See [`OPENAI_CONNECTOR_VERIFICATION.md`](../governance/OPENAI_CONNECTOR_VERIFICATION.md) for the bounded v1 evidence and explicit non-evidence.
