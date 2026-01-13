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

---

# 📌 Debugging with git bisect

## What does `git bisect` do?
`git bisect` is a Git tool that helps find the exact commit that introduced a bug. It uses a binary search approach: you mark one commit as **good** (where the bug does not exist) and another as **bad** (where the bug exists). Git then checks out a commit in the middle, and you test it. Based on whether that commit is good or bad, Git narrows the search range by half each time until it identifies the first bad commit.

In simple terms: it helps you locate the bug-causing commit quickly, even when there are many commits.

---

## When would you use it in a real-world debugging situation?
I would use `git bisect` when:
- A bug is present now, but I know it worked previously
- There have been many commits since it last worked, making it unclear where the bug started
- The bug can be reliably reproduced (so I can test each checked-out commit)
- I need a fast, systematic way to identify the cause, especially in a shared codebase

This is especially useful for regressions, where a feature used to work and suddenly stopped working after recent changes.

---

## How does it compare to manually reviewing commits?
Compared to manually reviewing commits, `git bisect` is:
- **Faster:** it reduces the number of commits you need to check dramatically by using binary search (instead of checking one-by-one).
- **More reliable:** it is a structured method that avoids guessing or missing the correct commit.
- **Less overwhelming:** it helps narrow down changes even when commit history is large.

Manual review can still be helpful once the bad commit is found, but using `git bisect` makes the process much more efficient than reading or testing commits in order.

---

# 📌 Advanced Git Commands & When to Use Them

## `git checkout main -- <file>`
### What it does
This command restores a specific file from the `main` branch into my current working branch **without switching branches**. It replaces the current version of that file with the version that exists on `main`, while leaving other files and changes untouched.

### When I’d use it in a real project
- If I accidentally broke a single file and want to reset just that file to the version on `main`
- If I want to discard experimental edits to one file but keep other local work
- If I need the latest “known good” version of a file from `main` without doing a full merge or reset

---

## `git cherry-pick <commit>`
### What it does
`git cherry-pick` applies a specific commit from another branch onto my current branch. It copies the change introduced by that commit, creating a new commit on the target branch.

### When I’d use it in a real project
- If a small fix was made on a feature branch and I need just that fix on `main` (without merging all feature work)
- If I want to move a single bug fix into a release branch
- When a commit is useful across branches but merging the whole branch would bring unwanted changes

---

## `git log`
### What it does
`git log` shows the commit history, including commit hashes, authors, dates, and messages. It helps track how a project evolved over time. With options (like `--oneline`), it becomes easier to scan quickly.

### When I’d use it in a real project
- To understand what changed recently and why
- To find the commit hash needed for actions like reverting or cherry-picking
- To trace when a feature or bug fix was introduced
- To review the history of a file or branch during debugging

---

## `git blame <file>`
### What it does
`git blame <file>` shows which commit (and which author) last changed each line of a file, along with timestamps. It’s useful for understanding the origin of specific code.

### When I’d use it in a real project
- When I need to understand why a particular line exists
- To identify where a bug might have been introduced
- To find the right commit to inspect for context
- To ask questions to the right person (carefully and respectfully) or learn from past decisions

---

## Overall Reflection
These commands are especially important in long-running projects with multiple developers because they help:
- recover from mistakes without losing unrelated work (`checkout main -- <file>`)
- move targeted fixes between branches (`cherry-pick`)
- understand how the codebase evolved (`log`)
- trace the origin of changes for debugging and context (`blame`)

---

📌 # Merge Conflicts & Conflict Resolution

Merge conflicts occur when Git cannot automatically merge changes from different branches. This usually happens when multiple changes overlap and Git needs human input to decide which version to keep.

## Common Causes of Merge Conflicts

### Editing the Same Lines in a File
The most common cause of merge conflicts is when two branches modify the same lines in the same file. Git cannot determine which change should take priority.

### File Deleted in One Branch and Modified in Another
A conflict can occur when one branch deletes a file while another branch makes changes to it. Git cannot decide whether the file should exist or be removed.

### File Renamed Differently Across Branches
If a file is renamed in one branch and modified or renamed differently in another branch, Git may not be able to reconcile the file history correctly.

