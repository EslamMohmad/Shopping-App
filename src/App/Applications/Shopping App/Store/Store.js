import { configureStore } from "@reduxjs/toolkit";

import ModalSlice from "./ModalSlice";
import ProductsSlice from "./ProductsSlice";
import CartSlice from "./CartSlice";
import SearchSlice from "./SearchSlice";
import LoggingSlice from "./LoggingSlice";

export default configureStore({
  reducer: { ModalSlice, ProductsSlice, CartSlice, SearchSlice, LoggingSlice },
});
