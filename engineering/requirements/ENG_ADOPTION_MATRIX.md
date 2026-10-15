# Engineering Standards Adoption Matrix

The upstream Engineering Standards remain authoritative. This matrix records project applicability; no row is a claim that a future SDK implementation is verified.

| ENG area | Applicability | Current evidence / decision | Status |
|---|---|---|---|
| Architecture and maintainability | APPLICABLE | Headless boundary, dependency direction, and decisions in `docs/architecture/`. | BASELINE RECORDED |
| API and compatibility | APPLICABLE WHEN SDK API EXISTS | No public SDK contract exists; define compatibility and deprecation policy with the first API. | PLANNED |
| Testing, documentation, data | APPLICABLE | Current Foundation integrity checks; product records specialized. Runtime tests await implementation. | PARTIAL / PLANNED |
| Configuration and dependencies | APPLICABLE WHEN IMPLEMENTED | No runtime configuration or dependencies exist. Validate and inventory them before adding. | PLANNED |
| Security | APPLICABLE | Shield adoption, security plan, and threat model are project records. | BASELINE RECORDED |
| Reliability, observability, performance | APPLICABLE WHEN RUNTIME EXISTS | No service or runtime exists to measure. Define proportionate requirements with implementation. | NOT_APPLICABLE_CURRENTLY |
| Deployment | NOT_APPLICABLE_CURRENTLY | `LOCAL_ONLY`; no service deployment is selected. | NOT_APPLICABLE_CURRENTLY |
