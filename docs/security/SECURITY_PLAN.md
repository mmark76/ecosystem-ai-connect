# Security Plan

## Status and authority

The Shield remains authoritative. This is a project-owned adoption record for a planned local SDK; it does not implement or verify an authorization flow. The selected source revision is recorded in [`../../FOUNDATION_VERSIONS`](../../FOUNDATION_VERSIONS).

## Scope and controls to implement before live connectivity

| Area | Required project decision/control | Status |
|---|---|---|
| Consent and authorization | Obtain explicit user consent for the requesting consumer application and minimum scopes; deny by default. | PLANNED |
| OAuth | Use an approved authorization-code flow with PKCE where the provider flow requires it; validate redirect, issuer, state, nonce where applicable, and code exchange. | PLANNED |
| Tokens | Store only in an OS-appropriate protected local boundary; define renewal, revocation, expiry, deletion, and per-application isolation. | PLANNED |
| Secrets | Never embed provider secrets or API keys in source, browser code, logs, screenshots, or error output. | REQUIRED BASELINE |
| Local trust boundary | Define filesystem permissions, process/IPC boundaries, configuration validation, and unsafe-local-actor assumptions per supported platform. | PLANNED |
| Provider isolation | Keep provider account/session, user, consumer-app, and environment identities distinct; no authorization sharing by default. | PLANNED |
| Safe errors and logging | Redact credentials, authorization codes, tokens, provider payloads, and personally identifying data by default. | REQUIRED BASELINE |
| Usage limits | Surface provider errors and limits safely; do not promise usage, entitlement, or subscription benefits. | PLANNED |

Official OpenAI documentation describes Sign in with ChatGPT as a separate authorization and registration path: identity scopes do not grant access to API keys or conversations, and plan-usage scopes require user authorization. The future implementation must re-check the current official requirements before design approval.

## Owner decisions required

Named security, privacy, incident, and release owners; supported platforms; selected credential storage mechanism; selected authorization flow; token lifecycle; provider registration; data classification; and incident/revocation process remain `NEEDS_DECISION`.
