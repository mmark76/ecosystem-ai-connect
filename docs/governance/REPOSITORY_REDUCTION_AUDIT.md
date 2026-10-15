# Repository Reduction Audit

**Baseline:** `main` at `ddc11cfc8cc686652a5bf28eef67153bc19a3044` on 2026-10-15. The baseline contained 127 tracked files. Classifications below were made before cleanup; `REFERENCE` files are pinned Foundation material and are not runtime selection decisions.

| File | Classification | Rationale |
|---|---|---|
| `.github/copilot-instructions.md` | ADAPT | Replace template/UI guidance with SDK boundary guidance. |
| `.github/pull_request_template.md` | ADAPT | Retain PR governance; remove dashboard fields. |
| `.github/workflows/validate-dashboard.yml` | REMOVE | Validates only the removed dashboard shell. |
| `.nojekyll` | REMOVE | Static-site hosting marker; no site remains. |
| `404.html` | REMOVE | Static-site page; no site remains. |
| `AGENTS.md` | ADAPT | Preserve managed global rules; specialize repository section. |
| `ARCHITECTURE_RULES.md` | KEEP | Generic DNA architecture adoption method remains applicable. |
| `CHANGELOG.md` | ADAPT | Record project specialization rather than template history. |
| `CHANGE_CONTROL.md` | KEEP | Scope-control process remains applicable. |
| `COMPLETION_AND_STOP_PROTOCOL.md` | KEEP | Controlled completion method remains applicable. |
| `DEFINITION_OF_DONE.md` | ADAPT | Mark standalone UI obligations non-applicable. |
| `DEPLOYMENT.md` | ADAPT | Record no deployment and `LOCAL_ONLY` boundary. |
| `FOUNDATION_SOURCES.md` | ADAPT | Preserve pins while recording project adoption boundary. |
| `FOUNDATION_VERSIONS` | REFERENCE | Exact Foundation revision pins. |
| `FRAMEWORK.md` | ADAPT | Retain method; remove dashboard-specific version language. |
| `FRAMEWORK_VERSION` | REFERENCE | Adopted framework version marker. |
| `FUTURE_BACKLOG.md` | ADAPT | Replace examples with controlled SDK follow-ups. |
| `GLOBAL_CODEX_RULES.md` | REFERENCE | Managed shared rules copy; preserve unchanged. |
| `PROJECT_DASHBOARD_GUIDE.md` | REMOVE | Standalone dashboard policy is not SDK runtime scope. |
| `PROJECT_OPERATING_MODEL.md` | KEEP | Generic operating model remains applicable. |
| `README.md` | ADAPT | Accurate headless SDK positioning and status required. |
| `README_SITE.txt` | REMOVE | Static-site instruction only. |
| `SECURITY_RULES.md` | KEEP | Shield adoption method remains applicable. |
| `TEMPLATE_SITE.md` | REMOVE | Static reference-site procedure only. |
| `TEMPLATE_VERSION` | REFERENCE | Required adoption provenance marker and validator input. |
| `UI_UX_RULES.md` | REMOVE | Project-owned visual-system rules are not needed by a headless SDK. |
| `UPGRADE_GUIDE.md` | KEEP | Controlled Foundation upgrade method remains applicable. |
| `_headers` | REMOVE | Static-site hosting configuration only. |
| `_redirects` | REMOVE | Static-site hosting configuration only. |
| `checklists/ARCHITECTURE_GATE.md` | KEEP | Applicable controlled architecture gate. |
| `checklists/DEVELOPMENT_READINESS.md` | ADAPT | Headless non-applicability must be applied at review. |
| `checklists/ENGINEERING_GATE.md` | KEEP | Applicable Engineering Standards gate. |
| `checklists/FINAL_COMPLETION_GATE.md` | KEEP | Applicable completion gate. |
| `checklists/INFRASTRUCTURE_READINESS.md` | KEEP | Applicable profile-selection gate. |
| `checklists/INITIALIZATION_GATE.md` | ADAPT | Replace dashboard prompts with headless responsibility. |
| `checklists/PRODUCTION_READINESS.md` | KEEP | Future release gate; not currently passed. |
| `checklists/QUALITY_GATE.md` | KEEP | Applicable quality gate. |
| `checklists/SECURITY_GATE.md` | KEEP | Applicable Shield adoption gate. |
| `checklists/UI_UX_REVIEW.md` | REMOVE | No project-owned UI is in scope. |
| `dashboard.css` | REMOVE | Dashboard presentation implementation. |
| `dashboard.js` | REMOVE | Dashboard behavior implementation. |
| `design-system/README.md` | REMOVE | Explains removed project-owned UI assets. |
| `design-system/brand/README.md` | REMOVE | Unused dashboard branding asset guidance. |
| `design-system/tokens/tokens.css` | REMOVE | Unused UI token adapter. |
| `design-system/tokens/tokens.json` | REMOVE | Unused UI token source. |
| `docs/DEPLOYMENT_CLOUDFLARE.md` | REMOVE | Unselected static-hosting procedure. |
| `docs/INDEX.md` | ADAPT | Re-index retained SDK records. |
| `docs/architecture/ARCHITECTURE_DECISIONS.md` | ADAPT | Record headless, local-only, provider-boundary decisions. |
| `docs/architecture/SYSTEM_ARCHITECTURE.md` | ADAPT | Replace blank/template and dashboard architecture. |
| `docs/completion/COMPLETION_REPORT.md` | ADAPT | Clarify baseline is not connectivity release completion. |
| `docs/data/DATA_PLAN.md` | ADAPT | Record no current data and future token boundary. |
| `docs/design/UI_UX_DESIGN_SYSTEM.md` | REMOVE | Project-owned design system has no SDK use. |
| `docs/governance/EXCEPTIONS.md` | ADAPT | Remove examples and record no approved exceptions. |
| `docs/governance/GLOBAL_CODEX_RULES_SYNC.md` | REFERENCE | Required managed-rule synchronization mechanism. |
| `docs/governance/RISK_REGISTER.md` | ADAPT | Replace examples with SDK risks. |
| `docs/infrastructure/INFRASTRUCTURE_PROFILE.md` | ADAPT | Select and justify `LOCAL_ONLY`. |
| `docs/operations/OPERATIONS_AND_RECOVERY.md` | ADAPT | Record absence of deployed operations. |
| `docs/product/PROJECT_BRIEF.md` | ADAPT | Replace blank template with actual project brief. |
| `docs/product/RELEASE_SCOPE.md` | ADAPT | Replace example scope with authorized reduction scope. |
| `docs/requirements/ACCEPTANCE_CRITERIA.md` | ADAPT | Replace example criteria with measurable reduction criteria. |
| `docs/requirements/OBJECTIVES.md` | ADAPT | Replace example objectives with SDK-foundation objectives. |
| `docs/requirements/TRACEABILITY_MATRIX.md` | ADAPT | Replace example rows with current scope traceability. |
| `docs/security/SECURITY_PLAN.md` | ADAPT | Define future authorization/token controls without implementation claim. |
| `docs/security/THREAT_MODEL.md` | ADAPT | Define local SDK threats and planned treatment. |
| `docs/testing/TEST_STRATEGY.md` | ADAPT | Remove dashboard commands; retain actual Foundation checks. |
| `engineering/checks/README.md` | REMOVE | Empty template-owned check boundary. |
| `engineering/requirements/ENG_ADOPTION_MATRIX.md` | ADAPT | Replace example row with scope-specific applicability. |
| `evidence/README.md` | REMOVE | Only supported removed dashboard evidence tree. |
| `evidence/canonical-dashboard-shell/desktop-1440.png` | REMOVE | Dashboard-only visual evidence. |
| `evidence/canonical-dashboard-shell/footer.png` | REMOVE | Dashboard-only visual evidence. |
| `evidence/canonical-dashboard-shell/info-dialog.png` | REMOVE | Dashboard-only visual evidence. |
| `evidence/canonical-dashboard-shell/mobile-390.png` | REMOVE | Dashboard-only visual evidence. |
| `evidence/canonical-dashboard-shell/settings-dialog.png` | REMOVE | Dashboard-only visual evidence. |
| `evidence/canonical-dashboard-shell/tablet-768.png` | REMOVE | Dashboard-only visual evidence. |
| `foundations/engineering-standards/ENGINEERING-REQUIREMENTS.md` | REFERENCE | Pinned sanitized Engineering Standards catalogue. |
| `foundations/engineering-standards/README.md` | REFERENCE | Snapshot provenance and use boundary. |
| `foundations/infrastructure/README.md` | REFERENCE | Pinned infrastructure adoption boundary. |
| `foundations/shield/README.md` | REFERENCE | Pinned Shield snapshot boundary. |
| `foundations/shield/alerts/README.md` | REFERENCE | Shield reference material. |
| `foundations/shield/checks/strong-room/README.md` | REFERENCE | Strong Room reference instructions; runtime use is not applicable. |
| `foundations/shield/checks/strong-room/check-support.cjs` | REFERENCE | Pinned Strong Room support utility. |
| `foundations/shield/checks/strong-room/verify-container-hardening.cjs` | REFERENCE | Pinned Strong Room verifier. |
| `foundations/shield/checks/strong-room/verify-no-public-port.md` | REFERENCE | Pinned Strong Room verification guidance. |
| `foundations/shield/checks/strong-room/verify-origin-binding.cjs` | REFERENCE | Pinned Strong Room verifier. |
| `foundations/shield/checks/strong-room/verify-runtime-artifact.cjs` | REFERENCE | Pinned Strong Room verifier. |
| `foundations/shield/checks/strong-room/verify-security-boundary.md` | REFERENCE | Pinned Strong Room verification guidance. |
| `foundations/shield/docs/security-capability-architecture.md` | REFERENCE | Generated pinned Shield reference. |
| `foundations/shield/docs/security-capability-model.md` | REFERENCE | Generated pinned Shield reference. |
| `foundations/shield/model/security-capabilities.json` | REFERENCE | Pinned Shield capability model. |
| `foundations/shield/monitoring/README.md` | REFERENCE | Shield reference material. |
| `foundations/shield/reference-implementations/ecosystem-control.md` | REFERENCE | Reference implementation evidence; not adopted runtime. |
| `foundations/shield/schemas/evidence-item.schema.json` | REFERENCE | Pinned Shield schema. |
| `foundations/shield/schemas/security-capability.schema.json` | REFERENCE | Pinned Shield schema. |
| `foundations/shield/schemas/security-control.schema.json` | REFERENCE | Pinned Shield schema. |
| `foundations/shield/schemas/security-exception.schema.json` | REFERENCE | Pinned Shield schema. |
| `foundations/shield/scripts/render-capability-catalog.cjs` | REFERENCE | Pinned Shield generation utility. |
| `foundations/shield/standards/private-app-security-baseline/README.md` | REFERENCE | Strong Room baseline; local SDK runtime use is not applicable. |
| `foundations/shield/standards/private-app-security-baseline/acceptance-criteria.md` | REFERENCE | Pinned Strong Room reference. |
| `foundations/shield/standards/private-app-security-baseline/architecture.md` | REFERENCE | Pinned Strong Room reference. |
| `foundations/shield/standards/private-app-security-baseline/requirements.md` | REFERENCE | Pinned Strong Room reference. |
| `foundations/shield/standards/private-app-security-baseline/threat-boundaries.md` | REFERENCE | Pinned Strong Room reference. |
| `foundations/shield/templates/strong-room/README.md` | REFERENCE | Pinned Strong Room template boundary. |
| `foundations/shield/templates/strong-room/access/README.md` | REFERENCE | Pinned Strong Room template reference. |
| `foundations/shield/templates/strong-room/deployment/README.md` | REFERENCE | Pinned Strong Room template reference. |
| `foundations/shield/templates/strong-room/docker/compose.yaml.template` | REFERENCE | Pinned Strong Room template; not selected. |
| `foundations/shield/templates/strong-room/health/README.md` | REFERENCE | Pinned Strong Room template reference. |
| `foundations/shield/templates/strong-room/logout/README.md` | REFERENCE | Pinned Strong Room template reference. |
| `foundations/shield/templates/strong-room/nginx/nginx.conf.template` | REFERENCE | Pinned Strong Room template; not selected. |
| `foundations/shield/templates/strong-room/tunnel/README.md` | REFERENCE | Pinned Strong Room template reference. |
| `foundations/shield/templates/strong-room/tunnel/ingress.yaml.template` | REFERENCE | Pinned Strong Room template; not selected. |
| `foundations/shield/tests/capability-model.test.cjs` | REFERENCE | Pinned Shield regression test. |
| `foundations/shield/tests/strong-room.test.cjs` | REFERENCE | Pinned Strong Room regression test. |
| `index.html` | REMOVE | Static dashboard entry point. |
| `infrastructure/checks/README.md` | REMOVE | Redundant project-owned infrastructure template. |
| `infrastructure/patterns/README.md` | REMOVE | Redundant project-owned infrastructure template. |
| `infrastructure/templates/README.md` | REMOVE | Redundant project-owned infrastructure template. |
| `references/GENERAL_SOFTWARE_PROJECT_GUIDE.md` | REMOVE | Generic template guide duplicated by Foundation references. |
| `robots.txt` | REMOVE | Static-site crawler policy; no site remains. |
| `scripts/build-site.cjs` | REMOVE | Dashboard-only static-site build. |
| `scripts/sync_global_codex_rules.py` | REFERENCE | Required managed-rule synchronization helper. |
| `scripts/validate-foundations.cjs` | KEEP | Required local Foundation integrity and safety check. |
| `security/baseline/README.md` | REMOVE | Redundant project-owned Shield boundary. |
| `security/checks/README.md` | REMOVE | Redundant empty security-check template. |
| `security/templates/README.md` | REMOVE | Redundant empty security-template boundary. |
| `site.webmanifest` | REMOVE | Dashboard web-app manifest. |
| `tests/dashboard-shell.test.cjs` | REMOVE | Tests only the removed dashboard. |
| `tests/foundations.test.cjs` | KEEP | Covers the retained Foundation validator. |

## Decisions requiring owner authorization

1. Select a license and any contribution/publication terms.
2. Name product, technical, security, privacy, and release owners before development readiness.
3. Approve the supported platforms, credential/token storage mechanism, authorization flow, provider registration, and token lifecycle before live connectivity.

The baseline includes no evidence of an active published site. This change removes the static-site implementation but does not alter GitHub Pages, DNS, Cloudflare, or any external deployment setting.
