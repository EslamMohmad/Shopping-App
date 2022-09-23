import React, { useState } from "react";
import Icon from "../../Reuseable Components/Icon/Icon";

const ProductsOptions = () => {
  const [option, showOption] = useState(false);
  const [optionType, setOptionType] = useState("products Options");

  const optionsArr = [
    "newest",
    "popularity",
    "price : low to high",
    "price : high to low",
  ].map((ops, idx) => (
    <li
      className="p-3 py-2"
      style={{ cursor: "pointer" }}
      key={idx}
      onClick={() => {
        showOption(false);
        setOptionType(ops);
      }}
    >
      {ops}
    </li>
  ));

  document.body.addEventListener("click", () => showOption(false));

  return (
    <div className="d-none d-sm-inline-block ms-5 position-relative productsOptions">
      <button
        className="d-flex align-items-center justify-content-between border rounded p-3 py-2 w-100"
        style={{ cursor: "pointer" }}
        onClick={(e) => {
          e.stopPropagation();
          showOption(!option);
        }}
      >
        <span className="me-3">{optionType}</span>
        <div className="arrows d-flex flex-column">
          <Icon prefix="fa-angle-up" icon="fa-solid" />
          <Icon prefix="fa-angle-down" icon="fa-solid" />
        </div>
      </button>
      {option && (
        <div
          className="options position-absolute border rounded w-100"
          style={{ backgroundColor: "white", zIndex: "3", top: "55px" }}
        >
          <ul className="mb-0 list-unstyled">{optionsArr} </ul>
        </div>
      )}
    </div>
  );
};

export default ProductsOptions;
