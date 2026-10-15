# Repository Reduction Verification Procedure

## Purpose and evidence boundary

This tracked document defines a reproducible repository-reduction procedure. It intentionally does not embed the final SHA or observed results for a PR head: changing this document would otherwise create a new head and invalidate its own evidence reference.

For every PR-head verification, resolve the baseline and checked-out subject at execution time, then record the exact SHA, commands, date, environment limitation, and observed results in a durable PR comment. Link that comment from the applicable review discussion. This procedure verifies repository reduction only; it does not verify OAuth, provider connectivity, external GitHub Pages/DNS/Cloudflare state, production readiness, owner approval, or a release.

## Inputs and execution setup

Run from a clean checkout of the PR branch:

```powershell
git fetch origin --prune
$base = git rev-parse origin/main
$head = git rev-parse HEAD
git merge-base --is-ancestor $base $head
git status --short
git rev-parse $base
git rev-parse $head
```

The verifier must report the resolved `$base` and `$head`. `$base` is the verified PR base; `$head` is the actual checked-out revision under review. Do not substitute an earlier subject commit merely because it was the original reduction commit.

## AIC-AC-001 — Headless repository

```powershell
git ls-tree -r --name-only $base
git ls-tree -r --name-only $head
git diff --name-status --find-renames $base $head
git diff --stat --find-renames $base $head
```

Compare the baseline inventory with the current head, calculate additions, modifications, deletions, and renames from the name-status output, and validate the resulting baseline classifications against [Repository Reduction Audit](REPOSITORY_REDUCTION_AUDIT.md). Confirm that no removed dashboard/static-site entry point, workflow, test, build script, `design-system/` path, or project-owned UI record is tracked at `$head`.

The final PR evidence must report the resolved revisions, tracked-file counts, change counts, audit result, and headless-path result. Source removal does not establish that an external published site, GitHub Pages setting, DNS record, or Cloudflare configuration was disabled; no external infrastructure is queried or changed by this procedure.

## AIC-AC-002 — Foundation integrity

```powershell
git diff --exit-code $base $head -- FOUNDATION_VERSIONS foundations/
node scripts/validate-foundations.cjs
node --test tests/foundations.test.cjs foundations/shield/tests/*.test.cjs
```

The final PR evidence must report whether the pins and Foundation tree are unchanged, the validator result, and the complete test result. The known `directory symlink/junction inside artifact is rejected` test may be skipped when the execution environment cannot create a symlink or junction. Report that skip as a limitation; never convert it into a pass.

## AIC-AC-003 — Documentation consistency

Run the repository Markdown relative-link assertion, stale-reference assertion outside the reduction audit and this procedure, and assertions for unsupported implementation claims. Review the retained scope, architecture, security, infrastructure, operations, acceptance, traceability, completion, and checklist records against `$head`.

The final PR evidence must report the exact assertion commands and outcomes, including checks that the headless checklist classifications require scope-based justification, accountable ownership, and a re-evaluation trigger, and that deployment records distinguish repository implementation from unverified external infrastructure state.

## Historical evidence

The earlier execution against `6d000d81eb1eee0dfc9e3654cad5b388b6f75b4c` compared with `ddc11cfc8cc686652a5bf28eef67153bc19a3044` is historical evidence for the original reduction commit only. Its reported 38 removals, 29 modifications, and 1 addition do not describe later documentation corrections and must not be used as evidence for a later PR head.

## Gate boundary

This verification procedure does not change the acceptance-criteria status without a successful execution against the reviewed head, and it is not product-release approval. The Initialization Gate remains `REWORK` until named owners, supported platforms, authorization/provider registration, protected token storage/lifecycle, data classification, and license selection are formally addressed.
