# Ecosystem AI Connect

Ecosystem AI Connect is a headless, local-first connectivity SDK for compatible Markellos Ecosystem applications. It is independent of `ecosystem-core` and has no dashboard, website, cloud backend, or verified live provider integration.

## Current status

This repository contains a bounded OpenAI connector v1: text-only OpenAI Responses API requests with `store: false` and native local credential storage. It has no configured key, OAuth flow, live-provider verification, package publication, or production operation. The initial intended consumer is AI Training Lab; StudyApp, Organize Your PC, and other compatible applications remain subject to their own integration approval.

## Architecture boundary

- Consumer applications own their user interface, local process, consent experience, and application authorization.
- This SDK owns an OpenAI v1 adapter behind a small public connector contract; future providers must remain isolated behind equivalent boundaries.
- OpenAI is the selected first provider. No other provider is approved.
- The selected infrastructure profile is `LOCAL_ONLY`. Calling an external provider is not the same as hosting an Ecosystem AI Connect service.

## Foundation authority

The Markellos Ecosystem Foundations remain authoritative. [`FOUNDATION_SOURCES.md`](FOUNDATION_SOURCES.md) and [`FOUNDATION_VERSIONS`](FOUNDATION_VERSIONS) record the sanitized local adoption boundary and exact pinned revisions. The local snapshots are reference material, not competing standards.

Strong Room is retained as a pinned Shield reference because the Foundation validator requires it. It is **not selected** for this SDK's local-only runtime; adopting it for a future private HTTP workload needs a separate decision.

## Available verification

```powershell
node scripts/validate-foundations.cjs
node --test tests/foundations.test.cjs foundations/shield/tests/*.test.cjs
npm ci
npm run build
npm run test:sdk
npm run audit:dependencies
```

These commands verify the Foundation import, TypeScript build, mocked connector behavior, and production-dependency advisory state. They do not prove a native keyring round trip on every platform, provider access, an OpenAI account, package publication, or production readiness.

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
