import { configureStore } from "@reduxjs/toolkit";

import ModalSlice from "./ModalSlice";
import ProductsSlice from "./ProductsSlice";
import cartSlice from "./CartSlice";
import SearchSlice from "./SearchSlice";

export default configureStore({
  reducer: { ModalSlice, ProductsSlice, cartSlice, SearchSlice },
});
