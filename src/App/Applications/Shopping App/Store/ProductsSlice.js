import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { overLayFunc, backToHomeFunc, productInfoFunc } from "./ModalSlice";

import { inputState } from "./SearchSlice";

export const productData = createAsyncThunk(
  "products/productData",
  async (payload, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      return await (
        await fetch(payload.URL, {
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
    flashSale: [],
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
    productsFilterState: [],
    productsFilterSearchState: [],
    localStorageDataState: [],
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
      state.productInfo.product = payload;

      const getTargetObejct = {
        bestSellers: state.bestSellers,
        newArrivals: state.newArrivals,
        flashSale: state.flashSale,
      };

      const detectSectionNameFromURL = Object.keys(getTargetObejct).filter(
        (prop) => getTargetObejct[prop].find((item) => item.id === payload.id)
      )[0];

      state.productInfo.name = detectSectionNameFromURL;
    },
    productCartFunc: (state, { payload }) => {
      const globalData = [
        ...state.bestSellers,
        ...state.newArrivals,
        ...state.flashSale,
      ];
      const determidProduct = globalData.filter(({ id }) => id === payload)[0];
      state.productInfo.amount = 1;
      state.productInfo.color = { colorState: false, result: "" };
      state.productInfo.size = { sizeState: false, result: "" };
      state.addToCartState = false;
      state.productInfo.product = determidProduct;
    },
    getFilterdProducts: (state, { payload }) => {
      const globalProducts = [
        ...state.bestSellers,
        ...state.newArrivals,
        ...state.flashSale,
      ].filter((product) => {
        return (
          payload.category.includes(product.details.category) ||
          payload.brands.includes(product.details.brand) ||
          payload.colors.includes(product.details.color) ||
          payload.prices.includes(product.details.price)
        );
      });
      state.productsFilterState = globalProducts;
    },
    getSearchedProduct: (state, { payload }) => {
      state.productInfo.product = payload.product;
      state.productViewDetailstState = true;
      state.productInfo.color = { colorState: false, result: "" };
      state.productInfo.size = { sizeState: false, result: "" };
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
      state.flashSale = payload.flashSale;
      state.productViewDetailstState = meta.arg.state;
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
      state.productInfo.amount = 1;
      state.productInfo.color = { colorState: false, result: "" };
      state.productInfo.size = { sizeState: false, result: "" };
      state.addToCartState = false;
    },
    [backToHomeFunc]: (state) => {
      state.productInfo.amount = 1;
      state.addToCartState = false;
      state.productInfo.color = { colorState: false, result: "" };
      state.productInfo.size = { sizeState: false, result: "" };
      state.productViewDetailstState = false;
    },

    [inputState]: (state, { payload }) => {
      const filtedProducts = [
        ...state.bestSellers,
        ...state.newArrivals,
        ...state.flashSale,
      ].filter((product) => product.details.category.includes(payload));

      state.productsFilterSearchState = filtedProducts;
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
  productCartFunc,
  getFilterdProducts,
  getSearchedProduct,
} = ProductsSlice.actions;

export default ProductsSlice.reducer;
