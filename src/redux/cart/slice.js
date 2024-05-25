import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const existingProduct = state.cart.find(
        (item) => item.product_id === action.payload.product_id
      );

      if (existingProduct) {
        state.cart = state.cart.map((item) =>
          item.product_id === action.payload.product_id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return;
      }

      state.cart = [...state.cart, { ...action.payload, quantity: 1 }];
    },
    removeProductCart: (state, action) => {
      state.cart = state.cart.filter(
        (item) => item.product_id !== action.payload
      );
    },
    reduceProduct: (state, action) => {
      state.cart = state.cart
        .map((item) =>
          item.product_id === action.payload.product_id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);
    },
    submitOrder: (state, action) => {
      state.cart = [];
    },
  },
});

export const { addProduct, removeProductCart, reduceProduct, submitOrder } =
  cartSlice.actions;
