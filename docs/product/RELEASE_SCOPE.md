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
