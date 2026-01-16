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
