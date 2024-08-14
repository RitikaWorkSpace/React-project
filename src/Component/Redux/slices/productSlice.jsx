import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const initialState ={
  product:[],
  status:"ideal"
  };

//   console.log(product);

const productSlice = createSlice({
    name : "Product",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(
            fetchProduct.fulfilled,(state,action)=>{
                state.product = action.payload
                state.status = "success"
            }),
            builder.addCase(
                fetchProduct.pending,(state,action)=>{
                    state.status = "loading"
                })



    }
})

export const fetchProduct = createAsyncThunk("product/fetchProduct",async()=>{
     const response = await axios.get("https://fakestoreapi.com/products")
   console.log(response.data);
})

export default productSlice.reducer;
 