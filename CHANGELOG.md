# Changelog

## Unreleased — 2026-10-16

### Changed

- Specialized the repository from an integrated project template to the Ecosystem AI Connect headless-SDK foundation.
- Removed the unused dashboard/static-site implementation and its project-owned validation assets.
- Added project-specific architecture, security, infrastructure, testing, risk, and traceability records.
- Added the bounded `AIC-SCOPE-002` TypeScript OpenAI Responses connector: user/application-isolated native credential storage, text-only requests with `store: false`, redacted errors, and mocked tests.

### Preserved

- Pinned, sanitized Foundation references, provenance, validator, and regression tests.

No OAuth, callback listener, streaming, tools, files, background processing, package publication, deployment, OpenAI account change, or live OpenAI request is included in this change. Apache-2.0 is selected as the repository license; that decision does not authorize package publication or a release.
