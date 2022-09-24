import React from "react";

import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";

import { backToHomeFunc } from "../../Store/ModalSlice";

const BackToHome = ({ children }) => {
  const action = useDispatch();

  return (
    <Link to="/Shopping-App" className="home">
      <span className="backToHome" onClick={() => action(backToHomeFunc())}>
        {children}
      </span>
    </Link>
  );
};

export default React.memo(BackToHome);
