import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "./Button";


function FormikForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Please enter a valid email")
        .required("Email is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log("Form submitted:", values);
      resetForm();
    },
  });

  return (
    <div style={{ padding: 16, maxWidth: 420 }}>

      <form onSubmit={formik.handleSubmit}>
        {/* Name */}
        <div style={{ marginBottom: 12 }}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {formik.touched.name && formik.errors.name ? (
            <p style={{ color: "red", margin: "6px 0 0" }}>
              {formik.errors.name}
            </p>
          ) : null}
        </div>

        {/* Email */}
        <div style={{ marginBottom: 12 }}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {formik.touched.email && formik.errors.email ? (
            <p style={{ color: "red", margin: "6px 0 0" }}>
              {formik.errors.email}
            </p>
          ) : null}
        </div>

        <Button type="submit" style={{ padding: "8px 14px" }}>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default FormikForm;
