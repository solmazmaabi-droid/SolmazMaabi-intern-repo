# 📌 Making API Calls with Axios

## ❓ Why is it useful to create a reusable Axios instance?

A reusable Axios instance centralises configuration like the base URL, default headers, timeouts, and interceptors. This keeps API requests consistent across the app, reduces repeated code, and makes it easier to update behaviour (for example, changing the base URL or adding a new header) in one place.

## ❓ How does intercepting requests help with authentication?

A request interceptor can automatically attach an authentication token (e.g., from localStorage) to every outgoing request. This avoids manually adding the token in each API call and reduces the risk of missing authentication headers, which can cause inconsistent bugs and unauthorised errors.

## ❓ What happens if an API request times out, and how can you handle it?

If a request times out, the client stops waiting and throws an error (so the UI can recover instead of hanging indefinitely). You can handle timeouts by showing a user-friendly message, offering a retry button, logging the failure for debugging, and potentially using exponential backoff or fallback behaviour for critical requests.
