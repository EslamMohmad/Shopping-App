import React from "react";

import { overLayFunc } from "../../Store/ModalSlice";

import "./OverLaySection.css";

import useCLassRemoveSmoothly from "../../Hooks/useCLassRemoveSmoothly";

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

  const cls = useCLassRemoveSmoothly(
    props.AsideState,
    1000,
    "Aside-active",
    "Aside-not-active"
  );

  props.overLayState
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  return (
    <div
      status={props.overLayState ? sectionsRender() : null}
      onClick={() => action(overLayFunc())}
      className={`d-flex overLay ${cls} ${
        props.overLayState ? "active" : "not-active"
      }`}
    >
      {children}
    </div>
  );
};

export default OverLaySection;