### Long-Lived Branches
Branches that are not regularly updated from the main branch are more likely to have conflicts because the codebase changes significantly over time.

### Large or Unfocused Commits
Large commits that modify many files increase the risk of conflicts, especially when multiple developers are working on overlapping areas of the codebase.

### Poor Communication Between Team Members
Conflicts are more likely when team members unknowingly work on the same files or features without coordination.

### Automated Formatting or Refactoring
Large formatting or refactoring changes can cause conflicts when another branch makes functional changes in the same files, even if the logic itself did not change.

## Summary
Merge conflicts are a normal part of collaborative development. They occur when Git cannot safely merge changes automatically and require manual resolution. Keeping branches up to date, making small commits, and communicating changes can help reduce conflicts.

---

## Write about your experience in 

### What caused the conflict?
The merge conflict was caused by making changes to the **same file and the same line** in two different branches. I first edited a file on a feature branch and committed the change. Then, I switched back to the `main` branch and made a different edit to the same part of the file. When I tried to merge the feature branch back into `main`, Git could not automatically decide which version to keep, resulting in a merge conflict.

---

### How did you resolve the conflict?
I resolved the conflict using my Git desktop client (VS Code). VS Code highlighted the conflicting file and showed the conflict markers that separated the changes from each branch. I reviewed both versions, decided which parts should be kept, and manually edited the file to produce the correct final version. After removing the conflict markers and saving the file, I staged the resolved file and committed the merge.

---

### What did you learn?
This experience taught me that merge conflicts are a normal part of collaborative development, especially when multiple branches modify the same files. I learned how to read conflict markers, understand where changes come from, and confidently resolve conflicts instead of avoiding them. I also learned that making smaller commits, pulling changes regularly, and communicating with the team can help reduce the number of conflicts in real projects.

---

# 📌 Branching & Team Collaboration

## Why is pushing directly to main problematic?
Pushing directly to the `main` branch is problematic because it can introduce bugs or unfinished work into the production codebase without review. If multiple people push directly to `main`, it becomes harder to track changes, review code quality, and maintain stability. A single mistake can affect everyone, and rolling back changes becomes more difficult when commits are mixed together without proper checks.

---

## How do branches help with reviewing code?
Branches allow developers to work on changes in isolation before they are merged into `main`. This makes it easier to create Pull Requests, where code can be reviewed, tested, and discussed by other team members. Reviewers can clearly see what changed, why it changed, and suggest improvements without affecting the stable code. Branches also encourage smaller, focused changes, which makes reviews more effective and manageable.

---

## What happens if two people edit the same file on different branches?
If two people edit the same file on different branches, Git keeps those changes separate until the branches are merged. When the branches are merged, Git will try to combine the changes automatically. If the edits affect different lines, Git can usually merge them without issue. If they affect the same lines, a merge conflict occurs and must be resolved manually. This process ensures that no changes are lost and that conflicts are handled deliberately rather than silently overwriting someone else’s work.

---

# 📌 Git Concepts: Staging vs. Committing

## What is the difference between staging and committing?
Staging and committing are two separate steps in Git that serve different purposes.

- **Staging** is the process of selecting which changes you want to include in your next commit. When you stage a file using `git add`, the changes are placed in the *staging area*, but they are not yet saved to the repository history.
- **Committing** is the act of permanently recording the staged changes into the Git history. When you run `git commit`, Git takes everything that is currently staged and creates a new commit.

In short:
- Staging = preparing changes
- Committing = saving those prepared changes to history

---

## Why does Git separate these two steps?
Git separates staging and committing to give developers more control over what goes into each commit. This allows you to:
- Review changes before committing
- Group related changes into a single, meaningful commit
- Avoid committing unfinished or accidental changes
- Create cleaner and more logical commit history

This separation is especially useful in team environments where clear commit history improves collaboration and code reviews.

---

## When would you want to stage changes without committing?
You might stage changes without committing when:
- You are still working but want to save a set of changes temporarily
- You want to commit only part of your work and leave other changes uncommitted
- You are reviewing staged changes before writing a commit message
- You are waiting for feedback or need to make final checks before committing

Overall, staging allows you to work more deliberately and helps maintain a clean, understandable Git history.
