# 📌 Understanding Clean Code Principles

## Simplicity

Simplicity means keeping code as straightforward as possible while still meeting requirements. Simple code avoids unnecessary layers, overly clever tricks, and complicated control flow. When code is simple, it is easier to test, easier to change, and less likely to contain hidden bugs.

## Readability

Readability means code should be easy for a human to understand. Clean code communicates intent clearly through good naming, logical structure, and minimal complexity. Readable code reduces the time needed to review changes, debug issues, and onboard new team members.

## Maintainability

Maintainability means the codebase can be updated and extended without creating chaos. Maintainable code is modular, predictable, and has clear boundaries between responsibilities. This matters because most code is read and modified far more often than it is written—future changes should not require rewriting everything.

## Consistency

Consistency means following shared conventions such as formatting rules, naming patterns, folder structure, and team standards. Consistent code feels familiar across the project, which reduces confusion and makes collaboration smoother. It also makes automated tooling (linters, formatters, CI checks) more effective.

## Efficiency

Efficiency means writing code that performs well and uses resources sensibly, but without premature optimisation. Clean code balances performance with clarity. It focuses on solving real bottlenecks when they appear, rather than over-engineering early. Efficient code should still remain readable and maintainable.

---

# Example of Messy Code and Why It’s Hard to Read

## Messy code example (written example)

A common messy pattern is a long function with unclear naming, repeated logic, and deeply nested conditionals. This kind of code is difficult to read because:

- It mixes multiple responsibilities (validation, business logic, and formatting) in one place
- It contains deeply nested `if/else` blocks that hide the main logic path
- Variable names are vague (e.g., `x`, `data`, `temp`) so intent is unclear
- There is duplicate logic scattered through the function, which increases maintenance effort
- It’s hard to test because it is not broken into smaller, predictable parts

---

## Why this matters

Messy code increases the chance of bugs because developers may misunderstand the logic or miss an edge case. It also slows development because changes take longer and feel riskier. Refactoring towards clean code principles (small functions, clear naming, and simpler control flow) makes the code easier to maintain and safer to update.

# 📌 Refactoring Code for Simplicity

## Common refactoring techniques (research summary)

Some common techniques for simplifying code include:

- **Extract function:** break a large function into smaller, named helpers
- **Rename variables/functions:** use clearer names to reduce the need for comments
- **Remove duplication:** reuse shared logic instead of copying it
- **Replace nested conditionals with guard clauses:** simplify flow and reduce indentation
- **Simplify boolean logic:** remove unnecessary comparisons and double negatives
- **Use early returns:** reduce branching and make behaviour easier to follow
- **Replace “clever” code with readable code:** prioritise clarity over shortness
- **Separate responsibilities:** split logic so each piece has one job

---

## Example of overly complicated code (what I chose)

### Location in repo

- File: `src/utils/discount.js`

### What made the original code complex?

The original version had nested conditionals and repeated coupon logic in multiple branches. It was difficult to follow because the main logic path was hidden inside multiple layers of if/else, and it mixed validation, business rules, and formatting (rounding) in one place.

### How did refactoring improve it?

Refactoring introduced small helper functions and constants, which reduced nesting and duplication. The updated structure makes the intent obvious, keeps each function focused on one job, and makes future changes safer because rules are isolated and easier to test.

---

# 📌 Commenting & Documentation

## Best practices for comments and documentation

Helpful comments and documentation should explain the “why” behind decisions, clarify intent, and reduce confusion for future readers. Good comments add context that the code alone cannot easily communicate, such as business rules, edge cases, assumptions, or reasons for choosing a particular approach.

Good commenting practices:

- Write comments that explain **why** something is done, not what the code obviously does
- Keep comments **short, accurate, and up to date**
- Document **public functions, APIs, and complex logic** where a reader needs context
- Use consistent style and avoid excessive commentary
- Prefer documentation that helps other developers use or change the code (e.g., README notes, function docs)

---

## Example: Poorly commented code → improved comments

### Poor comments (unhelpful)

The comments below repeat what the code already says and don’t explain intent:

- “increment i”
- “loop through list”
- “do the thing”
  These kinds of comments clutter the code and become outdated easily.

### Improved comments (useful)

Better comments focus on intent and reasoning, for example:

- explaining why input is validated early
- noting why a certain rule exists (e.g., discount logic or safety constraint)
- clarifying a tricky edge case or performance decision
- explaining expected behaviour when data is missing

A good comment helps a future developer understand what the code is trying to achieve and what constraints it must follow.

---

## Reflection

## When should you add comments?

You should add comments when:

