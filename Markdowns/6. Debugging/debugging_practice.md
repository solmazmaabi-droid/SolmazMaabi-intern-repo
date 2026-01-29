# 📌 Practise React Debugging in a Test Repo

## Article
I used the buggy example based on the patterns discussed in “Three Buggy React Code Examples and How to Fix Them”.

## Bug Recreated
**Bug type:** Stale closure in `useEffect` with `setInterval`.

### What was the issue?
The interval callback used `count` from the first render because the effect ran once with an empty dependency array. This caused the callback to hold onto an outdated value (“stale closure”), so the counter stopped updating correctly.

### What debugging method did you use?
- **Console logging:** I logged `count` inside the interval and noticed it kept printing the old value.
- **React DevTools:** I inspected the component state and confirmed the UI was not updating as expected.
- **Dependency reasoning:** I noticed the effect depended on `count` but the dependency array was empty, which can cause stale state issues.

### How did you resolve the problem?
I fixed the stale closure by using a functional state update:

- Changed `setCount(count + 1)` to `setCount(prev => prev + 1)`

This ensures React always uses the most recent state value, even inside an interval callback. The counter then increased correctly every second.
