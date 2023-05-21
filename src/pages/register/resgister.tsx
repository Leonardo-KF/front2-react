import { ZodError, z } from "zod";
import { useFormik } from "formik";

export const RegisterSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Password is too short").max(12),
  name: z.string().min(3).max(50),
});

export function Register() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate: (values) => {
      const validatedData: {
        success: boolean;
        error?: ZodError;
      } = RegisterSchema.safeParse(values);
      if (validatedData.error) {
        const error = validatedData.error.issues.reduce((acc, curr) => {
          return {
            ...acc,
            [curr.path[0]]: curr.message,
          };
        }, {});
        return error;
      }
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            style={{
              border:
                formik.errors.email && formik.touched.email
                  ? "1px solid red"
                  : "1px solid #fff",
            }}
            id="email"
            type="email"
            name="email"
            onBlur={formik.handleBlur}
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <h3>
            {formik.errors.password && formik.touched.password
              ? "Password is bad"
              : ""}
          </h3>
          <input
            style={{
              border:
                formik.errors.password && formik.touched.password
                  ? "1px solid red"
                  : "1px solid #fff",
            }}
            id="password"
            type="password"
            name="password"
            onBlur={formik.handleBlur}
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            style={{
              border:
                formik.errors.name && formik.touched.name
                  ? "1px solid red"
                  : "1px solid #fff",
            }}
            id="name"
            type="text"
            name="name"
            onBlur={formik.handleBlur}
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
