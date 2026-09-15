# [TSWizard/Jacob Clark] — Specification
 
> **How to use this template:** The specification is meant to be detailed before building anything and to represent the core "source of truth". It should be written for a non-technical author, but clear enough for an AI agent (or a team) to build from.
 
---
 
## 0. Constitution (fill once per project, reuse across specs)
 
Non-negotiable principles this product must never violate, regardless of feature.
 
| # | Principle | Why it exists |
|---|-----------|----------------|
| 1 | Rankings computed through logged outcomes | Maintains rankings |
| 2 | Personal customer data is never stored | Privacy protection |
| 3 | Never guesses a fix | Keeps tracking and data accurate and honest |
 
---
 
## 1. Problem & Intent
 
**Who is this for?**
This application is for frontline technical support team members who troubleshoot the same issue every day. Especially helpful for new support agents.
 
**What problem do they have today?**
Regular everyday troubleshooting articles list steps in a fixed order, when the solution could be further in the steps and is not based on what exactly resolves the issue. Regular troubleshooting articles just tell what fixes exist instead of identifying which one is most likely to work first.
 
**Why now / why us?**
 Support agents are required to log the steps they took to solve an issue, but the outcome does not relay back into the articles provided stating exactly which step solved the issue. The average case handle time drops significantly based on starting with the most likely fix to a issue. 

 
**What does success look like?**
Average call and case handle time drops significantly.
Most calls and cases involve issues that have already been handled in the past.
New agents are much more quicker and accurate and learn a lot faster.
---
 
## 2. Scope
 
**In scope** — 
Application must browse a collection of known technical issues and view the fixes by logged outcome success.
Agents must log their steps and the one that fixed the issue, and even which ones did not resolve the issue.
 
**Out of scope** — what it explicitly will NOT do (this list prevents scope creep and over-building).
 Applcation will not use AI to suggest fixes, every fix comes from a previous real logged case.
 There is no integration of third-party platforms such as Salesforce, NetSuite, etc.
 This application is not for customers, only live support agents.
---
 
## 3. User Scenarios
 
Write each as a short story: who, what they're trying to do, what "done" looks like.
 
**Scenario 1: Mark**
- Actor: Mark, Support Agent
- Trigger: A customer states that one of their devices will not connect to the network.
- Steps: Mark searches the issue in the logged collection and opens the most relevant matching issue. Marks sees fixes for the solution in order by rank and attempts the top solution first, which resolves the case and Mark logs the outcome.
- Success outcome: The case is resolved on the first or second attempt and the fix is logged into the system, ranking the outcome accordingly.
- Failure outcome: The top couple fixes do not solve the issue so Mark continues going down the rank of fixes.

*(Repeat for each core scenario. 3–5 is typical for a first spec.)*
**Scenario 2: Clay**
 - Actor: Clay, Support Agent
 - Trigger: Clay sees an issue he has not encountered before.
 - Steps: Clay searches for the issue through the collection and sees fixes listed by rank and attempts the top fix first.
 - Success outcome: Clay is able to resolve the issue with the first fix without having to ask for help or escalate the issue.
 - Failure outcome: None of the fixes provided solved the issue, so Clay had to escalate or ask for help.

**Scenario 3: Mary** 
 - Actor: Mary, Support Agent
 - Trigger: Mary solves a case using a fix that was not ranked as the first one.
 - Steps: Mary opens the issue, solves the case, and submits it as solved.
 - Success outcome: Mary logs her fix in the system and that fixes success rate is recalculated and the next agent will see the update.
 - Failure outcome: Mary does not log the exact fix that solved the issue so the ranking stays the same.
---
 
## 4. Requirements (EARS notation)
 
