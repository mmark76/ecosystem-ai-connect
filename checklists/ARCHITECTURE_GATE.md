# Architecture Gate

This DNA gate verifies the project's implementation of applicable [Ecosystem Engineering Standards](https://github.com/mmark76/Ecosystem-Engineering-Standards/blob/main/ENGINEERING-REQUIREMENTS.md), especially `ENG-ARCH-*`, `ENG-MAINT-*`, `ENG-API-*`, `ENG-DATA-*`, `ENG-DEP-*`, and `ENG-DEBT-*`. Its checklist items are verification prompts, not a separate source of normative requirements.

Classify each item as `APPLICABLE` or `NOT_APPLICABLE` in the architecture evidence. A `NOT_APPLICABLE` classification requires scope-based justification, an accountable owner, and a re-evaluation trigger; it does not remove the requirement from a future implementation or consuming application that owns the capability.

- [ ] Architecture supports all mandatory release requirements.
- [ ] System and trust boundaries are documented.
- [ ] Modules have clear responsibilities and ownership.
- [ ] Public interfaces are explicit.
- [ ] Dependency direction is defined.
- [ ] Circular dependencies are zero.
- [ ] Domain rules are separated from infrastructure and from UI where this repository owns UI; otherwise record the UI separation item as `NOT_APPLICABLE` with the consuming-application owner.
- [ ] Shared code is genuinely shared.
- [ ] Database changes use versioned migrations where a persistent database exists; otherwise record `NOT_APPLICABLE` with owner, rationale, and re-evaluation trigger.
- [ ] External providers are isolated where justified.
- [ ] No blocking oversized or multi-responsibility units remain.
- [ ] No unapproved architecture exception remains.
- [ ] Architecture documentation and ADRs are current.
- [ ] No speculative architecture was added beyond the approved need.

**Result:** PASS / FAIL / NOT APPLICABLE
