import React, { useEffect } from "react";
import useInput from "../hooks/use-input";
import { useDispatch, useSelector } from "react-redux";
import { registerActions } from "../store/slice/register-slice";
import { sendRegisterData } from "../store/actions/register-actions";
import { Form, Button } from "./react-bootstrap-store";
import "./styles/Register.css";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const Register = () => {
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  const {
    value: usernameValue,
    isValid: usernameIsValid,
    hasError: usernameHasError,
    valueChangeHandler: usernameChangeHandler,
    inputBlurHandler: usernameBlurHandler,
    reset: resetUsername,
  } = useInput(isNotEmpty);

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput(isNotEmpty);

  const dispatch = useDispatch();

  const RegistrationData = useSelector((state) => state.register);

  //   const dependencyArray = {
  //     emailValue,
  //     usernameValue,
  //     passwordValue,
  //     emailIsValid,
  //     usernameIsValid,
  //     passwordIsValid,
  //     dispatch,
  //   };

  useEffect(() => {
    dispatch(
      registerActions.newRegister({
        emailValue,
        usernameValue,
        passwordValue,
        emailIsValid,
        usernameIsValid,
        passwordIsValid,
      })
    );
  }, [
    emailValue,
    usernameValue,
    passwordValue,
    emailIsValid,
    usernameIsValid,
    passwordIsValid,
    dispatch,
  ]);

  let formIsValid = false;

  if (emailIsValid && usernameIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const SubmitHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log(RegistrationData);
    dispatch(sendRegisterData(RegistrationData));
    console.log("Submitted!");

    resetEmail();
    resetUsername();
    resetPassword();
  };

  return (
    <>
      <div className="main-container">
        <div className="register-form-container">
          <h2>Register</h2>
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

            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Username"
                value={usernameValue}
                onChange={usernameChangeHandler}
                onBlur={usernameBlurHandler}
              />
              <Form.Text className="text-muted">
                {usernameHasError && (
                  <h6 className="error-text">Please enter a username.</h6>
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
              Register
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Register;
