import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  product: [],
  status: "ideal",
};
const ProductSlice = createSlice({
  name: "Product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.product = action.payload;
      state.status = "success..";
    }),
      builder.addCase(fetchProduct.pending, (state, action) => {
        state.status = "loading..";
      });
  },
});

export const fetchProduct = createAsyncThunk(
  "product/fetchProdcut",
  async () => {
    // const res = await axios.get("https://api.escuelajs.co/api/v1/products")
    const res = await axios.get("https://fakestoreapi.com/products");
    return res?.data;
  }
);

export default ProductSlice.reducer;
