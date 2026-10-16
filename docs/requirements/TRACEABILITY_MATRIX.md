# Requirements Traceability Matrix

| Requirement ID | Scope | Design / decision | Implementation | Verification | Evidence | Status |
|---|---|---|---|---|---|---|
| AIC-REQ-001 | AIC-SCOPE-001 | ADR-001 | Remove dashboard/site cluster; update headless records. | AIC-AC-001 | [AIC-AC-001 evidence](../governance/REPOSITORY_REDUCTION_VERIFICATION.md#aic-ac-001) | VERIFIED |
| AIC-REQ-002 | AIC-SCOPE-001 | ADR-002 | Set `LOCAL_ONLY`; retain Foundation references. | AIC-AC-002 | [AIC-AC-002 evidence](../governance/REPOSITORY_REDUCTION_VERIFICATION.md#aic-ac-002) | VERIFIED WITH LIMITATION |
| AIC-REQ-003 | AIC-SCOPE-001 | ADR-003 | Security plan, threat model, and deferred work records. | AIC-AC-003 | [AIC-AC-003 evidence](../governance/REPOSITORY_REDUCTION_VERIFICATION.md#aic-ac-003) | VERIFIED |
| AIC-REQ-004 | AIC-CCR-001 | AIC-CCR-001 | Record the named accountable owner, future authorization/data baseline, Apache-2.0 decision, and remaining decisions without runtime implementation. | AIC-AC-004 | [AIC-AC-004 evidence](../governance/REPOSITORY_REDUCTION_VERIFICATION.md#aic-ac-004) | BASELINE_RECORDED; NOT_YET_VERIFIED |
| AIC-REQ-005 | AIC-SCOPE-002 | ADR-004; AIC-CCR-002 | TypeScript OpenAI connector, native credential-store adapter, and offline security-focused tests. | AIC-AC-005 | [AIC-AC-005 evidence](../governance/OPENAI_CONNECTOR_VERIFICATION.md#aic-ac-005) | IMPLEMENTED; NOT_YET_RELEASE_VERIFIED |

The requirement-level assessment of all pinned `ENG-*` IDs is in [`../../engineering/requirements/ENG_ADOPTION_MATRIX.md`](../../engineering/requirements/ENG_ADOPTION_MATRIX.md). The security plan assesses Strong Room `SR-01` through `SR-11` and relevant Shield capability identifiers, while the threat model maps planned threats to those capabilities. Evidence is not a release approval.
