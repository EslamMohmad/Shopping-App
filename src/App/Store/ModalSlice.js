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
    AsideState: false,
    productInfoState: false,
    homeState: false,
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
      state.AsideState = true;
    },
    cartFunc: (state, _) => {
      state.overLayState = true;
      state.cartState = true;
      state.AsideState = true;
    },
    productInfoFunc: (state) => {
      state.overLayState = true;
      state.productInfoState = true;
    },
    backToHomeFunc: (state) => {
      state.homeState = true;
    },
    scrollToElement: (state, { payload }) => {
      console.log([payload]);
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
  backToHomeFunc,
  scrollToElement,
} = ModalSlice.actions;

export default ModalSlice.reducer;
