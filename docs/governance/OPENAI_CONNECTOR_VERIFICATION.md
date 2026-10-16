# OpenAI Connector v1 Verification Record

## Scope and authority

This record covers `AIC-CCR-002`, `AIC-SCOPE-002`, `AIC-OBJ-005`, and
`AIC-AC-005`. It documents local, credential-free verification of the bounded
OpenAI connector. It is not evidence of a live OpenAI account, provider data
retention settings, native secure-store behavior on every supported operating
system, package publication, or production operation.

## Required local evidence

| Check | Command or method | Expected result | Limitation |
|---|---|---|---|
| Compile and type check | `npm run build` | Strict TypeScript build succeeds. | Does not contact OpenAI or invoke a credential store. |
| Connector behavior | `npm run test:sdk` | Fakes verify user/application isolation, `store: false`, no streaming, local disconnect, and redacted errors. | A fake credential store and `fetch` do not prove platform keyring behavior or live protocol compatibility. |
| Foundation integrity | `node scripts/validate-foundations.cjs` | Pinned Foundation structure and sensitive-file scan succeed. | Does not validate new runtime dependency behavior. |
| Foundation regression | `node --test tests/foundations.test.cjs foundations/shield/tests/*.test.cjs` | Foundation and Shield regression tests succeed. | Does not perform a connector integration test. |
| Dependency review | `npm run audit:dependencies` | Audit result is recorded for the lockfile state. | Audit availability depends on the package registry. |
| Documentation and secret review | Markdown-link, stale-reference, and secret-shape scans | Links resolve and no secret is committed. | Cannot prove a consumer never supplies a secret to its own logs. |

## Explicit non-evidence and next gate

The following requires a separate owner-approved, non-production live test:

- a native secure-store round trip and removal on Windows, macOS, and Linux;
- an OpenAI project/account, billing, retention, and access review;
- a disposable non-administrative OpenAI project key;
- provider-side key revocation and incident/recovery exercise; and
- an actual Responses API request.

Until this evidence exists, the project Initialization Gate remains `REWORK`.