- The reason behind the code is not obvious (business rules, compliance rules, product requirements)
- There is a non-obvious edge case or workaround
- You are making a decision that might look strange without context
- You need to warn about a known limitation or a future improvement area
- You are documenting how to use a function/module (inputs, outputs, side effects)

In short: comments are most valuable when they explain **intent and context**.

---

## When should you avoid comments and instead improve the code?

You should avoid comments when:

- The code is unclear because of poor naming or structure (rename variables/functions instead)
- Comments simply restate what the code does (they add noise, not value)
- The code can be simplified by refactoring (smaller functions, guard clauses, fewer nested blocks)
- The comment is trying to explain complicated logic that should be broken into clearer steps

In many cases, the best “comment” is clean code: good naming, small functions, and clear structure. Comments should support code—not compensate for confusing code.

---

# 📌 Writing Unit Tests for Clean Code

## Importance of Unit Testing

Unit testing is an essential practice in software development that focuses on testing small, isolated parts of a program to ensure they behave as expected. By validating functionality early, unit tests help prevent bugs from reaching later stages of development. They also provide confidence when making changes, as developers can quickly verify that existing behaviour remains correct.

---

## How Unit Tests Help Keep Code Clean

Unit tests encourage cleaner code by promoting simple, focused functions with clear responsibilities. When code is easy to test, it is usually well-structured and easier to understand. Tests also act as living documentation by clearly describing how a piece of code is supposed to behave. This makes it easier for other developers to understand intent and reduces ambiguity in the codebase.

---

## Issues Identified While Testing

## Writing Unit Tests for Clean Code – Practical Evidence

### Testing framework chosen

**Framework:** Jest (JavaScript)

**Why I chose it:**  
I chose Jest because it is widely used in JavaScript/React projects, easy to run from the command line (`npm test`), and provides clear output when tests pass/fail. It is also a common standard in many teams, so learning it is useful for real-world collaboration.

---

### Unit tests written (location in repo)

- Function file: `src/utils/formatFullName.js`
- Test file: `src/utils/formatFullName.test.js`

---

### Example unit tests (copied from my repo)

```js
const { formatFullName } = require("./formatFullName");

test("formats first and last name correctly", () => {
  expect(formatFullName("Solmaz", "Maabi")).toBe("Solmaz Maabi");
});

test("trims extra whitespace", () => {
  expect(formatFullName("  Solmaz ", " Maabi ")).toBe("Solmaz Maabi");
});

test("throws error for empty values", () => {
  expect(() => formatFullName("", "Maabi")).toThrow();
});

test("throws error for invalid input types", () => {
  expect(() => formatFullName(null, "Maabi")).toThrow(TypeError);
});


---

# 📌 Handling Errors & Edge Cases

## Strategies for handling errors and edge cases (including Guard Clauses)
Robust code anticipates unexpected inputs and failure conditions. Common strategies include:
- **Guard clauses (early returns):** Check invalid conditions at the start of a function and exit early. This reduces deep nesting and makes logic easier to follow.
- **Input validation:** Confirm required values exist and have the correct type/format before using them.
- **Fail fast with clear errors:** Throw meaningful errors (or return clear error values) so problems are easier to diagnose.
- **Safe defaults:** Use default values where appropriate to avoid `undefined` behaviour, but only when it makes sense.
- **Graceful handling:** For non-critical failures, handle the error without crashing (e.g., show a fallback message, retry, or skip a bad item).
- **Logging and monitoring:** Record unexpected states so issues can be investigated.
- **Testing edge cases:** Add unit tests for invalid inputs and boundary conditions (empty values, null/undefined, unusual formats).

---

## Existing function chosen (issue found)
I used a simple name-formatting function as the example. The original version assumed inputs were always valid strings and did not handle cases like:
- `null` / `undefined`
- empty strings
- extra whitespace

Because of this, the function could crash unexpectedly or return incorrect results depending on input.

---

## Refactor summary (improved error handling)
To improve reliability, I refactored the function by:
- validating that both inputs are strings
- trimming whitespace
- rejecting empty values after trimming
- using guard clauses so invalid cases are handled early and clearly

This made the behaviour predictable and reduced the chance of silent bugs.

---

## Reflection

### What was the issue with the original code?
The issue was that the original code relied on assumptions about input quality. It did not validate inputs or handle invalid cases, which meant it could break in real-world usage where input is often messy or missing. This also made debugging harder because failures could happen far away from the source of the problem.

### How does handling errors improve reliability?
Handling errors improves reliability by making the code behave consistently even when something unexpected happens. Validation and guard clauses prevent bad data from flowing through the system, reduce crashes, and provide clearer failure messages. This makes the software more stable for users and easier for developers to maintain, test, and debug over time.



```
