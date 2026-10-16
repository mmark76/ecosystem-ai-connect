# Threat Model

## Context

Planned assets include authorization codes, access/refresh tokens if applicable, provider-account identity, consent records, local configuration, and provider request/response metadata. No such material is currently stored or processed by the repository.

| Threat ID | Boundary | Shield authority | Treatment required before implementation | Status |
|---|---|---|---|---|
| AIC-THR-001 | Credential scope | `iam`, `application-security` | Scope the OpenAI project API key to the initiating user and consumer application; reject missing credentials and do not reuse them across consumers. OAuth callback/PKCE threats remain future scope. | IMPLEMENTED; OFFLINE_VERIFIED |
| AIC-THR-002 | Local credential storage | `secrets-management`, `data-security` | Use the native operating-system store only, with no plaintext/plain-file fallback; support local deletion and document separate provider-side revocation. | IMPLEMENTED; NATIVE_PLATFORM_VERIFICATION_PENDING |
| AIC-THR-003 | Consumer isolation | `iam`, `third-party-security` | Bind credentials and provider session to the consenting user and consumer application; do not reuse across unrelated apps. | PLANNED |
| AIC-THR-004 | Diagnostics | `application-security`, `data-security`, `logging-monitoring-detection` | Return bounded errors without response bodies, prompts, or credentials; prohibit tokens, secrets, and personal data in diagnostics. | IMPLEMENTED; OFFLINE_VERIFIED |
| AIC-THR-005 | External provider boundary | `application-security`, `third-party-security` | Validate required input, request text-only non-streaming Responses calls with `store: false`, reject non-success/malformed responses, and use timeout/cancellation. Live rate/usage behavior remains unverified. | IMPLEMENTED; OFFLINE_VERIFIED |
| AIC-THR-006 | Dependency/supply chain | `software-supply-chain-security` | Lock and audit the native keyring dependency; use no OpenAI provider SDK. | IMPLEMENTED; AUDIT_PENDING |

The capability identifiers are assessed in [`SECURITY_PLAN.md`](SECURITY_PLAN.md); they are not claims that all Shield controls are implemented. Provider-specific retention, supported OS version, live account, incident/revocation, and production evidence remain unresolved.
