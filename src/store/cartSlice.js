import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },

    removeOneItem: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity -= 1;
      }
    },
    removeAllItems: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item.id !== action.payload
      );

      state.cart = removeItem;
    },

    clearCart: (state, action) => {
      return state.cart;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, removeOneItem, removeAllItems, clearCart } =
  cartSlice.actions;
