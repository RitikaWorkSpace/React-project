import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./Component/Redux/slices/UserLoginSlice";
import productSlice from "./Component/Redux/slices/productSlice";
import cartReducer from './Component/Redux/slices/cartSlice';
import likeReducer from './Component/Redux/slices/likeSlice'



export const store = configureStore({
  reducer: {
    user: userReducer,
    allCart:cartReducer,
    products : productSlice,
    likes: likeReducer,
   

    
  },
});

export default store;
