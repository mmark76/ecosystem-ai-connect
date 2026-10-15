# Foundation Sources and Inclusion Policy

Ecosystem AI Connect is an adopting project, not a canonical Foundation. Exact reviewed revisions are pinned in [`FOUNDATION_VERSIONS`](FOUNDATION_VERSIONS).

| Foundation | Retained local material | Boundary |
|---|---|---|
| Ecosystem Framework — The DNA | Governance, traceability, completion, and project-record method. | The upstream Framework remains authoritative. |
| Ecosystem Engineering Standards | Sanitized `ENG-*` reference snapshot and project adoption matrix. | The upstream requirements remain normative. |
| Ecosystem Security — The Shield | Sanitized capability model, schemas, checks, Strong Room pattern, and project security-adoption records. | No populated configuration, credential, endpoint, private evidence, or runtime claim is imported. |
| Ecosystem Infrastructure | Sanitized local boundary guidance and infrastructure-profile method. | No hosting or runtime infrastructure is selected by this repository. |

The Foundation snapshot is intentionally retained as versioned reference material. Run `node scripts/validate-foundations.cjs` and the Foundation tests before changing it. Strong Room is retained for provenance and future applicability but is not selected for the current `LOCAL_ONLY` SDK profile.
