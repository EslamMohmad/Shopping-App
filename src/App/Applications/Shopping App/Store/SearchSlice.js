import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { overLayFunc } from "./ModalSlice";

export const getSearchResults = createAsyncThunk(
  "search/searchData",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      return await (
        await fetch("/DataBase/Data.json", {
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

const searchSlice = createSlice({
  name: "search",
  initialState: { results: [], inputValue: "" },
  reducers: {
    inputState: (state, { payload }) => {
      state.inputValue = payload;
    },
  },
  extraReducers: {
    [getSearchResults.pending]: (state, { payload }) => {
      //   console.log("wating");
    },
    [getSearchResults.fulfilled]: (state, { payload, meta: { arg } }) => {
      const allProducts = [
        ...payload.bestSellers,
        ...payload.newArrivals,
        ...payload.flashSale,
      ].filter(
        (product) =>
          product.details.category === arg ||
          product.details.color === arg ||
          product.details.brand === arg ||
          product.details.price === arg
      );

      state.results = allProducts;
    },
    [getSearchResults.rejected]: (state, { payload }) => {
      console.log("error");
    },

    [overLayFunc]: (state) => {
      state.inputValue = "";
    },
  },
});

export const { inputState } = searchSlice.actions;

export default searchSlice.reducer;
