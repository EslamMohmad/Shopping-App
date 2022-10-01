import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

import Modal from "./Modal/Modal";
import FooterMenu from "./Components/FooterMenu/FooterMenu";
import Header from "./Components/Header/Header";
import FooterSection from "./Components/FooterSection/FooterSection";
import Main from "./Components/Main";
import ProductDetailsSection from "./Components/ProductDetailsSection/ProductDetailsSection";
import MyAccount from "./Components/MyAccount/MyAccount";
import AllProductsSection from "./Components/AllProductsSection/AllProductsSection";
import PageNotFound from "./Components/PageNotFound/PageNotFound";

import "./ShoppingApp.css";
import CheckoutSection from "./Components/CheckoutSection/CheckoutSection";

const ShoppingApp = () => {
  return (
    <Fragment>
      <Header />
      <div
        className="container-fluid px-4 parentContainer d-flex flex-column justify-content-between"
        style={{
          marginTop: "calc(80px + 1.5rem)",
          minHeight: "calc(100vh - 80px)",
        }}
      >
        <Routes>
          <Route path="Shopping-App" element={<Main />} />
          <Route
            path="Shopping-App/products/product/:id"
            element={<ProductDetailsSection />}
          />
          <Route path="Shopping-App/myAccount/*" element={<MyAccount />} />
          <Route
            path="Shopping-App/products/*"
            element={<AllProductsSection />}
          />
          <Route path="Shopping-App/checkout" element={<CheckoutSection />} />
          <Route path="Shopping-App/*" element={<PageNotFound />} />
        </Routes>

        <FooterSection />
      </div>
      <Modal />
      <FooterMenu />
    </Fragment>
  );
};

export default ShoppingApp;
