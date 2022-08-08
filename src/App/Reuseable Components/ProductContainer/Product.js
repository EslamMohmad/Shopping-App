import React from "react";
import { productInfoFunc } from "../../Store/ModalSlice";

const Product = ({ product, action, name }) => {
  return (
    <div
      className="product rounded overflow-hidden"
      onClick={(e) => {
        action(productInfoFunc({ product, name }));
      }}
    >
      <img
        src={require(`../../Components/Products/${product.img}`)}
        alt={`img`}
      />
      <div className="content p-3">
        <p className="mb-1">{product.title}</p>
        <p className="description">{product.description}</p>
        <div className="price">
          <span className="me-2">{product.afterSale}</span>
          <span>{product.befourSale ? product.befourSale : ""}</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
