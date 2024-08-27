// src/redux/rootReducer.js
import { combineReducers } from 'redux';
import productReducer from './reducers';
import cartReducer from './cartReducer';

export default combineReducers({
  product: productReducer,
  cart:cartReducer,
});