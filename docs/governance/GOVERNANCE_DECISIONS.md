# Governance Decisions

## AIC-CCR-001 — Owner, security/data baseline, and license decision

- **Change ID:** `AIC-CCR-001`
- **Requested by / approved by:** repository owner
- **Date:** 2026-10-16
- **Classification:** `SCOPE_INCREASE` — project-governance clarification only
- **Affected objectives:** `AIC-OBJ-003`; no runtime objective is added.

### Decision

The repository owner is assigned as technical, security, privacy/data, and incident/operations owner. Supported platform families are Windows, macOS, and Linux. No provider is selected and no connectivity or OAuth implementation is approved.

For any later approved provider integration, the intended authorization pattern is user-authorized OAuth 2.0 Authorization Code with PKCE where supported, scoped to the user and consumer application with minimum required scopes. Credentials and token metadata may use only Windows Credential Manager/DPAPI, macOS Keychain, or Linux Secret Service; plaintext and plain-file fallback are prohibited without a separate approval. Prompts, responses, and analytics are not retained by default; diagnostics must redact tokens, secrets, and personal data; approved implementations must support credential deletion on disconnect/revocation and user-requested local-data cleanup.

The repository is licensed under Apache-2.0. This decision does not authorize package publication, provider registration, SDK implementation, external infrastructure, or production release.

### Impact and remaining decisions

- **Architecture:** preserves the headless, provider-neutral, `LOCAL_ONLY` boundary.
- **Security/privacy:** records a future baseline; no control or runtime behavior is implemented or verified.
- **Testing:** Foundation validation remains applicable; implementation-specific tests remain unavailable until implementation is separately approved.
- **Cost/schedule:** no external service, provider account, or deployment is authorized.
- **Still `NEEDS_DECISION`:** repository/product/release ownership, platform-version policy, provider selection and registration, provider-specific data classification/retention, implementation-specific token lifecycle, incident/revocation process, and all runtime evidence.
