import React from "react";

import { overLayFunc } from "../../Store/ModalSlice";

import "./OverLaySection.css";

const OverLaySection = ({ children, props, action }) => {
  const sectionsRender = () => {
    for (let prop in props) {
      if (prop !== "rememberMeState") {
        const result = Object.keys(props).filter(
          (prop) => props[prop] === true
        );
        result.length = 2;
        return result.join(" ");
      }
    }
  };

  const classRender = () => {
    return props.searchState
      ? "justify-content-center"
        ? props.loggingState
        : "justify-content-center align-items-center"
      : "";
  };

  props.cartState || props.menuState || props.productInfoState
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  return (
    <div
      status={props.overLayState ? sectionsRender() : null}
      onClick={() => action(overLayFunc())}
      className={`d-flex overLay ${
        props.overLayState ? "active" : ""
      } ${classRender()}`}
    >
      {children}
    </div>
  );
};

export default OverLaySection;
