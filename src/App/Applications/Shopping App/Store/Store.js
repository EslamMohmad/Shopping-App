import { configureStore } from "@reduxjs/toolkit";

import ModalSlice from "./ModalSlice";
import ProductsSlice from "./ProductsSlice";
import cartSlice from "./CartSlice";
import SearchSlice from "./SearchSlice";
import LoggingSlice from "./LoggingSlice";

export default configureStore({
  reducer: { ModalSlice, ProductsSlice, cartSlice, SearchSlice, LoggingSlice },
});
