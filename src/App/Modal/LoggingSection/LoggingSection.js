import React from "react";

import { useSelector } from "react-redux";

import useCLassRemoveSmoothly from "../../Hooks/useCLassRemoveSmoothly";

import { singInFunc, singUpFunc } from "../../Store/ModalSlice";

import Icon from "../../Reuseable Components/Icon/Icon";

import logo from "../../Reuseable Components/Logo/logo.svg";

import SignInLayout from "./SignInLayout";
import SignUpLayout from "./SignUpLayout";

import "./LoggingSection.css";

const LoggingSection = ({ action, rememberState, sectionState }) => {
  const { singInState, singUpState } = useSelector(
    ({ ModalSlice }) => ModalSlice
  );

  const cls = useCLassRemoveSmoothly(sectionState, 400, "d-block", "d-none");

  const contentHandler = (firstContent, secoundContent) => {
    if (singInState && !singUpState) {
      return firstContent;
    } else if (!singInState && singUpState) {
      return secoundContent;
    }

    return firstContent || secoundContent;
  };

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`logging ${cls} ${sectionState ? "active" : "not-active"}`}
    >
      <div className={`${contentHandler("singIn", "singUp")} ${cls}`}>
        <div className="top d-flex align-items-center flex-column">
          <img className="py-2" src={logo} width="100px" alt="logo" />
          <p className="py-2">
            {contentHandler(
              "Login with your email & password",
              "By signing up, you agree to our terms & policy"
            )}
          </p>
        </div>
        <div className="d-flex flex-column">
          {contentHandler(
            <SignInLayout rememberState={rememberState} action={action} />,
            <SignUpLayout action={action} />
          )}
          <div className={`or my-2`}>
            <hr />
            <span>or</span>
          </div>
          <div className="others-log-way mb-3">
            <button
              type="button"
              className={`btn text-white facebook logBtn mb-3`}
            >
              <span className="me-2">
                <Icon prefix={"fa-brands"} icon={"fa-facebook-f"} />
              </span>
              login with facebook
            </button>
            <button type="button" className={` text-white btn google logBtn`}>
              <span className="me-2">
                <Icon prefix={"fa-brands"} icon={"fa-google"} />
              </span>
              login with google
            </button>
          </div>
          <div className={`${singInState ? "login" : "register"}`}>
            <p className="m-0 text-center">
              {contentHandler(
                "don't have any account? ",
                "Already have an account? "
              )}
              <span
                className="fw-bold text-decoration-underline"
                onClick={() =>
                  singInState && !singUpState
                    ? action(singUpFunc())
                    : !singInState && singUpState
                    ? action(singInFunc())
                    : false
                }
                style={{ cursor: "pointer" }}
              >
                {contentHandler("register", "login")}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoggingSection;
