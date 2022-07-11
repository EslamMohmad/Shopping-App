import React from "react";
import ASide from "../../Reuseable Components/ASide/ASide";
import CloseSection from "../../Reuseable Components/CloseSection/CloseSection";
import Icon from "../../Reuseable Components/Icon/Icon";
import { removeItemFunc } from "../../Store/CartSlice";
import { increaseFunc, decreaseFunc } from "../../Store/CartSlice";
import Cart from "../../Reuseable Components/AddCart/Cart.jpg";

import "./CartSection.css";

const CartSection = ({ data: { products }, action }) => {
  const itemHandler = () =>
    products.map(({ imgsrc, amount, price, title, color, size }, idx) => (
      <div className="product rounded  mb-4 position-relative" key={idx}>
        <div
          className="deleteItem position-absolute pointer"
          onClick={() => action(removeItemFunc({ title, color, size }))}
        >
          <Icon prefix={"fa-solid"} icon={"fa-xmark"} />
        </div>
        <div className="overflow-hidden d-flex">
          <div className="img rounded overflow-hidden me-4">
            <img
              src={require(`../../Components/Products/${imgsrc}`)}
              alt="img"
            />
          </div>
          <div className="content pe-2 pt-2 d-flex flex-column justify-content-between">
            <p className="mb-0">
              <span>{title} - </span>
              <span>
                {color} , {size}
              </span>
            </p>
            <p className="mb-5">unit price : {price}</p>
            <div className="d-flex justify-content-between align-items-center">
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
          <button className="fw-bold">
            procced to checkout
            <span>${totalPriceFunc()}</span>
          </button>
        </div>
      </div>
    </ASide>
  );
};

export default CartSection;
