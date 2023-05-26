import { configureStore } from '@reduxjs/toolkit';
import { productReducer, registerReducer } from '../redux/Slicer';


const store = configureStore({
    reducer: {
        product: productReducer,
        register: registerReducer,
    },
});

export default store;