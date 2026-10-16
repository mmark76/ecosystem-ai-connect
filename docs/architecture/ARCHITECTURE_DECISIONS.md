# Architecture Decisions

## ADR-001 — Headless reusable SDK

- **Status:** accepted for the repository-foundation baseline.
- **Decision:** Ecosystem AI Connect is a headless library boundary, not a dashboard, website, or standalone application.
- **Consequences:** consumer applications retain UI ownership; dashboard files and UI-specific validation are removed.

## ADR-002 — Local-only infrastructure profile

- **Status:** accepted for the repository-foundation baseline.
- **Decision:** select `LOCAL_ONLY`; do not create a hosted backend or deployment configuration.
- **Consequences:** external provider communication, eventual package distribution, and independent hosting remain distinct future decisions.

## ADR-003 — Provider-neutral contract with OpenAI as first intended adapter

- **Status:** accepted direction; implementation deferred.
- **Decision:** future public contracts must isolate provider-specific behavior. OpenAI is the only intended first adapter.
- **Consequences:** no OAuth flow, provider SDK, API key handling, or additional provider is introduced by this release.
