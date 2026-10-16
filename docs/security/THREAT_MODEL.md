# Threat Model

## Context

Planned assets include authorization codes, access/refresh tokens if applicable, provider-account identity, consent records, local configuration, and provider request/response metadata. No such material is currently stored or processed by the repository.

| Threat ID | Boundary | Shield authority | Treatment required before implementation | Status |
|---|---|---|---|---|
| AIC-THR-001 | Authorization callback | `iam`, `application-security` | Bind state and PKCE transaction to the initiating user, consumer application, redirect URI, and short expiry; reject replay or mismatch. | PLANNED |
| AIC-THR-002 | Local token storage | `secrets-management`, `data-security` | Use a platform-appropriate protected store, least-privilege filesystem/process access, expiry, revocation, and explicit deletion. | PLANNED |
| AIC-THR-003 | Consumer isolation | `iam`, `third-party-security` | Bind credentials and provider session to the consenting user and consumer application; do not reuse across unrelated apps. | PLANNED |
| AIC-THR-004 | Diagnostics | `application-security`, `data-security`, `logging-monitoring-detection` | Structured redaction and safe errors; prohibit tokens, codes, secrets, and sensitive provider payloads in logs. | PLANNED |
| AIC-THR-005 | External provider boundary | `application-security`, `third-party-security` | Validate configuration and responses, constrain scopes, handle rate/usage limits, and use timeouts/cancellation. | PLANNED |
| AIC-THR-006 | Dependency/supply chain | `software-supply-chain-security` | Pin and scan approved dependencies before adding provider libraries. | PLANNED |

The capability identifiers are assessed in [`SECURITY_PLAN.md`](SECURITY_PLAN.md); they are not claims that a Shield control is implemented. Threat likelihood, impact, owner, and verification evidence require a platform-specific implementation decision. No threat is marked mitigated by this documentation baseline.
