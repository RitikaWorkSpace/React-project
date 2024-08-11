import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./slices/UserLoginSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
