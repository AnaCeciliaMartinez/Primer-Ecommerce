import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },

    removeOneItem: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity -= 1;
      }
    },
    removeAllItems: (state, action) => {
      const removeItem = state.filter(
        (item) => item.id !== action.payload
      );

        return removeItem;
    },

    clearCart: (state, action) => {
      return state.cart;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, removeOneItem, removeAllItems, clearCart } =
  cartSlice.actions;