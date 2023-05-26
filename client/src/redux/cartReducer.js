import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

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
        if (item.number === action.payload.number) {
          toast.warning("products already in the cart!");
        } else {
          item.number += action.payload.number;
          state.total += action.payload.number * item.price;
          toast.info("cart has been updated");
        }
      } else {
        state.products.push(action.payload);
        state.total += action.payload.number * action.payload.price;
        toast.success("you have just added a product to cart");
      }
    },
    removeItem: (state, action) => {
      const removedItem = state.products.find(
        (item) => item.id === action.payload
      );
      if (removedItem) {
        state.products = state.products.filter(
          (item) => item.id !== action.payload
        );
        state.total -= removedItem.number * removedItem.price;
        toast.success("remove success")
      }
    },
    resetCart: (state) => {
      state.products = [];
      state.total = 0;
      toast.info("cart is empty")
    },
    calculateTotal(state) {
      let total = 0;
      state.products.forEach((item) => {
        total += item.number * item.price;
      });
      state.total = total;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeItem, resetCart, calculateTotal } =
  cartSlice.actions;

export default cartSlice.reducer;
