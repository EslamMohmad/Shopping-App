import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { menuFunc } from "../../Store/ModalSlice";

import "./Menu.css";

const Menu = () => {
  const { menuState } = useSelector((state) => state.ModalSlice);

  const dispatch = useDispatch();

  const barsWidthArr = ["50%", "90%", "70%"];

  const iconRender = () =>
    barsWidthArr.map((bar, idx) => (
      <span
        className={menuState ? "active" : null}
        key={idx}
        style={{ "--width": bar }}
      ></span>
    ));

  return (
    <div onClick={() => dispatch(menuFunc())} className="menu">
      <div className={`icon d-flex flex-column justify-content-between`}>
        {iconRender()}
      </div>
    </div>
  );
};

export default Menu;
