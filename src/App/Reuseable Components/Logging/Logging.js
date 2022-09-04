import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loggingFunc } from "../../Store/ModalSlice";
import { Link } from "react-router-dom";

import "./Logging.css";

const Logging = ({ content }) => {
  const { SIGNIN, SIGNUP, currentFormState } = useSelector(
    ({ LoggingSlice }) => LoggingSlice
  );

  const dispatch = useDispatch();

  const detect_User_or_Admin = () => {
    return SIGNIN.formValidState && !SIGNUP.formValidState
      ? SIGNIN
      : !SIGNIN.formValidState && SIGNUP.formValidState
      ? SIGNUP
      : SIGNIN;
  };

  return (
    <div
      className="logging"
      style={
        currentFormState ? { order: "3", marginLeft: "10px" } : { order: "0" }
      }
    >
      {currentFormState ? (
        <Link to="/Shopping-App/myAccount">
          <div className="user-logging d-flex align-items-center flex-column">
            <img src={require(`${detect_User_or_Admin().img}`)} alt="admin" />

            <p className="mb-0" style={{ fontSize: "12px" }}>
              {detect_User_or_Admin().name}
            </p>
          </div>
        </Link>
      ) : (
        <div
          className="logging"
          style={{ cursor: "pointer" }}
          onClick={() => dispatch(loggingFunc())}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Logging;
