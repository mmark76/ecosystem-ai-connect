# Test Strategy

## Current applicable checks

| Level | Command | Purpose | Status |
|---|---|---|---|
| Foundation integrity | `node scripts/validate-foundations.cjs` | Required imports, revision pins, sensitive-file/credential-shape scan of the Foundation snapshot. | AVAILABLE |
| Foundation regression | `node --test tests/foundations.test.cjs foundations/shield/tests/*.test.cjs` | Validates the import gate and pinned Shield utilities. | AVAILABLE |
| SDK unit/integration/API tests | Not applicable: no SDK implementation exists. | Must be added with approved runtime code. | NOT_APPLICABLE_CURRENTLY |
| UI/accessibility/browser tests | Not applicable: this project has no UI or site. | Consumer applications own UI verification. | NOT_APPLICABLE |
| Build, lint, type-check, dependency scan | Not applicable: no build manifest or implementation dependencies exist. | Reassess when implementation begins. | NOT_APPLICABLE_CURRENTLY |

## Future implementation evidence

Before live connectivity, add tests for authorization state and PKCE validation where applicable, redirect/callback validation, token lifecycle and revocation, per-user/per-application isolation, provider adapter contracts, mocked provider errors, safe logging, configuration validation, and dependency/security scanning. Do not add artificial tests before an SDK contract exists.
