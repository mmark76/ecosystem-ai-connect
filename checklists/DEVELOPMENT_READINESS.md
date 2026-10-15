# Development Readiness Gate

Classify each item as `APPLICABLE` or `NOT_APPLICABLE` before selecting a decision. A `NOT_APPLICABLE` classification requires a written scope-based justification, an accountable owner, and a re-evaluation trigger in the gate evidence; it does not waive the requirement for a consuming application that owns the omitted capability.

- [ ] `checklists/INITIALIZATION_GATE.md` has a recorded `PASS`; unresolved initialization items block this gate.
- [ ] Problem and users are defined.
- [ ] Product value and success measures are defined.
- [ ] Release scope is finite and approved.
- [ ] Out-of-scope items are explicit.
- [ ] Mandatory objectives have IDs.
- [ ] Acceptance criteria are measurable.
- [ ] Critical SDK/consumer journeys are defined; UI states are `NOT_APPLICABLE` only when this repository owns no UI, with consumer-app owner and re-evaluation trigger recorded.
- [ ] The approved app theme is selected where this repository owns an application UI; otherwise record `NOT_APPLICABLE` with its consumer-app owner.
- [ ] Shared design tokens and component strategy are defined where this repository owns UI; otherwise record `NOT_APPLICABLE` with its consumer-app owner.
- [ ] Supported runtime and platform behavior is defined; visual responsive behavior is `NOT_APPLICABLE` only when this repository owns no UI, with owner and re-evaluation trigger recorded.
- [ ] SDK-exposed accessibility and localization requirements are measurable; standalone UI verification is `NOT_APPLICABLE` only when owned by a consuming application, with owner recorded.
- [ ] Roles and ownership are assigned.
- [ ] Data inventory and classification exist.
- [ ] Criticality and risks are assessed.
- [ ] Initial architecture is documented.
- [ ] Module boundaries are defined.
- [ ] Threat model exists.
- [ ] Mandatory security controls are selected.
- [ ] Engineering gate passes for the applicable `ENG-*` adoption records.
- [ ] Infrastructure readiness is evaluated for the selected profile; `LOCAL_ONLY` or `NOT_APPLICABLE` classifications record scope, owner, rationale, and re-evaluation trigger for hosted controls.
- [ ] Test strategy and project commands are defined.
- [ ] UI/UX review and visual accessibility verification methods are defined where this repository owns UI; otherwise record `NOT_APPLICABLE` with the consuming-application owner.
- [ ] Environments and operations concept are defined.
- [ ] No unresolved blocker prevents safe development.

**Decision:** GO / CONDITIONAL GO / REWORK / NO-GO
