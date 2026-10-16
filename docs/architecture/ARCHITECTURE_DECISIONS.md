# Architecture Decisions

## ADR-001 — Headless reusable SDK

- **Status:** accepted for the repository-foundation baseline.
- **Decision:** Ecosystem AI Connect is a headless library boundary, not a dashboard, website, or standalone application.
- **Consequences:** consumer applications retain UI ownership; dashboard files and UI-specific validation are removed.

## ADR-002 — Local-only infrastructure profile

- **Status:** accepted for the repository-foundation baseline.
- **Decision:** select `LOCAL_ONLY`; do not create a hosted backend or deployment configuration.
- **Consequences:** external provider communication, eventual package distribution, and independent hosting remain distinct future decisions.

## ADR-003 — Provider-neutral contract; provider selection deferred

- **Status:** superseded for `AIC-SCOPE-002` by ADR-004; retained as the repository-foundation baseline.
- **Decision:** public contracts isolate provider-specific behavior. Provider selection was deferred until the approved `AIC-CCR-002` decision selected OpenAI for the bounded v1 adapter.
- **Consequences:** the v1 adapter must not leak provider-specific types into the public contract. OAuth, a callback listener, provider SDK dependency, streaming, tools, files, background mode, package publication, and deployment remain outside the approved scope.

## ADR-004 — Bounded OpenAI Responses adapter

- **Status:** accepted for `AIC-SCOPE-002`.
- **Decision:** implement the first provider adapter as a TypeScript, text-only OpenAI Responses REST client. The connector owns the public request/error contract and depends only on an injected credential store and `fetch`; the native keyring and OpenAI HTTP protocol remain infrastructure details.
- **Security/data:** credentials are addressed by the user and consumer-application pair and stored only by the operating system keyring. Every request sets `store: false`; the connector creates no conversation, tool, file, streaming, background, or response-persistence feature.
- **Consequences:** no OpenAI SDK dependency, OAuth callback listener, UI, service, or provider-side key revocation is introduced. A future provider must implement the same public contract rather than leak provider-specific types into consumer code.
