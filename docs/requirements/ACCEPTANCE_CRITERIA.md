# Acceptance Criteria

| Acceptance ID | Objective | Criterion | Verification procedure | Evidence | Status |
|---|---|---|---|---|---|
| AIC-AC-001 | AIC-OBJ-001 | No project-owned active dashboard, static-site workflow, UI asset, or dashboard test remains; documentation describes a headless SDK. | Baseline/subject diff and subject-tree inventory. | [Verification record](../governance/REPOSITORY_REDUCTION_VERIFICATION.md#aic-ac-001) | VERIFIED |
| AIC-AC-002 | AIC-OBJ-002 | Required Foundation files, pins, validator, and regression tests remain intact and pass. | Foundation diff, validator, and regression suite. | [Verification record](../governance/REPOSITORY_REDUCTION_VERIFICATION.md#aic-ac-002) | VERIFIED WITH LIMITATION |
| AIC-AC-003 | AIC-OBJ-003 | Documentation distinguishes planned, implemented, deferred, and non-applicable work and contains no unsupported connectivity claims. | Link, stale-reference, and implementation-claim checks plus document review. | [Verification record](../governance/REPOSITORY_REDUCTION_VERIFICATION.md#aic-ac-003) | VERIFIED |
| AIC-AC-004 | AIC-OBJ-004 | The governance record names the accountable technical, security, privacy/data, and incident/operations owner; records the approved future baseline and remaining decisions; and does not authorize a provider or runtime implementation. | Trace the decision to the objective, requirement, security, product, and initialization records; validate links and prohibited-claim assertions against the reviewed head. | [Verification record](../governance/REPOSITORY_REDUCTION_VERIFICATION.md#aic-ac-004) | BASELINE_RECORDED; NOT_YET_VERIFIED |

`VERIFIED WITH LIMITATION` identifies a completed applicable check with an explicitly recorded environment limitation; it is not a product-release approval. No criterion in this release verifies OAuth, provider access, subscription eligibility, or a production service.
