import { Formik, Field, Form, ErrorMessage } from "formik";
import "./LoginForm.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import TextError from "./TextError";
import { useSelector, useDispatch } from "react-redux";
import { updateToken } from "../Store";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address format")
      .required("Email is required!"),
    password: Yup.string()
      .min(3, "Password must be 3 characters at minimum")
      .required("Password is required!"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (values) => {
    try {
      const response = await axios.post(
        "https://api-staging-v2.sploot.space/api/v2/auth/signin",
        { username: values.email, password: values.password }
      );
      const Token = response.data.data.data.authToken;
      localStorage.setItem("token", Token);
      dispatch(updateToken(Token));
      navigate("/blogs");
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  return (
    <div>  
      <h1 className="header"> login </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <div className="form">
          <Form>
            <label htmlFor="email" className="label">
              Email
            </label>
            <Field
              id="email"
              name="email"
              placeholder="email"
              type="email"
              className="input emailInput"
            />
            <ErrorMessage name="email" component={TextError} />

            <label htmlFor="password" className="label">
              Password
            </label>
            <Field
              id="password"
              name="password"
              placeholder="password"
              type="password"
              className="input"
            />

            <ErrorMessage name="password" component={TextError} />

            <button type="submit" className="submit-button">
              Sign-in
            </button>
          </Form>
        </div>
      </Formik>
    </div>
  );
};
export default LoginForm;
