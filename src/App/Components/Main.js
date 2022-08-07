import React from "react";

import HeaderSlider from "./HeaderSlider/HeaderSlider";
import FlashSaleSection from "./FlashSaleSection/FlashSaleSection";
import Products from "./Products/Products";
import TopBrandsSection from "./TopBrandsSection/TopBrandsSection";
import DownloadApp from "./DownloadApp/DownloadApp";
import MemberChat from "./MemberChat/MemberChat";
import useScrollToTop from "./../Hooks/useScrollToTop";

const Main = () => {
  useScrollToTop();

  return (
    <div className="main">
      <HeaderSlider />
      <FlashSaleSection />
      <Products />
      <TopBrandsSection />
      <DownloadApp />
      <MemberChat />
    </div>
  );
};

export default Main;
