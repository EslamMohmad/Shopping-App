import React, { useState } from "react";
import Logo from "../../Reuseable Components/Logo/Logo";
import Nav from "../../Reuseable Components/Nav/Nav";
import ASide from "./../../Reuseable Components/ASide/ASide";
import CloseSection from "./../../Reuseable Components/CloseSection/CloseSection";
import SoicalIcons from "./../../Reuseable Components/SoicalIcons/SoicalIcons";

import "./MenuSection.css";

const MenuSection = () => {
  return (
    <ASide cls="aside menuSection d-flex flex-column justify-content-between">
      <div className="top">
        <div className="logo border-bottom p-4 d-flex justify-content-between align-items-center">
          <Logo />
          <span className="close fs-3">
            <CloseSection />
          </span>
        </div>
        <div className="list pt-5 px-4">
          <Nav cls="asideList" />
        </div>
      </div>
      <SoicalIcons cls="icons" />
    </ASide>
  );
};

export default MenuSection;
