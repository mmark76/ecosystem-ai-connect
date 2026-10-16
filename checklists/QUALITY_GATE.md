# Quality Gate

This DNA gate records how the project demonstrated applicable Engineering Standards requirements, including `ENG-TEST-001`, `ENG-DOC-001`, `ENG-REL-001`, `ENG-OBS-001`, and `ENG-PERF-001`. The authoritative requirement text remains in [Ecosystem Engineering Standards](https://github.com/mmark76/Ecosystem-Engineering-Standards/blob/main/ENGINEERING-REQUIREMENTS.md).

Before evaluating the result, classify each item as `APPLICABLE` or `NOT_APPLICABLE`. A `NOT_APPLICABLE` classification requires scope-based justification, an accountable owner, and a re-evaluation trigger in the evidence. For this headless SDK, visual checks may be `NOT_APPLICABLE` only because a consuming application owns the UI; this does not waive its UI, accessibility, privacy, security, or testing obligations.

- [ ] Formatting passes.
- [ ] Linting passes.
- [ ] Type checking passes where applicable.
- [ ] Unit tests pass.
- [ ] Integration tests pass where required.
- [ ] API tests pass where required.
- [ ] End-to-end critical journeys pass.
- [ ] Accessibility checks pass where applicable.
- [ ] Manual keyboard, focus, contrast, scaling, and target-size checks pass where applicable.
- [ ] Responsive layouts pass at the required narrow, medium, and wide sizes where this repository owns a UI; otherwise record `NOT_APPLICABLE` with the consuming-application owner.
- [ ] Required loading, empty, error, offline, and success states pass where this repository owns the relevant interface; otherwise record `NOT_APPLICABLE` with owner and rationale.
- [ ] Greek and English content passes where supported.
- [ ] Approved design tokens, theme, and shared components are used where this repository owns UI; otherwise record `NOT_APPLICABLE` with the consuming-application owner.
- [ ] Performance criteria pass where defined.
- [ ] Build succeeds.
- [ ] Static analysis passes.
- [ ] Dependency scan passes.
- [ ] Regression tests cover significant fixes where practical.
- [ ] No valid test was weakened to obtain a pass.
- [ ] Documentation and traceability are current.
- [ ] Required evidence is stored.

**Result:** PASS / FAIL / NOT APPLICABLE
