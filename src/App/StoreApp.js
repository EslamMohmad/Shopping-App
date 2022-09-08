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

const StoreApp = () => {
  return (
    <Fragment>
      <Header />
      <div
        className="container-fluid px-4 parentContainer d-flex flex-column justify-content-between"
        style={{ marginTop: "95px", minHeight: "calc(100vh - 95px)" }}
      >
        <Routes>
          <Route path="/Shopping-App/" element={<Main />} />
          <Route
            path="/Shopping-App/products/product/:id"
            element={<ProductDetailsSection />}
          />
          <Route path="Shopping-App/*" element={<MyAccount />} />
          <Route
            path="/Shopping-App/products"
            element={<AllProductsSection />}
          />
        </Routes>
        <FooterSection />
      </div>
      <Modal />
      <FooterMenu />
    </Fragment>
  );
};

export default StoreApp;
