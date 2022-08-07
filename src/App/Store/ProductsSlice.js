import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { overLayFunc, backToHomeFunc, productInfoFunc } from "./ModalSlice";

export const productData = createAsyncThunk(
  "products/productData",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      return await (
        await fetch("../../DataBase/Data.json", {
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
    productInfo: {
      product: {},
      name: "",
      amount: 1,
      color: { colorState: false, result: "" },
      size: { sizeState: false, result: "" },
    },
    addToCartState: false,
    loadingState: false,
    productViewDetailstState: false,
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
    viewDetails: (state) => {
      state.productViewDetailstState = true;
    },
    getProductDetailsFromURLFunc: (state, { payload }) => {
      state.productInfo.product = payload.targetDetails;
      console.log(state.productInfo.product);
    },
  },
  extraReducers: {
    //calling local api
    [productData.pending]: (state, action) => {
      // console.log("wating.....");
    },
    [productData.fulfilled]: (state, { payload, meta }) => {
      state.bestSellers = payload.bestSellers;
      state.newArrivals = payload.newArrivals;
      state.productViewDetailstState = meta.arg;
    },
    [productData.rejected]: (state, action) => {
      console.error("bad connection!");
    },

    //excute outer reducer
    [productInfoFunc]: (state, { payload: { product, name } }) => {
      state.productInfo.product = product;
      state.productInfo.name = name;
    },
    [overLayFunc]: (state) => {
      if (!state.productViewDetailstState) {
        state.productInfo.amount = 1;
        state.productInfo.color = { colorState: false, result: "" };
        state.productInfo.size = { sizeState: false, result: "" };
        state.addToCartState = false;
      }
    },
    [backToHomeFunc]: (state) => {
      state.productInfo.amount = 1;
      state.addToCartState = false;
      state.productInfo.color = { colorState: false, result: "" };
      state.productInfo.size = { sizeState: false, result: "" };
      state.productViewDetailstState = false;
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
  viewDetails,
  getProductDetailsFromURLFunc,
} = ProductsSlice.actions;

export default ProductsSlice.reducer;
