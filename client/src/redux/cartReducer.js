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
      const { id, number, img } = action.payload;
      const item = state.products.find((item) => item.id === id && item.img === img);
      
      if (item) {
        if (item.number === number) {
          toast.warning("Product is already in the cart!");
        } else {
          item.number += number;
          state.total += number * item.price;
          toast.info("Cart has been updated");
        }
      } else {
        state.products.push(action.payload);
        state.total += number * action.payload.price;
        toast.success("You have just added a product to the cart");
      }
    },
    
    removeItem: (state, action) => {
      const { id, img } = action.payload;
      const removedItemIndex = state.products.findIndex(
        (item) => item.id === id && item.img === img
      );
      
      if (removedItemIndex !== -1) {
        const removedItem = state.products[removedItemIndex];
        state.products.splice(removedItemIndex, 1);
        state.total -= removedItem.number * removedItem.price;
        toast.success("Remove success");
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
