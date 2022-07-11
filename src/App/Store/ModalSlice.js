import { createSlice } from "@reduxjs/toolkit";

const ModalSlice = createSlice({
  name: "ModalSlice",
  initialState: {
    searchState: false,
    loggingState: false,
    overLayState: false,
    rememberMeState: false,
    menuState: false,
    cartState: false,
    productInfoState: false,
  },

  reducers: {
    searchFunc: (state, _) => {
      state.searchState = true;
      state.overLayState = true;
    },
    overLayFunc: (state, _) => {
      for (let prop in state) {
        if (prop !== "rememberMeState") {
          state[prop] = false;
        }
      }
    },
    loggingFunc: (state, _) => {
      state.overLayState = true;
      state.loggingState = true;
    },
    rememberMeFucn: (state, _) => {
      state.rememberMeState = !state.rememberMeState;
    },
    menuFunc: (state, _) => {
      state.overLayState = true;
      state.menuState = true;
    },
    cartFunc: (state, _) => {
      state.overLayState = true;
      state.cartState = true;
    },
    productInfoFunc: (state) => {
      state.overLayState = true;
      state.productInfoState = true;
    },
  },
});

export const {
  searchFunc,
  overLayFunc,
  loggingFunc,
  rememberMeFucn,
  menuFunc,
  cartFunc,
  productInfoFunc,
} = ModalSlice.actions;

export default ModalSlice.reducer;
