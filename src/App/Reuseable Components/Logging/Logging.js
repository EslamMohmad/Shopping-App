import React from "react";
import { useDispatch } from "react-redux";
import { loggingFunc } from "../../Store/ModalSlice";
const Logging = ({ content }) => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => dispatch(loggingFunc())}
      className="logging"
      style={{ cursor: "pointer" }}
    >
      {content}
    </div>
  );
};

export default Logging;
