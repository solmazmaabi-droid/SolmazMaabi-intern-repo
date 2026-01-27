# 📌 Understanding React Hooks: useEffect
## ❓ When should you use useEffect instead of handling logic inside event handlers?

You should use `useEffect` when the logic needs to run as a result of rendering or when state or props change, such as fetching data on page load, setting up subscriptions, or syncing with external systems. Event handlers should be used for direct user actions like button clicks, while `useEffect` handles side effects related to component lifecycle or state changes.

## ❓ What happens if you don’t provide a dependency array?

If no dependency array is provided, the effect runs after every render. This can cause unnecessary re-runs of the effect and may lead to performance issues or infinite loops if the effect updates state.

## ❓ How can improper use of useEffect cause performance issues?

Improper use of `useEffect` can cause effects to run too frequently, such as missing or incorrect dependencies. This may result in repeated API calls, unnecessary re-renders, memory leaks, or slow performance if cleanup functions are not handled correctly.
