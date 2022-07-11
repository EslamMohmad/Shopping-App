import React from "react";
import { useDispatch } from "react-redux";
import Icon from "../../Reuseable Components/Icon/Icon";
import { searchFunc } from "../../Store/ModalSlice";

const SeachBtn = () => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => dispatch(searchFunc())}
      className="search"
      style={{ cursor: "pointer" }}
    >
      <Icon prefix={"fa-solid"} icon={"fa-magnifying-glass"} />
    </div>
  );
};

export default SeachBtn;
