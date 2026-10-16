# Governance Decisions

## AIC-CCR-001 — Owner, security/data baseline, and license decision

- **Change ID:** `AIC-CCR-001`
- **Requested by / approved by:** GitHub account `mmark76` (repository owner)
- **Date:** 2026-10-16
- **Classification:** `SCOPE_INCREASE` — project-governance clarification only
- **Affected objectives:** `AIC-OBJ-004`; no runtime objective is added.

### Decision

GitHub account `mmark76`, acting as repository owner, is assigned as the technical, security, privacy/data, and incident/operations owner. Supported platform families are Windows, macOS, and Linux. At this baseline decision, provider selection and connectivity were deferred; `AIC-CCR-002` later selects OpenAI for the bounded API-key v1 connector. OAuth remains unapproved.

For any later approved provider integration, the intended authorization pattern is user-authorized OAuth 2.0 Authorization Code with PKCE where supported, scoped to the user and consumer application with minimum required scopes. An Authorization Code integration without PKCE may not proceed unless `mmark76` records a security exception with an approved alternative flow, compensating controls, expiry, and review. Credentials and token metadata may use only Windows Credential Manager/DPAPI, macOS Keychain, or Linux Secret Service; plaintext and plain-file fallback are prohibited without a separate approval. Prompts, responses, and analytics are not retained by default; diagnostics must redact tokens, secrets, and personal data; approved implementations must support credential deletion on disconnect/revocation and user-requested local-data cleanup.

The repository is licensed under Apache-2.0. This decision does not authorize package publication, provider registration, SDK implementation, external infrastructure, or production release.

### Impact and remaining decisions

- **Architecture:** preserves the headless, provider-neutral, `LOCAL_ONLY` boundary.
- **Security/privacy:** records a future baseline; no control or runtime behavior is implemented or verified.
- **Testing:** Foundation validation remains applicable; implementation-specific tests remain unavailable until implementation is separately approved.
- **Cost/schedule:** no external service, provider account, or deployment is authorized.
- **Still `NEEDS_DECISION`:** product and release ownership, platform-version policy, provider selection and registration, provider-specific data classification/retention, implementation-specific token lifecycle, incident/revocation process, and all runtime evidence.

## AIC-CCR-002 — OpenAI connector v1 implementation

- **Change ID:** `AIC-CCR-002`
- **Requested by / approved by:** GitHub account `mmark76` (repository owner)
- **Date:** 2026-10-16
- **Classification:** `SCOPE_INCREASE` — bounded local SDK implementation
- **Affected objectives:** `AIC-OBJ-005`

### Decision

`mmark76` is the product and release owner for this bounded implementation. OpenAI is selected as the first provider and implementation of the local OpenAI connector v1 is approved for Windows, macOS, and Linux through Node.js 22 or later.

The v1 connector accepts a user-owned, non-administrative OpenAI project API key, scopes it to the named user and consumer application, and stores it only through the native operating-system credential store. It sends stateless text requests to the OpenAI Responses API with `store: false`. It does not implement OAuth, a callback listener, a UI, streaming, tools, files, background mode, provider-side key revocation, package publication, or a live production integration.

### Remaining decisions and evidence

- **Still `NEEDS_DECISION`:** supported operating-system version policy; OpenAI project registration/billing and live credential issuance; provider-specific retention/contract review; incident and user support process; live smoke-test authorization; package publication; and release-completion evidence.
- **Verification boundary:** local unit tests use injected fake storage and transport. They do not prove a native keyring round trip on every supported operating system or a live OpenAI request.
- **Evidence record:** [`OPENAI_CONNECTOR_VERIFICATION.md`](OPENAI_CONNECTOR_VERIFICATION.md) records the required local checks and explicit non-evidence.
