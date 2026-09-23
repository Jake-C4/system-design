# Plan — TSWizard

> Written after specification. Every decision here must trace back to a requirement ID.

## 1. Approach Summary
TSWizard is built on the front-end before the backend. Support agents will be able to search issues or search through their bookmarked issues and see the fixes for them by rank. The issues and the troubleshooting fixes comes from different CSV files so that anything an agent logs as an outcome updates the rankings.

## 1.5 Tech Stack
- Frontend: No build Vue 3 + Vue Router, Bootstrap, and PapaParse
- Backend/DB: No back end, using 2 separate CSV files
- Hosting: GitHub
- Other services/APIs: N/A

## 2. Key Decisions (ADRs)

| ADR # | Decision | Traces to (R#) | Alternatives considered | Why this one |
|-------|----------|------------------|---------------------------|----------------|
| ADR-00 | FRontend: no build Vue 3 plus Vue Router. No backend | R1–R5 (all) | Switch to React or use JavaScript with Vue | Still is in line with the original template |
| ADR-01 | Use 2 different CSV files for the data which would be issues.csv and fixes.csv | R1, R4 | One single CSV file that repeats the issue information onto each fix row  | An issue can have many fixes which needs to be ranked |
| ADR-02 | Agents can log outcomes, undo their outcomes, and bookmark issues | R2, R5 | Either save to browser or build a backend now | It is best to just test and see if everything can work without a backend or database. |
| ADR-03 | Issues that have under 5 logged outcomes shows that not enough data is available to list a ranked fix, but will still log how many attempts have been made on it. | R3, R4 | Can hide the fixes shown for an issue until 5 logs have been made | Matches up with both R3, and R4 | 
| ADR-04 | /agents can undo an outcome within 5 minutes if a mistake was made or any other reason | R5 | Do not have an undo feature | Matches the previous templates and makes sense in case an agent makes a mistake or misclick. |
| ADR-05 | There will be no AI suggested fixes or other integrations | All requirements | Uses an LLM to suggest most compatible fixes | Shows that every fix comes from a real logged case and not made up or guessed. |

## 3. Components / Building Blocks
List the major pieces (screens, services, data stores). No code — just names and purpose.

| Component | Purpose | Related requirements |
|-----------|---------|------------------------|
| Issues List | Allow Agents to search issues or bookmark issues | R1 |
| Issues Details | Shows a list of fixes ranked by number, otherwise unranked if not enough data | R1, R3, R4 |
| Fix Data | Shows steps for the fix along with how many attempts and the success rate of the fix | R2, R4, R5 |
| Data Storing | Loads both CSV files and maintains in-memory outcomes logged by agents | R1, R2, R4 |
| Navigation Bar and About tab | Shows the agents name who is working and an about tab that explains the system | Cosmetic |

## 4. Dependencies & Assumptions
- External services/tools needed: None
- Assumptions being made (flag anything unverified): Browser use only

## 5. Risks

| Risk | Likelihood | Impact | Mitigation | Owner |
|------|------------|--------|------------|-------|
| In-memory state means that if the page refreshes, everything is deleted | High | Medium | Make note of this disclaimer in an about tab | Jake |

## 6. Sequencing
1. Issues and fixes CSV files get created first to supply the data needed to start.
2. The Issue list would be made next to show that data would load and display properly.a
3. The issue details showing the fixes by ran and the not enough data display if there is not enough logged outcomes for a fix which fills most of the requirements.
4. Logging outcomes and recalculating the ranks live to show that data can be shown according to outcome.
5. Undo feature is one of last as it is the least impactful.
6. Bookmarking fixes and issues in an issue is a regular occurrence.

## 7. Review & Approval
| Reviewer | Date | Approved? |
|----------|------|-----------|
| | | |

**Gate:** Do not generate tasks until this plan is done.
