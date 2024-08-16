// import  { createSlice } from "@reduxjs/toolkit";

// const initialState ={
//   cart:[],
//   items:products,
//   totalQuantity:0,
//   totalPrice:0,
// };

// export const cartSlice = createSlice({
//     name: 'cart',
//     initialState,
//       reducers:{

//       }
//    } );

//    export default cartSlice.reducer;

// ============================================================

import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalAmount: 0,
  cartTotalQuantity: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // state.cartItems.push(action.payload);

      const itemIndex = { ...action.payload, cartQuantity: 1 };
      const abc = state.cartItems.find((item) => item.id === itemIndex.id);
      if (!abc) {
        state.cartItems.push(itemIndex);
      } else {
        abc.cartQuantity += 1;
      }

      // if(itemIndex >= 0){
      //     state.cartItems[itemIndex].cartQuantity += 1;
      //     toast.info(` increase ${state.cartItems[itemIndex].title} product quantity`,{
      //         position:"bottom-left"
      //     })
      // }
      // else{
      //     const tempProduct = {...action.payload, cartQuantity:1};
      //     state.cartItems.push(tempProduct);
      //     toast.success(`${action.payload.title} added a new product to cart`,{
      //         position:"bottom-left"
      //     })
      // };
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    increment: (state, action) => {
      const abc = state.cartItems.find((item) => item.id === action.payload);
      if (abc) {
        abc.cartQuantity += 1;
      }
    },
    decrement: (state, action) => {
      const abc = state.cartItems.find((item) => item.id === action.payload);
      if (abc && abc.cartQuantity > 0) {
        abc.cartQuantity -= 1;
      }
    },

    remove: (state, action) => {
   state.cartItems = state.cartItems.filter((item)=>item.id !== action.payload);

      },

  },
});

export const { addToCart,increment,decrement,remove } = cartSlice.actions;


export default cartSlice.reducer;
