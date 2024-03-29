import React from "react";
import ReactDOM from "react-dom";

import { useSelector, useDispatch } from "react-redux";

import OverLaySection from "./OverLaySection/OverLaySection";
import SearchSection from "./SearchSection/SearchSection";
import LoggingSection from "./LoggingSection/LoggingSection";
import MenuSection from "./MenuSection/MenuSection";
import CartSection from "./CartSection/CartSection";
import ProductInfoSection from "./ProductInfoSection/ProductInfoSection";

import "./Modal.css";
import ProductFilter from "./ProductFilter/ProductFilter";

const Modal = () => {
  const state = useSelector((state) => state);

  const dispatch = useDispatch();

  return ReactDOM.createPortal(
    <OverLaySection props={state.ModalSlice} action={dispatch}>
      <CartSection data={state.CartSlice} action={dispatch} />
      <SearchSection
        data={state.SearchSlice}
        action={dispatch}
        sectionState={state.ModalSlice.searchState}
      />
      <LoggingSection
        action={dispatch}
        rememberState={state.ModalSlice.rememberMeState}
        sectionState={state.ModalSlice.loggingState}
        singInState={state.ModalSlice.singInState}
        singUpState={state.ModalSlice.singUpState}
      />
      <ProductInfoSection sectionState={state.ModalSlice.productInfoState} />
      <MenuSection />
      <ProductFilter action={dispatch} />
    </OverLaySection>,
    document.getElementById("modal")
  );
};

export default Modal;
