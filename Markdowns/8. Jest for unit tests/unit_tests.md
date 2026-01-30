# 📌 Introduction to Unit Testing with Jest

## Why is automated testing important in software development?
Automated testing helps detect bugs early, prevents regressions when features change, and improves overall code reliability. It allows developers to refactor code with confidence and ensures consistent behaviour across updates, which is critical for production applications.

## What did you find challenging when writing your first Jest test?
The most challenging part was configuring Jest correctly to work with modern JavaScript modules. Since newer versions of Jest no longer include the `jsdom` environment by default, understanding how to install and configure the testing environment was essential. Once the setup was complete, writing the actual test logic was straightforward.

---

# 📌 Testing React Components with Jest & React Testing Library

## What are the benefits of using React Testing Library instead of testing implementation details?
React Testing Library encourages testing components from the user’s perspective rather than focusing on internal state or component structure. This results in more reliable and maintainable tests that are less likely to break during refactoring, while still ensuring that components render and behave correctly.

## What challenges did you encounter when simulating user interaction?
Simulating user interaction required learning how to query elements using accessible roles and text rather than relying on implementation details. Handling asynchronous updates after user actions and configuring the testing environment correctly also presented challenges initially.

## Additional challenge encountered
While testing React components, I encountered issues related to configuring Jest to work with modern React features. This included resolving `React is not defined` errors caused by JSX runtime configuration and enabling DOM-specific matchers by installing and setting up `@testing-library/jest-dom` so that assertions like `toBeInTheDocument` could be used.
