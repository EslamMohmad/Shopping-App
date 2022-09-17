import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import DashBoard from "./Sections/DashBoard";
import Orders from "./Sections/Orders";
import AccountDetails from "./Sections/AccountDetails";
import ChangePassword from "./Sections/ChangePassword";

import headerImg from "./headerImg.jpg";
import "./MyAccount.css";
import { logOutFunc } from "../../Store/LoggingSlice";
import useScrollToTop from "./../../Hooks/useScrollToTop";

const MyAccount = () => {
  const AsideLinks = [
    { text: "dashboard", link: "" },
    { text: "orders", link: "orders" },
    { text: "account details", link: "accountDetails" },
    { text: "change password", link: "changePassword" },
  ];

  const action = useDispatch();

  useScrollToTop();

  return (
    <div className="myAccount">
      <div className="headerImg">
        <img src={headerImg} alt="headerImg" width={"100%"} height={"100%"} />
        <div className="text position-absolute text-center">
          <p className="mb-2">explore</p>
          <h3 className="mb-0 fw-bolder">my account</h3>
        </div>
      </div>
      <div className="accountInfo d-flex">
        <div className="container-fluid px-0">
          <div className="row m-auto flex-row">
            <aside className="accountSections col-lg-3 mb-5 px-0">
              <ul className="list-unstyled mb-0">
                {AsideLinks.map((item, key) => (
                  <Link key={key} to={item.link}>
                    <li>
                      <span>{item.text}</span>
                    </li>
                  </Link>
                ))}
                <Link to="/Shopping-App" onClick={() => action(logOutFunc())}>
                  <li>
                    <span>log out</span>
                  </li>
                </Link>
              </ul>
            </aside>
            <div className="section col-12 col-lg-9 px-0">
              <Routes>
                <Route path="*" element={<DashBoard />} />
                <Route path="orders" element={<Orders />} />
                <Route path="accountDetails" element={<AccountDetails />} />
                <Route path="changePassword" element={<ChangePassword />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
