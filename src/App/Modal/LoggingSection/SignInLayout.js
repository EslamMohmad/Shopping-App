import React from "react";

import { useForm } from "react-hook-form";

import { useSelector } from "react-redux";

import { rememberMeFucn, overLayFunc } from "../../Store/ModalSlice";

import { getSignInData } from "../../Store/LoggingSlice";

const SignInLayout = ({ action, rememberState }) => {
  const { SIGNIN } = useSelector(({ LoggingSlice }) => LoggingSlice);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      "signIn-email": "",
      "signIn-password": "",
    },
  });
  const SubmitSignInForm = (data) => {
    action(getSignInData(data));
    SIGNIN.email === data["signIn-email"] &&
      SIGNIN.password === data["signIn-password"] &&
      action(overLayFunc());
  };

  const errorsHandler = (inputError) => {
    return (
      inputError && (
        <p className="mb-0 py-2 text-danger fs-6">{inputError.message}</p>
      )
    );
  };

  return (
    <form
      className="signInForm d-flex flex-column"
      onSubmit={handleSubmit(SubmitSignInForm)}
    >
      <div className="mb-3">
        <label htmlFor="signIn-email" className="form-label">
          email
        </label>
        <input
          type="email"
          className={`form-control formInput`}
          id="signIn-email"
          autoComplete="true"
          {...register("signIn-email", {
            required: "email is required",
          })}
        />
        {errorsHandler(errors["signIn-email"])}
      </div>
      <div className="mb-3">
        <label htmlFor="signIn-password" className="form-label">
          password
        </label>
        <input
          type="password"
          className={`form-control formInput`}
          id="signIn-password"
          autoComplete="true"
          {...register("signIn-password", {
            required: "password is required",
            maxLength: {
              value: 15,
              message: "you exceeded the max length",
            },
            minLength: {
              value: 8,
              message: "the length of password must be 8",
            },
          })}
        />
        {errorsHandler(errors["signIn-password"])}
      </div>
      <div className="account-options d-flex flex-wrap justify-content-between mb-2">
        <div
          className={`rememberMe d-flex align-items-center mb-2 me-2 justify-content-sm-between `}
        >
          <input
            type="checkbox"
            id="checkbox"
            onClick={() => action(rememberMeFucn())}
          />
          <div className={rememberState ? "check active me-2" : "check me-2"}>
            <span className={rememberState ? "active" : null}></span>
          </div>
          <label htmlFor="checkbox">remember me</label>
        </div>
        <div className="forgot">
          <a href="./">forgot password</a>
        </div>
      </div>
      <div className="login">
        <button
          type="submit"
          disabled={!isValid}
          className={`btn btn-dark logBtn`}
        >
          login
        </button>
      </div>
    </form>
  );
};

export default SignInLayout;
