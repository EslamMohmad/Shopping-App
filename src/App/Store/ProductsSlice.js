import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { productInfoFunc, overLayFunc } from "./ModalSlice";

export const productData = createAsyncThunk(
  "products/productData",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      return await (
        await fetch("DataBase/Data.json", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
      ).json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const ProductsSlice = createSlice({
  name: "products",
  initialState: {
    bestSellers: [],
    newArrivals: [],
    sectionState: false,
    productInfo: {
      product: {},
      name: "",
      amount: 1,
      color: { colorState: false, result: "" },
      size: { sizeState: false, result: "" },
    },
    addToCartState: false,
    loadingState: false,
  },
  reducers: {
    increase: (state) => {
      state.productInfo.amount += 1;
    },
    decrease: (state) => {
      state.productInfo.amount > 1 && (state.productInfo.amount -= 1);
    },
    currentColor: (state, { payload }) => {
      state.productInfo.color.result = payload;
      state.productInfo.color.colorState = true;
    },

    currentSize: (state, { payload }) => {
      state.productInfo.size.result = payload;
      state.productInfo.size.sizeState = true;
    },
    addToCart: (state, { payload }) => {
      state.loadingState = payload;
    },
    watingProcces: (state, { payload }) => {
      state.addToCartState = payload;
      state.loadingState = false;
    },
  },
  extraReducers: {
    //calling local api
    [productData.pending]: (state, action) => {
      // console.log("wating.....");
    },
    [productData.fulfilled]: (state, { payload }) => {
      state.bestSellers = payload.bestSellers;
      state.newArrivals = payload.newArrivals;
    },
    [productData.rejected]: (state, action) => {
      console.log("bad connection!");
    },

    //excute outer reducer
    [productInfoFunc]: (state, { payload: { product, name } }) => {
      state.productInfo.product = product;
      state.productInfo.name = name;
    },
    [overLayFunc]: (state) => {
      state.productInfo = {
        product: {},
        name: "",
        amount: 1,
        color: { colorState: false, result: "" },
        size: { sizeState: false, result: "" },
      };
      state.addToCartState = false;
    },
  },
});

export const {
  increase,
  decrease,
  currentColor,
  currentSize,
  addToCart,
  watingProcces,
} = ProductsSlice.actions;

export default ProductsSlice.reducer;
