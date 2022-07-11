import React from "react";
import { addItemFunc } from "../../Store/CartSlice";
import { cartFunc, overLayFunc } from "../../Store/ModalSlice";
import {
  currentColor,
  currentSize,
  increase,
  decrease,
  addToCart,
  watingProcces,
} from "../../Store/ProductsSlice";
import CloseSection from "./../../Reuseable Components/CloseSection/CloseSection";

import "./ProductInfoSection.css";

const ProductInfoSection = ({ data, action, sectionState, overLayState }) => {
  const {
    productInfo: { product, amount, color, size, name },
    addToCartState,
    loadingState,
  } = data;

  const { img, title, description, befourSale, afterSale } = product;

  const productColorHandler = () => {
    const colorsObj = {
      orange: "#e86c25",
      pink: "#ffa5b4",
      violet: "#8224e3",
      red: "#dd3333",
    };
    return Object.keys(colorsObj).map((color, idx) => (
      <li key={idx} className={overLayState ? null : ""}>
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
        className={overLayState ? null : ""}
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
    } else return "btn btn-secondary";
  };

  const addToCartWaitingFunc = () => {
    const timer = setTimeout(() => {
      action(addItemFunc({ product, amount, color, size, name }));
      action(watingProcces(true));
    }, 1000);

    return () => clearTimeout(timer);
  };

  return (
    <div
      className={`productInfoSection bg-white rounded-3 position-relative ${
        sectionState ? "d-flex" : "d-none"
      }`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="closeIcon position-absolute">
        <CloseSection />
      </div>
      <div className="img w-50 h-auto ">
        {img && (
          <img
            src={require(`../../Components/Products/${img}`)}
            alt="img"
            width="100%"
            height="100%"
          />
        )}
      </div>
      <div className="productInfo px-4 py-4 w-50 d-flex flex-column">
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
            <button
              className="decrease w-25"
              onClick={() => action(decrease())}
            >
              -
            </button>
            <p className="amount w-50 mb-0">{amount}</p>
            <button
              className="increase w-25"
              onClick={() => action(increase())}
            >
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
                className={`loading ms-2 ${
                  loadingState ? "d-black" : "d-none"
                }`}
              ></div>
            </button>
          </div>
        </div>
        {addToCartState && (
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
        <div className="productDetails">
          <button type="button" className="btn btn-dark w-100 py-2">
            view details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfoSection;
