import { createSlice } from "@reduxjs/toolkit";

import { overLayFunc } from "./ModalSlice";

const SearchSlice = createSlice({
  name: "search",
  initialState: { inputValue: "" },
  reducers: {
    inputState: (state, { payload }) => {
      state.inputValue = payload;
    },
  },
  extraReducers: {
    [overLayFunc]: (state) => {
      state.inputValue = "";
    },
  },
});

export const { inputState } = SearchSlice.actions;

export default SearchSlice.reducer;
