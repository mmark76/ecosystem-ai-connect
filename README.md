# Ecosystem AI Connect

Ecosystem AI Connect is a planned, headless, local-first connectivity SDK for compatible Markellos Ecosystem applications. It is independent of `ecosystem-core` and has no dashboard, website, cloud backend, or live provider integration.

## Current status

This repository contains the governed SDK foundation only. OAuth, provider connectivity, credential persistence, package publication, and production operation are **not implemented**. The initial intended consumer is AI Training Lab; StudyApp, Organize Your PC, and other compatible applications are future consumers subject to their own integration approval.

## Architecture boundary

- Consumer applications own their user interface, local process, consent experience, and application authorization.
- This SDK will own provider-neutral contracts, provider adapters, and safe integration guidance when approved work implements them.
- No provider is selected or approved by this repository baseline.
- The selected infrastructure profile is `LOCAL_ONLY`. Calling an external provider is not the same as hosting an Ecosystem AI Connect service.

## Foundation authority

The Markellos Ecosystem Foundations remain authoritative. [`FOUNDATION_SOURCES.md`](FOUNDATION_SOURCES.md) and [`FOUNDATION_VERSIONS`](FOUNDATION_VERSIONS) record the sanitized local adoption boundary and exact pinned revisions. The local snapshots are reference material, not competing standards.

Strong Room is retained as a pinned Shield reference because the Foundation validator requires it. It is **not selected** for this SDK's local-only runtime; adopting it for a future private HTTP workload needs a separate decision.

## Available verification

```powershell
node scripts/validate-foundations.cjs
node --test tests/foundations.test.cjs foundations/shield/tests/*.test.cjs
```

These commands verify the Foundation import and its local regression tests. They do not prove OAuth, provider access, a package API, or production readiness.

## Key records

- [Project brief](docs/product/PROJECT_BRIEF.md)
- [Release scope](docs/product/RELEASE_SCOPE.md)
- [System architecture](docs/architecture/SYSTEM_ARCHITECTURE.md)
- [Security plan](docs/security/SECURITY_PLAN.md)
- [Infrastructure profile](docs/infrastructure/INFRASTRUCTURE_PROFILE.md)
- [Test strategy](docs/testing/TEST_STRATEGY.md)
- [Repository reduction audit](docs/governance/REPOSITORY_REDUCTION_AUDIT.md)
- [Open decisions and deferred work](FUTURE_BACKLOG.md)
- [Governance decisions](docs/governance/GOVERNANCE_DECISIONS.md)

## License

The repository is licensed under [Apache-2.0](LICENSE). This license decision does not approve package publication, provider connectivity, or a production release.
