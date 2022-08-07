import React from "react";

import { rememberMeFucn } from "../../Store/ModalSlice";

import Icon from "../../Reuseable Components/Icon/Icon";

import logo from "../../Reuseable Components/Logo/logo.svg";

import useCLassRemoveSmoothly from "../../Hooks/useCLassRemoveSmoothly";

import "./LoggingSection.css";

const LoggingSection = ({ action, logState, sectionState }) => {
  const cls = useCLassRemoveSmoothly(sectionState, 400, "d-block", "d-none");

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`logging ${cls} ${sectionState ? "active" : "not-active"}`}
    >
      <div className="parent">
        <div className="top d-flex align-items-center flex-column">
          <img className="py-2" src={logo} width="100px" alt="logo" />
          <p className="py-2">Login with your email & password</p>
        </div>
        <form className="d-flex flex-column">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              email
            </label>
            <input
              type="email"
              className={`form-control formInput`}
              id="email"
              autoComplete="true"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              password
            </label>
            <input
              type="password"
              className={`form-control formInput`}
              id="password"
              autoComplete="true"
            />
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
              <div className={logState ? "check active me-2" : "check me-2"}>
                <span className={logState ? "active" : null}></span>
              </div>
              <label htmlFor="checkbox">remember me</label>
            </div>
            <div className="forgot">
              <a href="./">forgot password</a>
            </div>
          </div>
          <div className="login">
            <button type="button" className={`btn btn-dark logBtn`}>
              login
            </button>
          </div>
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
          <div className="register">
            <p className="m-0 text-center">
              don't have any account? <a href="./">register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoggingSection;
