import React from "react";

import { useDispatch, useSelector } from "react-redux";
import Icon from "../../Reuseable Components/Icon/Icon";
import { cartFunc } from "../../Store/ModalSlice";

import style from "./Cart.module.css";

const AddCart = () => {
  const { products } = useSelector((state) => state.cartSlice);

  const dispatch = useDispatch();

  return (
    <div
      className={`${style.addCart} position-relative fs-5`}
      style={{ cursor: "pointer" }}
      onClick={() => dispatch(cartFunc())}
    >
      <Icon prefix={"fa-solid"} icon={"fa-bag-shopping"} />
      <span>{products.length}</span>
    </div>
  );
};

export default AddCart;
