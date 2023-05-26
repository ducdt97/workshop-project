// productSlice.js
import { createSlice } from '@reduxjs/toolkit';

const Slice = createSlice({
    name: 'product',
    initialState: {
        selectedProduct: null,
    },
    reducers: {
        setSelectedProduct: (state, action) => {
            state.selectedProduct = action.payload;
        },
    },
});
const registerSlice = createSlice({
    name: 'register',
    initialState: {
        selectedRegister: null,
    },
    reducers: {
        setSelectedRegister: (state, action) => {
            state.selectedRegister = action.payload;
        },
    },
});

export const { setSelectedProduct } = Slice.actions;
export const { setSelectedRegister } = registerSlice.actions;

export const productReducer = Slice.reducer;
export const registerReducer = registerSlice.reducer;