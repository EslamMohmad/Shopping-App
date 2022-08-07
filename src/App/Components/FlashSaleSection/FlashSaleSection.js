import React from "react";

import wideImg from "./Imgs/wide-img.jpg";

import "./FlashSale.css";
import FlashSaleMinSlider from "./FlashSaleMinSlider";
import FlashSaleMaxSlider from "./FlashSaleMaxSlider";
import ShopByCategory from "./ShopByCategory";

const FlashSaleSection = () => {
  return (
    <div className="FlashSaleSection border-bottom mb-3 mb-xxl-5">
      <div className="row mx-auto d-grid mb-3">
        <div className="banner px-0">
          <img className="hoverEffect" src={wideImg} alt="wide-img" />
        </div>
        <div className="p-4 minSlider flashSlider">
          <h2 className="fw-bold mb-2 mb-sm-4">flash sale</h2>
          <FlashSaleMinSlider />
        </div>
      </div>
      <div className="row m-auto mb-5">
        <div className="maxSlider flashSlider px-0">
          <FlashSaleMaxSlider />
        </div>
      </div>
      <div className="row mb-5 mx-0">
        <div className="px-0 category">
          <h3 className="fw-bold mb-5">shop by category</h3>
          <ShopByCategory />
        </div>
      </div>
    </div>
  );
};

export default FlashSaleSection;
