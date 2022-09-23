import React from "react";

import Product from "./Product";

import "./ProductContainer.css";

const ProductContainer = ({ name, payload, action }) => {
  const dataHandler = () => {
    if (payload.length) {
      return payload.map((product) => (
        <Product
          product={product}
          key={product.id}
          sectionName={name}
          action={action}
        />
      ));
    }
  };

  return (
    <div className="d-grid productGridLayout mb-3 mb-xxl-5 px-0">
      {dataHandler()}
    </div>
  );
};

export default ProductContainer;
