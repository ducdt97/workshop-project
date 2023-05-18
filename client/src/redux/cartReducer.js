import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.number += action.payload.number;
        state.total += action.payload.number * item.price;
      } else {
        state.products.push(action.payload);
        state.total += action.payload.number * action.payload.price;
      }
    },
    removeItem: (state, action) => {
      const removedItem = state.products.find(item => item.id === action.payload);
      if (removedItem) {
        state.products = state.products.filter(item => item.id !== action.payload);
        state.total -= removedItem.number * removedItem.price;
      }
    },    
    resetCart: (state) => {
      state.products = [];
      state.total = 0;
    },
    calculateTotal(state) {
      let total = 0;
      state.products.forEach((item) => {
        total += item.number * item.price;
      });
      state.total = total
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeItem, resetCart, calculateTotal} = cartSlice.actions;

export default cartSlice.reducer;