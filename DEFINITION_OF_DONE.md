# Definition of Done

A task is `COMPLETE` only when all applicable conditions below are satisfied.

This is a DNA completion method, not an independent standards catalogue. Applicable cross-cutting requirements come from [Ecosystem Engineering Standards](https://github.com/mmark76/Ecosystem-Engineering-Standards/blob/main/ENGINEERING-REQUIREMENTS.md); applicable security requirements and controls come from [The Shield](https://github.com/mmark76/Ecosystem-Security-The-Shield).

## Functional

- Approved requirement IDs are implemented.
- Acceptance criteria pass.
- Edge cases and error paths are handled.
- No unapproved scope was added.

## Architecture

- Applicable `ENG-ARCH-*`, `ENG-MAINT-*`, `ENG-API-*`, `ENG-DATA-*`, `ENG-CONF-*`, `ENG-DEP-*`, and `ENG-DEBT-*` requirements are mapped to implementation and verification evidence.
- Project architecture, interfaces, dependencies, and significant decisions reflect the implemented result.
- The architecture gate passes and no unresolved or unapproved engineering exception remains.

## Security and Data

- Applicable Shield requirements and controls are identified by their authoritative references.
- Project-owned threat, control, exception, verification, and sanitized evidence records are current.
- The security gate passes and no unresolved or unapproved blocking security exception remains.
- Applicable non-security data-evolution evidence for `ENG-DATA-001` is complete.

## Consumer Experience and Accessibility

The current project is headless and has no standalone UI, site, or accessibility surface. When an SDK contract affects a consumer's consent or error experience, document the interaction and accessibility implications; the consumer application owns visual implementation and verification.

## Quality

- Applicable `ENG-TEST-001`, `ENG-REL-001`, `ENG-OBS-001`, and `ENG-PERF-001` verification is recorded.
- Formatting passes.
- Linting passes.
- Type checking passes where applicable.
- Required tests pass.
- Accessibility tests pass where applicable.
- Build passes.
- Required security and dependency scans pass.
- Regression coverage exists for significant fixes where practical.

## Documentation and Evidence

- Applicable `ENG-DOC-001` evidence is complete.
- Documentation reflects the implementation.
- Traceability is updated.
- Test and verification evidence is recorded.
- Known limitations and deferred work are explicit.
- No required evidence is missing.

## Cleanup Boundary

Completion does not require unrelated cleanup or optional optimization. Such work belongs in `FUTURE_BACKLOG.md` unless formally added to scope.
