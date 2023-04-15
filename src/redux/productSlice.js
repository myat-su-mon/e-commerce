import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

// const cartItems = JSON.parse(Cookies.get("cart"));

const initialState = {
  products: [],
  searchTerm: "",
  cart: [],
};
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProducts: (state, { payload }) => {
      state.products = payload;
    },
    searchProduct: (state, { payload }) => {
      state.searchTerm = payload;
    },
    addToCart: (state, { payload }) => {
      Cookies.set(
        "cart",
        JSON.stringify([...state.cart, { ...payload, qty: 1 }])
      );
      state.cart = JSON.parse(Cookies.get("cart"));
    },
    removeFromCart: (state, { payload }) => {
      Cookies.set(
        "cart",
        JSON.stringify(state.cart.filter((item) => item.id !== payload))
      );
      state.cart = JSON.parse(Cookies.get("cart"));
    },
    increaseQty: (state, { payload }) => {
      state.cart = state.cart.map((item) => {
        if (item.id === payload) {
          item.qty += 1;
        }
        return item;
      });
    },
    decreaseQty: (state, { payload }) => {
      state.cart = state.cart.map((item) => {
        if (item.id === payload && item.qty > 1) {
          item.qty -= 1;
        }
        return item;
      });
    },
  },
});

export const {
  addProducts,
  searchProduct,
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
} = productSlice.actions;
export default productSlice.reducer;
