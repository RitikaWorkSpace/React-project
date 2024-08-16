import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./Component/Redux/slices/UserLoginSlice";
import productSlice from "./Component/Redux/slices/productSlice";
import cartReducer from './Component/Redux/slices/cartSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    allCart:cartReducer,
    products : productSlice

    
  },
});

export default store;
