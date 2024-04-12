import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { submitSignUp } from "./api/ApiCalls";
import Welcome from "../../assets/images/welcome.jpg";
import Logo from "../../assets/images/logo.svg";
import "./SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await submitSignUp(data);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="signup-container">
      <img className="welcome-img" src={Welcome} alt="welcome" />
      <div className="signup-form-container">
        <div>
          <img className="signup-img" src={Logo} alt="Logo" />
          <form onSubmit={handleSubmit(onSubmit)}>
            <p
              style={{
                fontWeight: "300",
                fontSize: "18px",
                marginTop: "120px",
              }}
            >
              CREATE YOUR ACCOUNT
            </p>
            <input
              className="signup-input"
              type="text"
              name="firstname"
              placeholder="FIRST NAME"
              {...register("firstname", {
                required: { value: true, message: "First Name is required." },
              })}
            />
            <br />
            {errors.firstname && (
              <p className="signup-error-message">
                &#9888; {errors.firstname.message}
              </p>
            )}
            <input
              className="signup-input"
              type="text"
              name="lastname"
              placeholder="LAST NAME"
              {...register("lastname", {
                required: { value: true, message: "Last Name is required." },
              })}
            />
            <br />
            {errors.lastname && (
              <p className="signup-error-message">
                &#9888; {errors.lastname.message}
              </p>
            )}
            <input
              className="signup-input"
              type="email"
              name="email"
              placeholder="EMAIL"
              {...register("email", {
                required: { value: true, message: "Email is required." },
              })}
            />
            <br />
            {errors.email && (
              <p className="signup-error-message">
                &#9888; {errors.email.message}
              </p>
            )}
            <input
              className="signup-input"
              type="password"
              name="password"
              placeholder="PASSWORD"
              {...register("password", {
                required: { value: true, message: "Password is required." },
                minLength: {
                  value: 8,
                  message: "Password must be atleast 8  characters.",
                },
                maxLength: {
                  value: 32,
                  message: "Password must not have more than 32 characters.",
                },
                pattern: {
                  value:
                    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*#!@$%^&]).{8,32}$/,
                  message:
                    "Password must contain atleast 1 uppercase, 1 lowercase, 1 special character(!@#$%^&*) and 1 digit.",
                },
              })}
            />
            <br />
            {errors.password && (
              <p className="signup-error-message">
                &#9888; {errors.password.message}
              </p>
            )}
            <input
              className="signup-input"
              type="password"
              name="confirm_password"
              placeholder="CONFIRM PASSWORD"
              {...register("confirm_password", {
                required: {
                  value: true,
                  message: "Confirm Password is required.",
                },
                validate: (value) =>
                  value === watch("password") || "Passwords does not match.",
              })}
            />
            <br />
            {errors.confirm_password && (
              <p className="signup-error-message">
                &#9888;{errors.confirm_password.message}
              </p>
            )}
            <input className="signup-button" type="submit" value="SIGN UP" />
          </form>
          <p style={{ fontWeight: "300", fontSize: "18px", marginTop: "12px" }}>
            Don’t have an account?{" "}
            <Link to="/login" className="login-link">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
