import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: { products: [] },
  reducers: {
    addItemFunc: (state, { payload }) => {
      const item = {
        id: payload.product.id,
        title: payload.product.title,
        imgsrc: payload.product.img,
        price: payload.product.afterSale,
        amount: payload.amount,
        section: payload.name,
        color: payload.color.result,
        size: payload.size.result,
      };
      const index = state.products.findIndex(
        (e) =>
          e.color === item.color &&
          e.size === item.size &&
          e.title === item.title
      );
      if (index !== -1) {
        state.products[index].amount += item.amount;
      } else {
        state.products.push(item);
      }
    },
    removeItemFunc: (state, { payload }) => {
      const result = state.products.filter(
        (e) =>
          e.title !== payload.title ||
          e.color !== payload.color ||
          e.size !== payload.size
      );
      state.products = result;
    },
    increaseFunc: (state, { payload }) => {
      state.products[payload].amount += 1;
    },
    decreaseFunc: (state, { payload }) => {
      state.products[payload].amount > 1 &&
        (state.products[payload].amount -= 1);
    },
  },
});

export const { addItemFunc, removeItemFunc, increaseFunc, decreaseFunc } =
  CartSlice.actions;

export default CartSlice.reducer;
