# Ecosystem AI Connect — Project Brief

## Identity

- **Purpose:** a reusable, headless, local-first SDK boundary for authorized AI-provider connectivity in compatible Markellos Ecosystem applications.
- **Provider direction:** no provider is selected or approved for connectivity. A future selection requires separate provider, security, and implementation approval.
- **Initial intended consumer:** AI Training Lab.
- **Additional intended consumers:** StudyApp, Organize Your PC, and other compatible applications after their own approval.
- **Project status:** foundation and governance baseline; no SDK API, OAuth flow, provider adapter, or live integration is implemented.
- **Assigned owners:** GitHub account `mmark76` (repository owner) is the technical, security, privacy/data, and incident/operations owner. Product and release ownership remain `NEEDS_DECISION` before development readiness.

## Problem and value

Compatible local applications need a reusable way to integrate authorized AI use without each application inventing incompatible provider, consent, credential, and authorization behavior. The SDK will provide a controlled integration boundary; it does not centralize credentials or operate a shared backend.

## Constraints

- `ecosystem-core` is out of scope and remains independent.
- No dashboard, dedicated frontend, mandatory website, cloud backend, payment platform, or centralized credential store is in scope.
- No provider request, OAuth flow, account eligibility decision, or claim about ChatGPT-plan access is implemented or verified.
- Future implementations must preserve local process and filesystem trust boundaries and consumer-application isolation.

## Criticality and data

The planned scope handles authentication material and authorization state, so it is security-sensitive. The owner-approved baseline is: no provider connectivity now; a future user-authorized OAuth 2.0 Authorization Code flow with PKCE where supported; no Authorization Code flow without PKCE unless `mmark76` approves a recorded security exception and alternative flow; native OS secure storage only; no prompt, response, or analytics retention by default; and redacted diagnostics. Provider selection, platform-version policy, availability targets, and recovery targets still require implementation-specific approval.
