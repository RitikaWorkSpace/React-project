import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./slices/UserLoginSlice";
// import cartReducer from './slices/cartSlice';
import productSlice from "./slices/productSlice";




export const store = configureStore({
  reducer: {
    user: userReducer,
    // allCart:cartReducer,
    products :productSlice,

    
  },
});

export default store;
