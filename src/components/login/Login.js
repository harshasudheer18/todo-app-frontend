import React from "react";
import { useForm } from "react-hook-form";
import Welcome from "../../assets/images/welcome.jpg";
import Logo from "../../assets/images/logo.svg";
import "./Login.css";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="login-container">
      <img className="welcome-img" src={Welcome} alt="welcome" />
      <div className="login-form-container">
        <div className="login-form-inner-container">
          <img className="logo-img" src={Logo} alt="Logo" />
          <form onSubmit={handleSubmit(onSubmit)}>
            <p
              style={{
                fontWeight: "300",
                fontSize: "18px",
                marginBottom: "16px",
              }}
            >
              LOG IN TO YOUR ACCOUNT
            </p>
            <input
              className="login-input"
              type="email"
              name="email"
              placeholder="EMAIL"
              {...register("email", {
                required: { value: true, message: "Email is required." },
              })}
            />
            <br />
            {errors.email && <p>&#9888; {errors.email.message}</p>}
            <input
              className="login-input"
              type="password"
              name="password"
              placeholder="PASSWORD"
              {...register("password", {
                required: { value: true, message: "Password is required." },
              })}
            />
            <br />
            {errors.password && <p>&#9888; {errors.password.message}</p>}
            <input className="login-button" type="submit" value="LOG IN" />
          </form>
          <p style={{ fontWeight: "300", fontSize: "18px", marginTop: "12px" }}>
            Don’t have an account?{" "}
            <span className="sign-up-link">Sign up</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
