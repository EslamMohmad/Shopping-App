import React from "react";

import headerImg from "./page-header.jpg";

import "./CheckoutSection.css";
import ShippingAddressFrom from "./ShippingAddressFrom";
import useScrollToTop from "../../Hooks/useScrollToTop";
import YourOrders from "./YourOrders";
const CheckoutSection = () => {
  useScrollToTop();

  return (
    <div className="checkout-section">
      <div className="row" style={{ margin: "0 -24px" }}>
        <div className="col-auto p-0 w-100">
          <div className="img position-relative">
            <img
              src={headerImg}
              alt="header"
              width="100%"
              height="100%"
              style={{ objectFit: "cover" }}
            />
            <div className="text position-absolute text-center text-white">
              <p className="mb-2">explore</p>
              <h3 className="mb-0 fw-bolder">checkout</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container-xxl">
        <div className="row justify-content-between">
          <div className="col-12 col-lg-5 col-xl-6 form mb-5 mb-lg-0">
            <ShippingAddressFrom />
          </div>
          <div className="col-12 col-lg-6 col-xl-5 orders ">
            <YourOrders />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSection;
