# 📌 Introduction to Redux Toolkit (State Management)

## When should you use Redux instead of useState?

Use **Redux** when your application needs to manage **global state** that is shared across many components, especially as the app grows in size and complexity. Redux is useful when state logic becomes complex, when you need predictable and centralised state updates, or when handling asynchronous data (such as API calls, caching, or loading states). It also improves debugging and maintainability through clear action flows and developer tools.

Use **useState** for **local component state** that is simple and only relevant to a single component or a small part of the UI, such as form inputs, toggles, or modal visibility.

---

# 📌 Using Selectors in Redux Toolkit

## What are the benefits of using selectors instead of directly accessing state?

Selectors provide a clean and reusable way to access Redux state without tightly coupling components to the store structure. By using selectors, state access logic is centralised, making the application easier to maintain and refactor if the state shape changes. Selectors also improve readability, reduce duplication, and can be optimised for performance (for example, with memoisation) to prevent unnecessary re-renders. Overall, selectors help keep components simpler and more focused on presentation rather than state structure.
