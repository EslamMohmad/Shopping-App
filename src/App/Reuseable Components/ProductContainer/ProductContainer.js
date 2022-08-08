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
    <div className={`name mb-3 mb-xxl-5 px-0`}>
      <h2 className="fw-bold mb-5">{name}</h2>
      <div className="d-grid productGridLayout">{dataHandler()}</div>
    </div>
  );
};

export default ProductContainer;
