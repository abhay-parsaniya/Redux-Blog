import React, { useEffect } from "react";
import useInput from "../hooks/use-input";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../store/slice/login-slice";
import { sendLoginData } from "../store/actions/login-actions";
import { Form, Button } from "./react-bootstrap-store";
import "./styles/Login.css";
import { useNavigate } from "react-router-dom";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const Login = () => {

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput(isNotEmpty);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const LoginData = useSelector((state) => state.login);

  useEffect(() => {
    dispatch(
      loginActions.newLogin({
        emailValue,
        passwordValue,
        emailIsValid,
        passwordIsValid,
      })
    );
  }, [
    emailValue,
    passwordValue,
    emailIsValid,
    passwordIsValid,
    dispatch,
  ]);

  let formIsValid = false;

  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const SubmitHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log(LoginData);
    dispatch(sendLoginData(LoginData, navigate));
    console.log("Submitted!");

    resetEmail();
    resetPassword();
  };

  return (
    <div className="main-container">
        <div className="login-form-container">
          <h2>Login</h2>
          <Form className="form" onSubmit={SubmitHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={emailValue}
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
              />
              <Form.Text className="text-muted">
                {emailHasError && (
                  <h6 className="error-text">Please enter a valid email.</h6>
                )}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={passwordValue}
                onChange={passwordChangeHandler}
                onBlur={passwordBlurHandler}
              />
              <Form.Text className="text-muted">
                {passwordHasError && (
                  <h6 className="error-text">Please enter a password.</h6>
                )}
              </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit" disabled={!formIsValid}>
              Login
            </Button>
          </Form>
        </div>
      </div>
  )
}

export default Login