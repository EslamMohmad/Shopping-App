import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { productData } from "../../Store/ProductsSlice";

import ProductContainer from "../../Reuseable Components/ProductContainer/ProductContainer";

import banner from "./banner-1.jpg";

const Products = () => {
  const { bestSellers, newArrivals } = useSelector(
    (state) => state.ProductsSlice
  );

  const { homeState } = useSelector(({ ModalSlice }) => ModalSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!homeState) {
      dispatch(productData({ state: false, URL: "DataBase/Data.json" }));
    } // dont excute code when back to home
  }, [dispatch, homeState]);

  return (
    <div className="products border-bottom mb-5">
      <div>
        <h3 className="my-4 fw-bold">best sellers</h3>
        <ProductContainer
          payload={bestSellers}
          action={dispatch}
          name="bestSellers"
        />
      </div>
      <div className="sale-banner rounded overflow-hidden mb-3 mb-xxl-5">
        <img
          src={banner}
          alt="banner"
          width="100%"
          style={{ minHeight: "150px", objectFit: "cover" }}
        />
      </div>

      <div>
        <h3 className="my-4 fw-bold">new arrivals</h3>

        <ProductContainer
          payload={newArrivals}
          action={dispatch}
          name="newArrivals"
        />
      </div>
    </div>
  );
};

export default Products;
