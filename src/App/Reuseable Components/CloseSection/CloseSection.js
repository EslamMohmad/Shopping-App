import React from "react";

import { overLayFunc } from "../../Store/ModalSlice";
import { useDispatch } from "react-redux";

import Icon from "../../Reuseable Components/Icon/Icon";

const CloseSection = () => {
  const action = useDispatch();

  return (
    <div
      style={{ cursor: "pointer" }}
      className="closeSection"
      onClick={() => action(overLayFunc())}
    >
      <Icon prefix={"fa-solid"} icon={"fa-xmark"} />
    </div>
  );
};

export default CloseSection;
