# Risk Register

| Risk ID | Description | Treatment | Status |
|---|---|---|---|
| AIC-RISK-001 | A future implementation could expose credentials or authorization material through local storage, logging, or consumer boundaries. | Require threat-model review, platform-specific protected storage, redaction, and security tests before implementation. | OPEN |
| AIC-RISK-002 | Provider authorization and ChatGPT-plan eligibility requirements may change. | Re-check official provider documentation during implementation; do not claim eligibility or unlimited access. | OPEN |
| AIC-RISK-003 | The repository has no license, so reuse and distribution permissions are unclear. | Owner must select and authorize a license before publication. | OPEN / NEEDS_DECISION |
| AIC-RISK-004 | Generic template assumptions could obscure actual SDK readiness. | Retain this reduction audit and require scope-specific gates before implementation. | MITIGATED BY THIS CHANGE |
