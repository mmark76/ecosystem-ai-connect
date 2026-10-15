# Threat Model

## Context

Planned assets include authorization codes, access/refresh tokens if applicable, provider-account identity, consent records, local configuration, and provider request/response metadata. No such material is currently stored or processed by the repository.

| Threat ID | Boundary | Treatment required before implementation | Status |
|---|---|---|---|
| AIC-THR-001 | Authorization callback | Bind state and PKCE transaction to the initiating user, consumer application, redirect URI, and short expiry; reject replay or mismatch. | PLANNED |
| AIC-THR-002 | Local token storage | Use a platform-appropriate protected store, least-privilege filesystem/process access, expiry, revocation, and explicit deletion. | PLANNED |
| AIC-THR-003 | Consumer isolation | Bind credentials and provider session to the consenting user and consumer application; do not reuse across unrelated apps. | PLANNED |
| AIC-THR-004 | Diagnostics | Structured redaction and safe errors; prohibit tokens, codes, secrets, and sensitive provider payloads in logs. | PLANNED |
| AIC-THR-005 | External provider boundary | Validate configuration and responses, constrain scopes, handle rate/usage limits, and use timeouts/cancellation. | PLANNED |
| AIC-THR-006 | Dependency/supply chain | Pin and scan approved dependencies before adding provider libraries. | PLANNED |

Threat likelihood, impact, owner, and verification evidence require a platform-specific implementation decision. No threat is marked mitigated by this documentation baseline.
