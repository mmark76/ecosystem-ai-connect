# Repository Reduction Verification Procedure

## Purpose and evidence boundary

This tracked document defines a reproducible repository-reduction procedure. It intentionally does not embed the final SHA or observed results for a PR head: changing this document would otherwise create a new head and invalidate its own evidence reference.

For every PR-head verification, resolve the baseline and checked-out subject at execution time, then record the exact SHA, commands, date, environment limitation, and observed results in a durable PR comment. Link that comment from the applicable review discussion. This procedure verifies repository reduction only; it does not verify OAuth, provider connectivity, external GitHub Pages/DNS/Cloudflare state, production readiness, owner approval, or a release.

## Inputs and execution setup

Run from a clean checkout of the PR branch:

```powershell
function Assert-CleanVerificationCheckout {
    param([Parameter(Mandatory = $true)][string]$Phase)

    $status = @(git status --porcelain=v1 --untracked-files=all)
    if ($LASTEXITCODE -ne 0) {
        throw "BLOCKED: unable to determine Git working-tree status before $Phase."
    }
    if ($status.Count -gt 0) {
        throw "BLOCKED: working tree contains staged, unstaged, deleted, untracked, or unmerged changes before $Phase."
    }
}

git fetch origin --prune
Assert-CleanVerificationCheckout 'verification starts'
$historicalBaseline = 'ddc11cfc8cc686652a5bf28eef67153bc19a3044'
$mainTip = git rev-parse --verify origin/main
if ($LASTEXITCODE -ne 0) { throw 'BLOCKED: origin/main is unavailable; fetch complete history before verification.' }
$head = git rev-parse --verify HEAD
if ($LASTEXITCODE -ne 0 -or [string]::IsNullOrWhiteSpace($head)) { throw 'BLOCKED: unable to resolve the checked-out HEAD.' }
$actualHead = git rev-parse --verify HEAD
if ($LASTEXITCODE -ne 0 -or $actualHead -ne $head) { throw 'BLOCKED: checked-out HEAD changed while verification was starting.' }
$mergeBase = git merge-base origin/main HEAD
if ($LASTEXITCODE -ne 0 -or [string]::IsNullOrWhiteSpace($mergeBase)) { throw 'BLOCKED: no merge base is available for origin/main and HEAD; fetch the required history without merging or rebasing.' }
git merge-base --is-ancestor $mergeBase $head
if ($LASTEXITCODE -ne 0) { throw 'BLOCKED: resolved merge base is not an ancestor of HEAD.' }
git rev-parse $mainTip
git rev-parse $mergeBase
git rev-parse $head
```

The verifier must report `$historicalBaseline`, `$mainTip`, `$mergeBase`, and `$head`. `$historicalBaseline` is the original reduction baseline and remains historical context only; its object need not be present in a shallow checkout. `$mainTip` is the current moving remote tip. `$mergeBase` is the immutable branch-relative comparison base for this execution, and `$head` is the actual checked-out revision under review. Do not substitute one for another. If Git cannot provide a merge base because the history is missing, stop as `BLOCKED`; do not guess, merge, or rebase.

## AIC-AC-001 — Headless repository

```powershell
git ls-tree -r --name-only $mergeBase
git ls-tree -r --name-only $head
git diff --name-status --find-renames $mergeBase $head
git diff --stat --find-renames $mergeBase $head
```

Compare the merge-base inventory with the current head, calculate additions, modifications, deletions, and renames from the name-status output, and validate the resulting baseline classifications against [Repository Reduction Audit](REPOSITORY_REDUCTION_AUDIT.md). Confirm that no removed dashboard/static-site entry point, workflow, test, build script, `design-system/` path, or project-owned UI record is tracked at `$head`.

The final PR evidence must report the resolved revisions, tracked-file counts, change counts, audit result, and headless-path result. Source removal does not establish that an external published site, GitHub Pages setting, DNS record, or Cloudflare configuration was disabled; no external infrastructure is queried or changed by this procedure.

## AIC-AC-002 — Foundation integrity

```powershell
git diff --exit-code $mergeBase $head -- FOUNDATION_VERSIONS foundations/
node scripts/validate-foundations.cjs
node --test tests/foundations.test.cjs foundations/shield/tests/*.test.cjs
Assert-CleanVerificationCheckout 'post-test verification'
$headAfterTests = git rev-parse --verify HEAD
if ($LASTEXITCODE -ne 0 -or $headAfterTests -ne $head) { throw 'BLOCKED: checked-out HEAD changed while verification tests ran.' }
```

The final PR evidence must report whether the pins and Foundation tree are unchanged, the validator result, and the complete test result. The known `directory symlink/junction inside artifact is rejected` test may be skipped when the execution environment cannot create a symlink or junction. Report that skip as a limitation; never convert it into a pass.

## AIC-AC-003 — Documentation consistency

Run the repository Markdown relative-link assertion, stale-reference assertion outside the reduction audit and this procedure, and assertions for unsupported implementation claims. Review the retained scope, architecture, security, infrastructure, operations, acceptance, traceability, completion, and checklist records against `$head`.

The final PR evidence must report the exact assertion commands and outcomes, including checks that the headless checklist classifications require scope-based justification, accountable ownership, and a re-evaluation trigger, and that deployment records distinguish repository implementation from unverified external infrastructure state.

## AIC-AC-004 — Governance-baseline traceability

For a reviewed head containing `AIC-CCR-001`, verify that the named accountable identity, provider non-selection, authorization exception boundary, data/storage baseline, licensing decision, and remaining `NEEDS_DECISION` items agree across the governance decision, product brief, security plan, initialization gate, objectives, acceptance criteria, and traceability matrix. Run the Markdown relative-link assertion and a stale-claim assertion for the superseded provider direction.

This procedure can establish documentation consistency only. `AIC-AC-004` remains `BASELINE_RECORDED; NOT_YET_VERIFIED` until a dated review record against the applicable PR head captures those command outcomes. It does not authorize provider selection, OAuth implementation, package publication, or a release.

## Final checkout integrity

After every remaining assertion completes, run the guard once more and confirm that the checked-out revision is still the resolved `$head`:

```powershell
Assert-CleanVerificationCheckout 'final verification'
$finalHead = git rev-parse --verify HEAD
if ($LASTEXITCODE -ne 0 -or $finalHead -ne $head) { throw 'BLOCKED: checked-out HEAD changed before final evidence was recorded.' }
```

The clean-checkout guards make committed-revision evidence and runtime execution evidence refer to the same repository state. They do not delete, stash, reset, or otherwise alter user work; any detected change is reported as `BLOCKED`.

## Historical evidence

The earlier execution against `6d000d81eb1eee0dfc9e3654cad5b388b6f75b4c` compared with `ddc11cfc8cc686652a5bf28eef67153bc19a3044` is historical evidence for the original reduction commit only. Its reported 38 removals, 29 modifications, and 1 addition do not describe later documentation corrections and must not be used as evidence for a later PR head.

## Gate boundary

This verification procedure does not change the acceptance-criteria status without a successful execution against the reviewed head, and it is not product-release approval. The Initialization Gate remains `REWORK` until its remaining owner, provider, platform-version, implementation-specific security/data, and evidence decisions are formally addressed.
