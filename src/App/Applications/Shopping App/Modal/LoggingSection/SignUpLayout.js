import React from "react";

import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

import { overLayFunc } from "../../Store/ModalSlice";

// import { setNewUser } from "../../Store/LoggingSlice";
import { getSignUpData } from "../../Store/LoggingSlice";

const SignUpLayout = ({ action }) => {
  const { SIGNUP } = useSelector(({ LoggingSlice }) => LoggingSlice);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      "signUp-name": "",
      "signUp-age": "",
      "signUp-email": "",
      "signUp-password": "",
    },
  });
  const SubmitSignUpForm = (data) => {
    action(getSignUpData(data));
    SIGNUP.formValidState && action(overLayFunc());
  };

  const errorsHandler = (inputError) => {
    return (
      inputError && (
        <p className="mb-0 py-2 text-danger fs-6">{inputError.message}</p>
      )
    );
  };

  return (
    <form className="signUpForm" onSubmit={handleSubmit(SubmitSignUpForm)}>
      <div className="mb-3 nameInput">
        <label htmlFor="signUp-name" className="form-label">
          name
        </label>
        <input
          type="text"
          className={`form-control formInput`}
          id="signUp-name"
          autoComplete="false"
          {...register("signUp-name", {
            required: "name is required",
          })}
        />
        {errorsHandler(errors["signUp-name"])}
      </div>
      <div className="mb-3 ageInput">
        <label htmlFor="signUp-age" className="form-label">
          age
        </label>
        <input
          type="number"
          className={`form-control formInput`}
          id="signUp-age"
          autoComplete="true"
          {...register("signUp-age", {
            required: "age is required",
            max: { value: 60, message: "the age is not valid" },
            min: { value: 18, message: "the age is not valid" },
            valueAsNumber: true,
          })}
        />
        {errorsHandler(errors["signUp-age"])}
      </div>
      <div className="mb-3 emailInout">
        <label htmlFor="signUp-email" className="form-label">
          email
        </label>
        <input
          type="email"
          className={`form-control formInput`}
          id="signUp-email"
          autoComplete="true"
          {...register("signUp-email", {
            required: "email is required",
          })}
        />
        {errorsHandler(errors["signUp-email"])}
      </div>
      <div className="mb-3 passwordInput">
        <label htmlFor="signUp-password" className="form-label">
          password
        </label>
        <input
          type="password"
          className={`form-control formInput`}
          id="signUp-password"
          autoComplete="true"
          {...register("signUp-password", {
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
        {errorsHandler(errors["signUp-password"])}
      </div>
      <div className="login">
        <button
          type="submit"
          disabled={!isValid}
          className={`btn btn-dark logBtn`}
        >
          register
        </button>
      </div>
    </form>
  );
};

export default SignUpLayout;
