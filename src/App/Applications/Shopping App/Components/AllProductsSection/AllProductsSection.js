import React from "react";
import AsideSection from "./AsideSection";
import ProductsSection from "./ProductsSection";

import "./AllProductsSection.css";
import useScrollToTop from "./../../Hooks/useScrollToTop";

const AllProductsSection = () => {
  useScrollToTop();

  return (
    <div className="allProductsSection container-fluid px-0 pt-lg-4">
      <div className="row mx-0 justify-content-around">
        <div className="col-3 col-xl-2 px-0 d-none d-lg-block">
          <AsideSection />
        </div>
        <div className="col-12 col-lg-9 px-0 ps-lg-5 position-sticky">
          <ProductsSection />
        </div>
      </div>
    </div>
  );
};

export default AllProductsSection;
