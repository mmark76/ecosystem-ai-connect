# Infrastructure Profile

- **Selected profile:** `LOCAL_ONLY`
- **Rationale:** the current repository scope is a local, headless SDK foundation and does not introduce a hosted-service implementation, deployment target, public ingress, database, or central credential store.
- **External dependency boundary:** the approved local OpenAI connector v1 may communicate with the OpenAI Responses API when a consumer supplies a locally stored credential. That communication is not a deployment of Ecosystem AI Connect. No live credential or external infrastructure change is authorized by this repository.
- **Package publication:** a future release/distribution concern, not runtime hosting.
- **Strong Room:** retained pinned Shield reference; `NOT_APPLICABLE` to the current local-only runtime because there is no private HTTP workload, container deployment, tunnel, or origin to protect.

Any selection of `SHARED_INFRASTRUCTURE` or `DEPLOYED_SERVICE` requires a separate approved architecture, security, deployment, rollback, ownership, and recovery record. This repository does not configure or change cloud infrastructure, DNS, GitHub Pages, or production resources; their external state has not been verified.
