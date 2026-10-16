# Release Scope — Template Reduction and Project Specialization

- **Scope ID:** `AIC-SCOPE-001`
- **Release:** repository-foundation baseline
- **Approval:** the repository-reduction task is authorized; no production, provider, package-publication, or release-completion approval is implied.

**Subsequent governance decision:** [`AIC-CCR-001`](../governance/GOVERNANCE_DECISIONS.md#aic-ccr-001) records a separately owner-approved scope increase for ownership, future security/data baselines, and Apache-2.0 licensing. It does not alter this historical repository-reduction scope or approve runtime implementation.

## In scope

| Outcome | Status |
|---|---|
| Remove unused project-owned dashboard and static-site implementation after dependency verification. | IN SCOPE |
| Establish accurate headless-SDK architecture, security, infrastructure, testing, and governance records. | IN SCOPE |
| Preserve pinned Foundation provenance and applicable controls. | IN SCOPE |
| Record open licensing and future-authentication decisions without deciding them. | IN SCOPE |

## Out of scope

- OAuth or Sign in with ChatGPT implementation.
- OpenAI API calls, provider adapters, credential or token storage, package publication, cloud hosting, DNS, and deployment.
- Changes to `ecosystem-core`, AI Training Lab, StudyApp, Organize Your PC, or any other repository.
- Selecting a software license or granting reuse permissions under the original reduction scope. The later, separately traced `AIC-CCR-001` decision selects Apache-2.0 only; it does not approve package publication or grant any additional operational authorization.

## Foundation impact

Applicable Engineering Standards and Shield requirements are mapped in the adoption, security, and threat-model records. The infrastructure profile is `LOCAL_ONLY`; Strong Room and deployment patterns remain retained reference material but are not selected runtime architecture.

## AIC-SCOPE-002 — OpenAI connector v1

- **Release owner:** `mmark76`
- **Approval:** [`AIC-CCR-002`](../governance/GOVERNANCE_DECISIONS.md#aic-ccr-002)
- **Target:** local Node.js 22+ SDK implementation for Windows, macOS, and Linux; no package publication.

### In scope

- A TypeScript public connector that scopes a user-owned OpenAI project API key to one user and consumer application.
- Native OS credential-store integration with no plaintext or plain-file fallback.
- Text-only, non-streaming OpenAI Responses API requests with `store: false`, bounded errors, timeout/cancellation support, and offline unit tests.
- Dependency lockfile, dependency audit, documentation, threat/risk records, and traceability for this implementation.

### Out of scope

- OAuth, callback listeners, browser/UI consent, ChatGPT account or plan eligibility, and OpenAI administrative keys.
- Tools, files, images, audio, streaming, background requests, conversation history, provider-side key revocation, analytics, or prompt/response persistence.
- A live OpenAI API key, OpenAI account/billing setup, production traffic, package publication, hosted infrastructure, DNS, or changes to consumer repositories.
