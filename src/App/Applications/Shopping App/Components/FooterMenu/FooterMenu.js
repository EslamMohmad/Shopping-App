import React from "react";

import Menu from "../../Reuseable Components/Menu/Menu";
import SearchBtn from "../../Reuseable Components/SearchBtn/SeachBtn";
import Home from "../../Reuseable Components/Home/Home";
import AddCart from "../../Reuseable Components/AddCart/AddCart";
import Logging from "../../Reuseable Components/Logging/Logging";

import "./Footer.css";
import Icon from "../../Reuseable Components/Icon/Icon";

const FooterMenu = () => {
  return (
    <div className="d-flex d-md-none footer justify-content-between align-items-center px-3 py-4">
      <Menu />
      <SearchBtn />
      <Home />
      <AddCart />
      <Logging content={<Icon prefix={"fa-solid"} icon={"fa-user"} />} />
    </div>
  );
};

export default FooterMenu;
