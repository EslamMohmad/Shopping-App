import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { productData } from "../../Store/ProductsSlice";

import ProductContainer from "../../Reuseable Components/ProductContainer/ProductContainer";

import banner from "./banner-1.jpg";

const Products = () => {
  const { bestSellers, newArrivals } = useSelector(
    (state) => state.ProductsSlice
  );

  const dispatch = useDispatch();

  return (
    <div className="products border-bottom mb-5">
      <ProductContainer
        payload={bestSellers}
        thunkFunc={productData}
        action={dispatch}
        name="bestSellers"
      />
      <div className="sale-banner rounded overflow-hidden mb-3 mb-xxl-5">
        <img
          src={banner}
          alt="banner"
          width="100%"
          style={{ minHeight: "150px", objectFit: "cover" }}
        />
      </div>
      <ProductContainer
        payload={newArrivals}
        thunkFunc={productData}
        action={dispatch}
        name="newArrivals"
      />
    </div>
  );
};

export default Products;
