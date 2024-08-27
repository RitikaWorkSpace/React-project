// import { configureStore } from "@reduxjs/toolkit";
// import  userReducer  from "./Component/Redux/slices/UserLoginSlice";
// import productSlice from "./Component/Redux/slices/productSlice";
// import cartReducer from './Component/Redux/slices/cartSlice';
// import likeReducer from './Component/Redux/slices/likeSlice'



// export const store = configureStore({
//   reducer: {
//     user: userReducer,
//     allCart:cartReducer,
//     products : productSlice,
//     likes: likeReducer,
   

    
//   },
// });

// export default store;





import {  applyMiddleware } from 'redux';//2
import createSagaMiddleware from 'redux-saga'; //3
import rootReducer from './Component/NewRedux/rootReducers'; //6
import rootSaga from './Component/Saga/rootSaga'; //7
import Card from './Component/Card/Card'; //8
import { configureStore } from '@reduxjs/toolkit';



const sagaMiddleware = createSagaMiddleware(); //4


const store = configureStore({
    reducer: rootReducer, 
    devtools:true,
    middleware: () => [sagaMiddleware]})
 //5

sagaMiddleware.run(rootSaga);

export default store;
