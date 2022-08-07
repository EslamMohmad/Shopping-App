import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { addItemFunc } from "../../Store/CartSlice";
import { cartFunc, overLayFunc } from "../../Store/ModalSlice";
import {
  currentColor,
  currentSize,
  increase,
  decrease,
  addToCart,
  watingProcces,
  viewDetails,
} from "../../Store/ProductsSlice";

import "./ProductDetails.css";

const ProductDescription = ({ targetDetails }) => {
  //destructuring from ProductsSlice
  const {
    productInfo: { product, amount, color, size, name },
    addToCartState,
    loadingState,
    productViewDetailstState,
  } = useSelector(({ ProductsSlice }) => ProductsSlice);

  //destructuring from ModalSlice
  const { productInfoState, cartState } = useSelector(
    ({ ModalSlice }) => ModalSlice
  );

  const { id, title, description, befourSale, afterSale } = product;

  const action = useDispatch();

  const productColorHandler = () => {
    const colorsObj = {
      orange: "#e86c25",
      pink: "#ffa5b4",
      violet: "#8224e3",
      red: "#dd3333",
    };

    return Object.keys(colorsObj).map((color, idx) => (
      <li key={idx} className={productInfoState ? null : ""}>
        <span
          style={{ backgroundColor: colorsObj[color] }}
          onClick={(e) => {
            [...e.target.parentElement.parentElement.children].forEach(
              (ele) => (ele.className = "")
            );
            e.target.parentElement.className = "active";
            action(currentColor(color));
          }}
        ></span>
      </li>
    ));
  };

  const productSizeHandler = () => {
    const sizes = {
      small: "S",
      medium: "M",
      large: "L",
      xLarge: "XL",
    };
    return Object.keys(sizes).map((size, idx) => (
      <li
        className={productInfoState ? null : ""}
        key={idx}
        onClick={(e) => {
          [...e.target.parentElement.children].forEach((ele) =>
            ele.classList.remove("active")
          );
          e.target.classList.add("active");
          action(currentSize(size));
        }}
      >
        {sizes[size]}
      </li>
    ));
  };

  const addToCartClassHandler = () => {
    if (color.colorState && size.sizeState) {
      return "active btn btn-dark";
    }
    return "btn btn-secondary";
  };

  const addToCartWaitingFunc = () => {
    const timer = setTimeout(() => {
      action(addItemFunc({ product, amount, color, size, name }));
      action(watingProcces(true));
    }, 1000);

    return () => clearTimeout(timer);
  };

  return (
    <div className="productDetails">
      <h4 className="mb-3">{title}</h4>
      <p className="description">{description}</p>
      <div className="price mb-4">
        <span>{afterSale}</span>
        <span>{befourSale}</span>
      </div>
      <div className="size mb-4">
        <p>size</p>
        <ul className="list-unstyled mb-0">{productSizeHandler()}</ul>
      </div>
      <div className="color mb-4">
        <p>color</p>
        <ul className="list-unstyled mb-0">{productColorHandler()}</ul>
      </div>
      <div className="d-flex productCount gap-3 mb-3 mb-md-4 ">
        <div className="count w-50 d-flex">
          <button className="decrease w-25" onClick={() => action(decrease())}>
            -
          </button>
          <p className="amount w-50 mb-0">{amount}</p>
          <button className="increase w-25" onClick={() => action(increase())}>
            +
          </button>
        </div>
        <div className="addToCart w-50">
          <button
            className={`${addToCartClassHandler()} w-100 py-2 d-flex justify-content-center align-items-center`}
            onClick={() => {
              if (color.colorState && size.sizeState) {
                action(addToCart(true));
                addToCartWaitingFunc();
              }
            }}
          >
            <span> add to cart</span>
            <div
              className={`loading ms-2 ${loadingState ? "d-black" : "d-none"}`}
            ></div>
          </button>
        </div>
      </div>
      {addToCartState && !cartState && (
        <button
          className={`view-cart btn btn-light w-100 py-2 border mb-4`}
          onClick={() => {
            action(overLayFunc());
            action(cartFunc());
          }}
        >
          view cart
        </button>
      )}
      {(productInfoState || !productViewDetailstState) && (
        <div className="productDetails">
          <Link to={`/Shopping-App/productDetails/product/${id}`}>
            <button
              type="button"
              className="btn btn-dark w-100 py-2"
              onClick={() => {
                action(overLayFunc());
                action(viewDetails());
              }}
            >
              view details
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProductDescription;
