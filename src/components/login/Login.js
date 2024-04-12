import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from 'react-router-dom';
import { submitLogin } from "./api/ApiCalls";
import Welcome from "../../assets/images/welcome.jpg";
import Logo from "../../assets/images/logo.svg";
import "./Login.css";

const Login = ({setUser}) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await submitLogin(data);
      setUser({firstname: response.data.firstName, lastname: response.data.lastName});
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="login-container">
      <img className="welcome-img" src={Welcome} alt="welcome" />
      <div className="login-form-container">
        <div>
          <img className="logo-img" src={Logo} alt="Logo" />
          <form onSubmit={handleSubmit(onSubmit)}>
            <p
              style={{
                fontWeight: "300",
                fontSize: "18px",
                marginTop: "120px",
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
            {errors.email && <p className="login-error-message">&#9888; {errors.email.message}</p>}
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
            {errors.password && <p className="login-error-message">&#9888; {errors.password.message}</p>}
            <input className="login-button" type="submit" value="LOG IN" />
          </form>
          <p style={{ fontWeight: "300", fontSize: "18px", marginTop: "12px" }}>
            Don’t have an account?{" "}
            <Link className="signup-link" to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
