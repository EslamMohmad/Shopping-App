import React, { useState } from "react";

import "./Header.css";

import Nav from "../../Reuseable Components/Nav/Nav";
import CountriesBtn from "./CountriesBtn/CountriesBtn";
import SeachBtn from "../../Reuseable Components/SearchBtn/SeachBtn";
import Logging from "../../Reuseable Components/Logging/Logging";
import AddCart from "../../Reuseable Components/AddCart/AddCart";
import Menu from "../../Reuseable Components/Menu/Menu";
import Logo from "../../Reuseable Components/Logo/Logo";
import BackToHome from "./../../Reuseable Components/BackToHome/BackToHome";

const Header = () => {
  const [scroll, setScroll] = useState("no-scroll");

  window.addEventListener("scroll", function () {
    this.scrollY >= 80 ? setScroll("scrolling") : setScroll("no-scroll");
  });

  return (
    <header className={`container-fluid px-4 ${scroll}`}>
      <div className="row mx-0 h-100">
        <div className="px-0 d-flex parent-container justify-content-between align-items-center flex-row">
          <div className="col-auto d-flex left h-100 align-items-center">
            <div className="me-4 d-none d-md-block d-lg-none">
              <Menu />
            </div>
            <div className="img">
              <BackToHome>
                <Logo />
              </BackToHome>
            </div>
            <nav className="nav h-100 d-none d-lg-block ">
              <Nav cls={"navLists"} />
            </nav>
          </div>
          <div className="col-md-7 col-lg-auto right position-relative">
            <div className={`countries h-100 d-flex align-items-center gap-4`}>
              <div className="countriesBtn flex-grow-1 flex-md-grow-1">
                <CountriesBtn />
              </div>
              <div className="d-none d-md-flex align-items-center options d-flex gap-4">
                <SeachBtn />
                <Logging content={<span className="fw-bold">sgin in</span>} />
                <AddCart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
