import React, { useState, useEffect } from "react";
import ASide from "../../Reuseable Components/ASide/ASide";
import CloseSection from "../../Reuseable Components/CloseSection/CloseSection";
import Icon from "../../Reuseable Components/Icon/Icon";
import {
  removeItemFunc,
  increaseFunc,
  decreaseFunc,
} from "../../Store/CartSlice";
import { Link } from "react-router-dom";
import Cart from "../../Reuseable Components/AddCart/Cart.jpg";
import { overLayFunc } from "../../Store/ModalSlice";
import { viewDetails, productCartFunc } from "../../Store/ProductsSlice";

import "./CartSection.css";

const CartSection = ({ data: { products }, action }) => {
  const [storage, setStorage] = useState([]);

  const itemHandler = () =>
    products.map(({ id, imgsrc, amount, price, title, color, size }, idx) => (
      <div className="product rounded  mb-4 position-relative" key={idx}>
        <div
          className="deleteItem position-absolute pointer"
          onClick={() => action(removeItemFunc({ title, color, size }))}
        >
          <Icon prefix={"fa-solid"} icon={"fa-xmark"} />
        </div>
        <div className="overflow-hidden d-flex">
          <Link to={`/Shopping-App/products/product/${id}`}>
            <div
              className="img rounded overflow-hidden me-4"
              onClick={() => {
                action(overLayFunc());
                action(viewDetails());
                action(productCartFunc(id));
              }}
            >
              <img
                src={require(`../../Components/Products/${imgsrc}`)}
                alt="img"
              />
            </div>
          </Link>
          <div className="content d-flex flex-column justify-content-between">
            <p className="mb-0">
              <span>{title} - </span>
              <span>
                {color} , {size}
              </span>
            </p>
            <p className="mb-3">unit price : {price}</p>
            <div className="d-flex bot justify-content-between align-items-center">
              <div className="count d-flex">
                <button
                  className="decrease w-25"
                  onClick={() => action(decreaseFunc(idx))}
                >
                  -
                </button>
                <p className="amount w-50 mb-0">{amount}</p>
                <button
                  className="increase w-25"
                  onClick={() => action(increaseFunc(idx))}
                >
                  +
                </button>
              </div>
              <p className="mb-0 fw-bolder">
                {`$${parseFloat(price.slice(1, price.length) * amount).toFixed(
                  2
                )}`}
              </p>
            </div>
          </div>
        </div>
      </div>
    ));

  const totalPriceFunc = () => {
    const initialValue = 0;
    const result = products.map((e) =>
      parseFloat(e.price.slice(1, e.price.length) * e.amount).toFixed(2)
    );
    return result
      .reduce((prev, curr) => parseFloat(prev) + parseFloat(curr), initialValue)
      .toFixed(2);
  };

  //;

  useEffect(() => {
    if (localStorage.hasOwnProperty("AllProducts")) {
      localStorage.setItem("AllProducts", JSON.stringify(products));
    } else {
      localStorage.setItem("AllProducts", "[]");
    }

    setStorage((prev) => [
      ...prev,
      ...JSON.parse(localStorage.getItem("AllProducts")),
    ]);
    // if (localStorage.length > 1) {
    //   setStorage((prev) => [
    //     ...prev,
    //     ...JSON.parse(localStorage.getItem("AllProducts")),
    //   ]);
    //   localStorage.setItem("AllProducts", JSON.stringify(storage));
    //   // JSON.parse(localStorage.getItem("AllProducts")).push([...storage]);
    // } else {
    //   localStorage.setItem("AllProducts", JSON.stringify(products));
    // }
  }, [products]);

  return (
    <ASide cls="aside cartSection">
      <div className="logo border-bottom p-4 d-flex justify-content-between align-items-center">
        <h1 className="fs-3 fw-bold">Shopping cart</h1>
        <span className="close fs-50">
          <CloseSection />
        </span>
      </div>
      <div className="parent d-flex justify-content-between flex-column">
        {products.length < 1 ? (
          <div className="img">
            <img src={Cart} width={"100%"} alt="img" />
            <p className="p-0 text-center fw-bold">Your cart is empty.</p>
          </div>
        ) : (
          <div className="products">{itemHandler()}</div>
        )}
        <div className={`cartBtn ${products.length ? "active" : ""}`}>
          <Link to="/Shopping-App/checkout">
            <button
              className="fw-bold"
              disabled={!products.length}
              style={{ cursor: !products.length ? "not-allowed" : "pointer" }}
              onClick={() => action(overLayFunc())}
            >
              procced to checkout
              <span>${totalPriceFunc()}</span>
            </button>
          </Link>
        </div>
      </div>
    </ASide>
  );
};

export default CartSection;
