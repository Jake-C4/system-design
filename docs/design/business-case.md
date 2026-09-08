# Business Case — TSWizard

## 1. Problem / Opportunity
Most support articles list troubleshooting steps in a listed order, but the order never accounts for failures at a certain step. Newer support agents usually work top to bottom on troubleshooting articles in order to find solutions, even if the solution to the problem was further down in the list of steps.

## 2. Proposed Solution
TSWizard (Troubleshooting Wizard) is a web application that turns a static troubleshooting article into a dynamic one. Support agents are able to access a list of known issues for certain products, such as a a device not connecting to the network, login failures, and even car troubles. When the user clicks into a certain issue, it will list fixes with the success rate for each fix based on past data and even shows how many times that solution has been attempted. Once the users issue has been resolved, they document which fix solved the issue which gets added back into the system.

## 3. Options Considered
| Option | Description/Pros/Cons
|--------|----------------------
|Option A| Continue using static TS docs
Pros: No cost
Cons: Fixed, agents get the general top to bottom TS articles and no indication on which fix will work.      

| Option B | Implement TSWizard
Detailed app ranking troubleshooting based on logged outcomes
Pros: Low cost for building and fits with existing cases but improves the use of artiles
Cons: Requires logged outcomes to improve the applications accuracy overtime.


## 4. Feasibility

| Type | Assessment |
|------|------------|
| Operational — will people actually use/support this?: Yes, support agents already are required to log the troubleshooting steps that have been taken for documentation purposes, so logging which fix solved a specific issue is just a small process change that agents should already be used to doing.
| Technical — can we build it with what we have/can get?: Yes, The application uses a file listing different issues and fixes to those issues in a CSV file that covers a small amount of general troibleshooting issues.
| Economic — does the payoff justify the cost? Yes, the low cost build with the convenience of having a solution to your problem right away which reduces case handle time.
| Schedule — can it be done in a useful timeframe? Yes, using APIs and existing fixed outcome data would make this feasible.

## 5. Costs & Benefits

**Costs** (one-time + ongoing):

| Item | One-time | Ongoing/year |
|------ ----------|----------------|
Develop    |$6,000|
Gather Data|$1,500|
Host/Maint.| -----| $500
Review Outcomes|--| $2,000

**Benefits** (tangible + intangible):

| Benefit        | Tangible ($/time saved)? | Notes |
|----------------|--------------------------|-------
Lower handle time|$12,000/year               Lots of time can be saved on solving cases
New hire training|$5,000/year                Lots of time saved on training new hires
Fewer Escalations| ----------                Agents can reach the correct fix before escalations

**Payback period:** 6 months
**ROI** (12,000 - 10,000)/10,000 = 70%

*(See Toolkit Part C — Financial Analysis Tools document for payback, ROI, and present value formulas.)*

## 6. Priority & Urgency
Why now? What happens if we wait or don't do it?
The knowledge for experienced agents usually already exists, but usually is kept private between agents and sometimes not shared. When an agent documents what fix solved their issue, it sets up other agents and new hires for success.

## 7. Recommendation
One sentence: which option, and the go/no-go ask.

## 8. Approval

| Role | Name | Date | Decision |
|------|------|------|----------|
| Sponsor | | | Go / No-go |

---

### Primary sources
- *Systems Analysis and Design*, 10th ed. (Cengage, 2017) — Ch. 2 "Analyzing the Business Case" and Toolkit Part C "Financial Analysis Tools"
