import React from "react";

import ProductDescription from "../../Reuseable Components/ProductDetails/ProductDescription";
import ProductImg from "./../../Reuseable Components/ProductDetails/ProductImg";
import CloseSection from "./../../Reuseable Components/CloseSection/CloseSection";

import useCLassRemoveSmoothly from "../../Hooks/useCLassRemoveSmoothly";

import "./ProductInfoSection.css";

const ProductInfoSection = ({ sectionState }) => {
  const cls = useCLassRemoveSmoothly(sectionState, 400, "d-flex", "d-none");

  return (
    <div
      className={`productInfoSection bg-white rounded-3 position-relative ${cls} ${
        sectionState ? "active" : "no-active"
      }`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="closeIcon position-absolute">
        <CloseSection />
      </div>
      <div className="col-12 col-sm-6">
        <ProductImg />
      </div>
      <div className="col-sm-6 px-4 py-4 d-flex flex-column details">
        <ProductDescription />
      </div>
    </div>
  );
};

export default ProductInfoSection;
