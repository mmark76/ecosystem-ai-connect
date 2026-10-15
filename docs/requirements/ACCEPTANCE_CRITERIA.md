# Acceptance Criteria

| Acceptance ID | Objective | Criterion | Verification | Status |
|---|---|---|---|---|
| AIC-AC-001 | AIC-OBJ-001 | No project-owned active dashboard, static-site workflow, UI asset, or dashboard test remains; documentation describes a headless SDK. | Tracked-file audit, reference search, and final diff. | VERIFIED |
| AIC-AC-002 | AIC-OBJ-002 | Required Foundation files, pins, validator, and regression tests remain intact and pass. | `node scripts/validate-foundations.cjs`; Foundation tests. | VERIFIED |
| AIC-AC-003 | AIC-OBJ-003 | Documentation distinguishes planned, implemented, deferred, and non-applicable work and contains no unsupported connectivity claims. | Documentation review and terminology scan. | VERIFIED |

No criterion in this release verifies OAuth, provider access, subscription eligibility, or a production service.
