# 📌 Writing Unit Tests for Clean Code

## Importance of Unit Testing
Unit testing is an essential practice in software development that focuses on testing small, isolated parts of a program to ensure they behave as expected. By validating functionality early, unit tests help prevent bugs from reaching later stages of development. They also provide confidence when making changes, as developers can quickly verify that existing behaviour remains correct.

---

## How Unit Tests Help Keep Code Clean
Unit tests encourage cleaner code by promoting simple, focused functions with clear responsibilities. When code is easy to test, it is usually well-structured and easier to understand. Tests also act as living documentation by clearly describing how a piece of code is supposed to behave. This makes it easier for other developers to understand intent and reduces ambiguity in the codebase.

---

## Issues Identified While Testing
While writing unit tests, it became clear that some assumptions in the code needed to be made explicit. For example, handling invalid inputs and edge cases required clearer logic and validation. Testing highlighted areas where behaviour was undefined or inconsistent, which encouraged improvements in code clarity and robustness.

---

## Impact on Readability and Maintainability
Refining code based on unit test feedback improved readability by making logic more explicit and predictable. The code became easier to maintain because responsibilities were clearer and potential error cases were handled deliberately. This reduces the likelihood of introducing bugs when making future changes.

---

## Reflection
Unit testing reinforces good coding practices by encouraging thoughtful design and intentional behaviour. Writing tests shifts the focus from simply making code work to making it reliable, understandable, and maintainable. Overall, unit tests make future debugging easier by reducing uncertainty and providing a safety net when refactoring or extending functionality.

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

