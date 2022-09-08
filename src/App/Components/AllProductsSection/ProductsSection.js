import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productFilterFunc } from "../../Store/ModalSlice";

import ProductContainer from "./../../Reuseable Components/ProductContainer/ProductContainer";
import { productData } from "./../../Store/ProductsSlice";
import FiltersButton from "./FiltersButton";
import ProductsOptions from "./ProductsOptions";

const ProductsSection = () => {
  const {
    ProductsSlice: { bestSellers, newArrivals },
    ModalSlice: { homeState },
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!homeState) {
      dispatch(productData({ state: false, URL: "DataBase/Data.json" }));
    }
  }, [dispatch, homeState]);

  return (
    <div className="productsSection">
      <div className="mb-4 d-flex justify-content-between align-items-center">
        <h3 className="mb-0 d-none d-lg-block">Casual Wear</h3>
        <div
          className="d-block d-lg-none"
          onClick={() => dispatch(productFilterFunc())}
        >
          <FiltersButton />
        </div>
        <div>
          <span className="d-none d-sm-inline-block">9.603 items</span>
          <ProductsOptions />
        </div>
      </div>
      <ProductContainer
        payload={[...bestSellers, ...newArrivals]}
        action={dispatch}
        name="casual Wear"
      />
    </div>
  );
};

export default ProductsSection;
