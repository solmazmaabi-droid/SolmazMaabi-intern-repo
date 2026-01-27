# 📌 Handling Forms with Formik

## ❓ How does Formik simplify form management compared to handling state manually?

Formik simplifies form management by centralising form values, change handlers, blur handlers, validation state, and submission logic in one place. Instead of creating separate `useState` variables and handlers for each field, Formik provides a consistent pattern (`values`, `handleChange`, `handleBlur`, `errors`, `touched`, and `handleSubmit`) that reduces repetitive code and makes forms easier to maintain as they grow.

## ❓ What are the benefits of using Formik’s validation instead of writing validation logic manually?

Formik’s validation (especially with Yup) makes validation more structured and reusable by defining rules in a schema. It automatically tracks and displays errors based on user interaction (`touched`) and prevents submission when validation fails. This approach reduces bugs, keeps validation logic separate from UI code, and makes it easier to update or extend validation rules later.
