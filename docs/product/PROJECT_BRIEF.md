# Ecosystem AI Connect — Project Brief

## Identity

- **Purpose:** a reusable, headless, local-first SDK boundary for authorized AI-provider connectivity in compatible Markellos Ecosystem applications.
- **Provider direction:** OpenAI is the selected first provider for the bounded connector v1. No other provider is approved.
- **Initial intended consumer:** AI Training Lab.
- **Additional intended consumers:** StudyApp, Organize Your PC, and other compatible applications after their own approval.
- **Project status:** local OpenAI connector v1 implementation with no live credential, provider request, OAuth flow, or production integration verified.
- **Assigned owners:** GitHub account `mmark76` (repository owner) is the product, release, technical, security, privacy/data, and incident/operations owner.

## Problem and value

Compatible local applications need a reusable way to integrate authorized AI use without each application inventing incompatible provider, consent, credential, and authorization behavior. The SDK will provide a controlled integration boundary; it does not centralize credentials or operate a shared backend.

## Constraints

- `ecosystem-core` is out of scope and remains independent.
- No dashboard, dedicated frontend, mandatory website, cloud backend, payment platform, or centralized credential store is in scope.
- The bounded v1 supports text requests to the OpenAI Responses API only. OAuth, account eligibility, tools, files, streaming, background mode, and any other provider are out of scope.
- Future implementations must preserve local process and filesystem trust boundaries and consumer-application isolation.

## Criticality and data

The scope handles an OpenAI project API key and request content, so it is security-sensitive. The owner-approved v1 baseline is: a user-owned non-administrative API key scoped to the user and consumer application; native OS secure storage only; OpenAI Responses requests with `store: false`; no prompt, response, or analytics retention by this SDK; and redacted diagnostics. OAuth/PKCE remains the required pattern for any future OAuth-capable integration, while the OpenAI API-key flow is recorded in `AIC-CCR-002`. Platform-version policy, provider account/billing, availability targets, recovery targets, and live verification still require approval.
