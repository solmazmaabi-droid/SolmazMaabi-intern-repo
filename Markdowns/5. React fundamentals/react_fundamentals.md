# 📌 Setting Up the Environment

## What challenges did you face during setup?
The main challenge during setup was understanding how Tailwind integrates with React and the build tool. Configuring the `content` paths correctly was important so Tailwind could detect class usage in JSX files. It also took some attention to ensure the Tailwind directives were placed in the correct CSS file used by the application.

Another challenge was verifying that Tailwind was actually working, which I confirmed by applying visible utility classes (layout, colour, and typography) in a React component.

Overall, once the configuration was correct, the setup became straightforward and the developer experience felt smooth and efficient.

---

# 📌 Understanding Components & Props

## Why are components important in React?

Components are important in React because they allow the UI to be broken down into small, reusable, and independent pieces. Each component has a clear responsibility, which makes the code easier to understand, test, and maintain.

Props allow data to be passed into components, making them flexible and reusable. Instead of hardcoding values, components can display different content based on the props they receive. This helps create dynamic user interfaces and reduces duplication because the same component can be reused in multiple places with different data.

---

# 📌 Handling State & User Input
## ❓ What happens if we modify state directly instead of using `setState`?

If we modify state directly instead of using `setState` (or the setter function from `useState`), React will not recognise that the state has changed. As a result, the component will not re-render, and the UI may not update to reflect the new state. This can cause the application to behave unpredictably and the UI to become out of sync with the underlying data. Using `setState` ensures React knows when state changes and can update the component correctly.
