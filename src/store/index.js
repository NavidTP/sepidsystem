
import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from '../reducers/ProductSlice'

export const store = configureStore({
    reducer: {
        products: ProductReducer
    },
});