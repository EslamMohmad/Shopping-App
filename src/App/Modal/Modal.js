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

const Modal = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return ReactDOM.createPortal(
    <OverLaySection props={state.ModalSlice} action={dispatch}>
      <SearchSection
        data={state.SearchSlice}
        action={dispatch}
        sectionState={state.ModalSlice.searchState}
      />
      <LoggingSection
        action={dispatch}
        logState={state.ModalSlice.rememberMeState}
        sectionState={state.ModalSlice.loggingState}
      />
      <MenuSection />
      <CartSection data={state.cartSlice} action={dispatch} />
      <ProductInfoSection
        data={state.ProductsSlice}
        action={dispatch}
        sectionState={state.ModalSlice.productInfoState}
        overLayState={state.ModalSlice.overLayState}
      />
    </OverLaySection>,
    document.getElementById("modal")
  );
};

export default Modal;
