Now we will complete the `docs/design/tasks.md` file based on the
`docs/design/plan.md` and `docs/design/specification.md` files. Let's focus
on building tasks that update the template application of this workspace in
order to complete a front end application that meets the requirements. We
want this to provide a compelling, working web app prototype before we move
to tasks related to the database and backend.

Use the `docs/design/reference/tasks-guide.md` as a guide to create the
tasks. Adapt my task list below to meet the task template structure. Also,
be very mindful of the web app template code as it currently exists in this
workspace. We want to avoid creating tasks that are redundant or that would
require a complete rewrite of the template code.

## Task List
* Create the issues and the fixes CSV files with placeholder data and update the data store to load and join them
* Update the issue list view to show issues by name with an option to bookmark them, and let agents search or filter their bookmarked issues
* Update the issue detail view to also show fixes for issues ranked by success rate or using a "not enough data" message if there is less than 5 logged outcomes
* The goal is to allow an agents logged outcome to update the fix rank live
* Add bookmarking for issues agents see occur often and the main heading bar should have TSWizard for the name along with the current working agents name.
* Add and update an "About" tab to explain the system
