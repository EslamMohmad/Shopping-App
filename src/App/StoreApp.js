import React, { Fragment } from "react";

import Header from "./Components/Header/Header";
import HeaderSlider from "./Components/HeaderSlider/HeaderSlider";
import FlashSaleSection from "./Components/FlashSaleSection/FlashSaleSection";
import Products from "./Components/Products/Products";
import Modal from "./Modal/Modal";
import FooterMenu from "./Components/FooterMenu/FooterMenu";
import TopBrandsSection from "./Components/TopBrandsSection/TopBrandsSection";
import DownloadApp from "./Components/DownloadApp/DownloadApp";
import MemberChat from "./Components/MemberChat/MemberChat";
import FooterSection from "./Components/FooterSection/FooterSection";

const StoreApp = () => {
  return (
    <Fragment>
      <Header />
      <HeaderSlider />
      <div className="container-fluid px-3 px-lg-5 parentContainer">
        <FlashSaleSection />
        <Products />
        <TopBrandsSection />
        <DownloadApp />
        <MemberChat />
        <FooterSection />
      </div>
      <Modal />
      <FooterMenu />
    </Fragment>
  );
};

export default StoreApp;
