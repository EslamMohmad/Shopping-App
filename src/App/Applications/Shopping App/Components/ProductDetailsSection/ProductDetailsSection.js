import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import useScrollToTop from "./../../Hooks/useScrollToTop";

import {
  productData,
  getProductDetailsFromURLFunc,
} from "../../Store/ProductsSlice";

import ProductImg from "./../../Reuseable Components/ProductDetails/ProductImg";
import ProductDescription from "./../../Reuseable Components/ProductDetails/ProductDescription";

import SwiperContainer from "./../../Reuseable Components/SwiperContainer/SwiperContainer";

import ProductContainer from "../../Reuseable Components/ProductContainer/ProductContainer";

import "./ProductDetailsSection.css";
import ProductInfoSlider from "./ProductInfoSlider";

const ProductDetailsSection = () => {
  const {
    productViewDetailstState,
    bestSellers,
    newArrivals,
    flashSale,
    productInfo: { product },
  } = useSelector(({ ProductsSlice }) => ProductsSlice);

  const action = useDispatch();

  const { id: productID } = useParams();

  const targetDetails = useMemo(() => {
    return (
      [...bestSellers, ...newArrivals, ...flashSale].filter(
        (item) => item.id === +productID
      )[0] || {}
    );
  }, [bestSellers, newArrivals, flashSale, productID]);

  useEffect(() => {
    if (!Object.keys(product).length) {
      action(getProductDetailsFromURLFunc(targetDetails));
    } //set current data
    if (!productViewDetailstState) {
      action(
        productData({
          state: true,
          URL: "/DataBase/Data.json",
        })
      ); //calling API
    }
  }, [action, productViewDetailstState, targetDetails, product]);

  const targetImg = targetDetails || { img: "" };

  useScrollToTop();

  const responsive = {
    300: {
      slidesPerView: 1,
    },
    900: {
      slidesPerView: 2,
    },
    1400: {
      slidesPerView: 3,
    },
  };

  const { brand, category, color } = targetDetails.details || {
    brand: "",
    category: "",
    color: "",
  };

  return (
    <div className="container-fluid px-0 mt-5">
      <div className="d-flex row mx-0 px-0 mb-4 mb-md-5 justify-content-evenly productDetailsSection">
        <div className="col-auto col-xl-5 col-xxl-6 px-0 imgs position-sticky">
          <SwiperContainer
            space={16}
            center={false}
            pagination={{ clickable: true }}
            navigation={false}
            responsive={responsive}
            autoplay={false}
            loop={true}
          >
            <ProductImg targetImg={targetImg} />
            <ProductImg targetImg={targetImg} />
            <ProductImg targetImg={targetImg} />
          </SwiperContainer>
        </div>
        <div className="col-xl-5 col-xxl-4 px-0">
          <ProductDescription targetDetails={targetDetails} />
          <div className="productInformation mb-5">
            <p>
              <span className="fw-bold">SKU : </span>
              <span>N/A</span>
            </p>
            <p>
              <span className="fw-bold">category : </span>
              <span>{category}</span>
            </p>
            <p className="mb-0">
              <span className="fw-bold">tags : </span>
              <span>
                {brand}, {color}
              </span>
            </p>
          </div>
          <ProductInfoSlider />
        </div>
      </div>
      <div className="products row mx-0 px-0">
        <ProductContainer
          payload={bestSellers.slice(0, 5)}
          action={action}
          name={"bestSellers"}
        />
      </div>
    </div>
  );
};

export default ProductDetailsSection;
