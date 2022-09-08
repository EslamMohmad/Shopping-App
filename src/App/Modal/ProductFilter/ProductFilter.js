import React from "react";
import AsideSection from "../../Components/AllProductsSection/AsideSection";
import Icon from "../../Reuseable Components/Icon/Icon";
import { overLayFunc } from "../../Store/ModalSlice";
import ASide from "./../../Reuseable Components/ASide/ASide";

import "./ProductFilter.css";

const ProductFilter = ({ action }) => {
  return (
    <ASide cls="aside productFilterSection p-3 px-4">
      <div className="top d-flex align-items-center mb-3">
        <span
          className="fs-5 p-3 px-0"
          onClick={() => action(overLayFunc())}
          style={{ cursor: "pointer" }}
        >
          <Icon prefix="fa-solid" icon="fa-arrow-left" />
        </span>
        <h3 className="mb-0 flex-grow-1 text-center pe-5">filter</h3>
      </div>
      <AsideSection />
      <div className="bottom bg-dark position-sticky text-white text-center py-3">
        9,608 items
      </div>
    </ASide>
  );
};

export default ProductFilter;
