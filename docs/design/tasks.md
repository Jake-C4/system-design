# Tasks — TSWizard

> Derived from the plan document and the front-end requirements. Each task is small, checkable, and traceable to a requirement or architectural decision.

## Task List

| ID | Task | Traces to (R# / ADR#) | Depends on | Status |
|----|------|--------------------------|------------|--------|
| T1 | Create placeholder `issues.csv` and `fixes.csv` files and update the existing data store to load both files, join them by issue, and keep the current `/items` and `/items/:id` route structure intact | ADR-01, R1 | — | Not started |
| T2 | Refactor the current collection page into the issue list view so each issue shows its name and searchable text without changing the app's overall route layout | R1 | T1 | Not started |
| T3 | Update the detail page to load the selected issue and its related fixes, then display the fixes in ranked order with their attempt count and success rate | R1, R4 | T1 | Not started |
| T4 | Add the "not enough data" state for issues with fewer than 5 logged outcomes while still showing the fix attempt count and the message when historical data is insufficient | R3, R4 | T3 | Not started |
| T5 | Add the outcome logging UI for each fix and update the in-memory fix statistics immediately when an agent marks a result as successful or unsuccessful | R2, R4 | T3 | Not started |
| T6 | Add an undo action for a recent logged outcome within 5 minutes and recalculate the fix ranking immediately when that outcome is removed | R2, R5, ADR-04 | T5 | Not started |
| T7 | Add the issue bookmark toggle so agents can save frequent issues they see often | ADR-02 | T6 | Not started |
| T8 | Add a bookmarked-only filter and keep the filtered issue list synced with the issue bookmark state so agents can narrow the list to frequent issues | ADR-02 | T7 | Not started |
| T9 | Update the top navigation branding to show "TSWizard" and the active agent's name while keeping the existing home, items, and about navigation pattern | — | T2 | Not started |
| T10 | Replace the placeholder About page content with a short explanation of the app, its purpose, and the in-memory demo data warning | — | — | Not started |
| T11 | Run a front-end verification pass covering issue search, detail ranking, not-enough-data handling, outcome logging, undo timing, bookmarking, and the About page content | R1-R5, ADR-01-04 | T1-T10 | Not started |

**Status values:** Not started · In progress · Done · Blocked

## Definition of Done (applies to every task)
- Matches its linked requirement's acceptance criteria in the specification.
- Reviewed by a human before marked done.
- No task marked done without a test passing.

## Blocked / Questions
| Task | Blocker | Raised | Resolved |
|------|---------|--------|----------|
| | | | |

## Quick Self-Check Before You Start Building
- [ ] Every task traces to a requirement or ADR.
- [ ] Every task is small enough to finish in under a day.
- [ ] Order matches the plan's sequencing.
- [ ] No task is vague enough that "done" is a judgment call.
- [ ] Blocked items are logged, not silently skipped.
