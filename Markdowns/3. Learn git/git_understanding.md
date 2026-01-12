# 📌 Creating & Reviewing Pull Requests

## What is a Pull Request (PR) and why is it used?
A Pull Request (PR) is a way to propose changes from a branch into another branch (usually `main`). It is used to show what changes were made, why they were made, and to allow other people to review the work before it becomes part of the main codebase. PRs create a clear space for discussion, review, and approval, which helps teams collaborate safely.

---

## Why are PRs important in a team workflow?
PRs are important because they:
- Improve code quality through review and feedback
- Reduce the chance of bugs reaching the main branch
- Create a documented history of decisions and changes
- Help teams collaborate by making work visible and trackable
- Encourage consistent standards (style, testing, security, performance)

In a team environment, PRs also help ensure that changes are understood by more than one person, which reduces knowledge silos.

---

## What makes a well-structured PR?
A well-structured PR usually includes:
- A clear and descriptive **title** (what the PR does)
- A short **summary** explaining the purpose of the change
- Specific details about **what changed** and **why**
- Steps to **test** the changes (or evidence of testing)
- Screenshots or screen recordings for UI changes (if relevant)
- Small scope where possible (focused changes are easier to review)
- Links to related issues or tasks (if applicable)

A good PR makes it easy for reviewers to understand the change quickly and give useful feedback.

---

## What I learned from reviewing an open-source PR
When I reviewed a PR in a public open-source repository, I noticed that:
- Reviews often focus on readability, maintainability, and long-term impact, not just whether the code works
- Reviewers ask for changes politely and give clear reasoning
- Discussions can include alternatives and trade-offs, especially around performance and edge cases
- Many PRs include automated checks (tests, formatting, linting) and reviewers rely on those signals too

This showed me that reviewing is not about criticism—it’s about improving the quality of the final result and helping the team share responsibility for the codebase.

---

## Requesting feedback on my PR
To request feedback from a peer or mentor, I would:
- Share the PR link directly
- Summarise what the PR changes in 1–2 sentences
- Mention what kind of feedback I want (logic, style, UI, edge cases)
- Ask if they can review within a reasonable timeframe

This helps reviewers know what to look for and makes the review process smoother.

---


## Reflection
Creating PRs encourages better communication and accountability. It also helps me work more carefully because I know my changes will be reviewed. I want to build the habit of making smaller, clearer PRs and writing descriptions that make reviewing easy.

---


# 📌 Writing Meaningful Commit Messages

## Best practices I found for commit messages
A good commit message should be:
- **Clear and specific** about what changed and why
- **Short and scannable** (a brief summary line that is easy to read in history)
- Written in an **action/imperative style** (e.g., “Add…”, “Fix…”, “Update…”)
- Focused on **one change per commit** where possible
- Include extra context in the body only when needed (e.g., reasoning, constraints, or links to an issue)

After looking at open-source commit histories, the best messages quickly tell you what the change does without needing to open the code. Bad messages are usually vague or uninformative.

---

## What makes a good commit message?
A good commit message:
- Explains the **purpose** of the change (not just the existence of a change)
- Uses **specific wording** (e.g., “Fix login validation for empty email” instead of “Fix bug”)
- Matches the scope of the commit (small change → small message; larger change → add short context)
- Helps a future reader understand the change in seconds

---

## How does a clear commit message help in team collaboration?
Clear commit messages help collaboration because they:
- Make it easier for teammates to understand what changed and why
- Improve code reviews by giving context up front
- Help with debugging and tracing when a behaviour changed
- Reduce time spent asking questions like “What does this commit do?”
- Provide a readable project history that supports onboarding and handover

---

## How can poor commit messages cause issues later?
Poor commit messages can cause problems because they:
- Make it difficult to identify which commit introduced a bug
- Slow down investigations during incidents or regressions
- Create confusion for new team members reading history
- Increase the chance of duplicated work (because past work is unclear)
- Reduce confidence in the repository history as a source of truth

Overall, good commit messages are a small habit that saves time and prevents confusion in the long term.