Use [EARS](https://alistairmavin.com/ears/) (Easy Approach to Requirements Syntax) so requirements are consistent and unambiguous.
 
Patterns:
- **Ubiquitous:** *The system shall [always do X].*
- **Event-driven:** *When [trigger], the system shall [response].*
- **State-driven:** *While [state], the system shall [response].*
- **Unwanted behavior:** *If [condition], then the system shall [response].*
- **Optional:** *Where [feature is present], the system shall [response].*

| ID | Requirement | Pattern |
|----|-------------|---------|
| R1 | When an agent opens an issue, the system displays fixes in order from most likely to work to least likely | Event |
| R2 | When an agent marks a certain fix for an issue as successful, the system records the outcome and the ranking for that fix is recalculated. | Event |
| R3 | If an issue has less than 5 logged outcome, the system will display a message that there is not enough data. | Unwanted Behavior |
| R4 | The system will always show the number of times a fix has been attempted, with the success rate corresponding with the given issue | Ubiquitous |
| R5 | If a logged outcome is less than 5 minutes old, the system will allow an agent to change their outcome/fix accordingly. | Unwanted Behavior | 
---
 
## 5. Acceptance Criteria
 
For each requirement, define the test that proves it's done. If you can't write a pass/fail test, the requirement is still too vague.
 
| Requirement | Test | Pass condition |
|-------------|------|-----------------|
| R1 | Agent opens an issue with fixes showing a 90% success rate, a 70% success rate, and other lower ones, ordered in the likelihood of them working. | Fixes displayed in order top to bottom
| R2 | Agent marks an issue as successful | Outcome is logged, and that fix's rank is updated.
| R3 | Agent opens an issue with only 2 logged outcomes recorded | The page displays a message stating there is not enough historical data.
| R4 | Review any issue and fix | Every fix provided shows how many times it has been attempted along with the success rate for that given issue.
| R5 | An agent logs an outcome/fix but selects the undo button within 5 minutes | The outcome is removed, and the ranking reverts back.
---
 
## 6. Constraints & Non-Functional Requirements
 
- **Performance:**
Issue collection system loads in less than 2 seconds using a standard WIFI connection. Outcome logging takes no more than 1 or 2 minutes.
- **Security/Privacy:**
Customer data is never stored, only issues and fixes for those certain issues which is publicly accessible.
- **Accessibility:**
Success rate of fixes are not ranked by color, but by percentage alongside the fix, and all actions are performed with a keyboard or mouse.
- **Compliance/Legal:**
None since customer data is not stored.
- **Budget/Timeline:**
Build cost roughly $7,500-$8,000 with regular maintenance costs being about $2,500 a year for hosting and periodic review of content.
---
 
## 7. Open Questions
 
Anything unresolved. Don't let AI or a builder guess silently — list it and get an answer before build starts.
 
| Question | Owner | Status |
|----------|-------|--------|
| Should logging a fix to an issue be mandatory before closing a case? | Jacob | Open |
| Is 5 logged fixes for an issue too many or too few of a threshold for providing data? | Jacob | Open |
| Is there a way to log if a fix is outdated? | Jake | Open |
---
 
## 8. Plan (derived from this spec — separate document once approved)
 
Once the spec above is approved, translate it into:
- **`plan.md`** — the approach and key decisions, each traced back to a requirement ID above
- **`tasks.md`** — atomic, ordered, checkable tasks derived from the plan
Do not skip from spec straight to a build without reviewing the plan first.
 
---
 
## 9. Approval
 
| Role | Name | Date | Signed off? |
|------|------|------|-------------|
| Spec owner | | | |
| Reviewer | | | |
 
---
 
### Primary sources this template draws on
- [GitHub Spec Kit](https://github.com/github/spec-kit) — open-source spec/plan/tasks toolkit
- [Spec-Driven Development methodology](https://github.com/github/spec-kit/blob/main/spec-driven.md) — GitHub's explainer
- [EARS notation](https://alistairmavin.com/ears/) — requirements syntax
- [Microsoft: Spec-Driven Development for AI-Native Engineering](https://developer.microsoft.com/blog/spec-driven-development-ai-native-engineering/)
