import { createSlice } from "@reduxjs/toolkit";
import { singInFunc, singUpFunc } from "./ModalSlice";

const LoggingSlice = createSlice({
  name: "logging",
  initialState: {
    SIGNIN: {
      formValidState: false,
      name: "eslam",
      age: 24,
      email: "eslammohmad998@gmail.com",
      password: "123456789",
      img: "./adminImg.jpg",
    },
    SIGNUP: {
      formValidState: false,
      name: "",
      age: 0,
      email: "",
      password: "",
      img: "./userImg.png",
    },
    currentFormState: false,
  },
  reducers: {
    getSignInData: (state, { payload }) => {
      if (
        state.SIGNIN.email === payload["signIn-email"] &&
        state.SIGNIN.password === payload["signIn-password"]
      ) {
        state.SIGNIN.formValidState = true;
        state.SIGNUP.formValidState = false;
        state.currentFormState = true;
      } else {
        state.SIGNUP.formValidState = true;
        state.SIGNIN.formValidState = false;
        state.currentFormState = false;
      }
    },
    getSignUpData: (state, { payload }) => {
      state.currentFormState = true;
      state.SIGNUP.formValidState = true;
      state.SIGNUP.name = payload["signUp-name"];
      state.SIGNUP.age = payload["signUp-age"];
      state.SIGNUP.email = payload["signUp-email"];
      state.SIGNUP.password = payload["signUp-password"];
    },
  },
  extraReducers: {
    [singInFunc]: (state) => {
      state.SIGNIN.formValidState = true;
      state.SIGNUP.formValidState = false;
    },
    [singUpFunc]: (state) => {
      state.SIGNUP.formValidState = true;
      state.SIGNIN.formValidState = false;
    },
  },
});

export const { getSignInData, getSignUpData } = LoggingSlice.actions;

export default LoggingSlice.reducer;
