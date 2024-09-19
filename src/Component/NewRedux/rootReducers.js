import { combineReducers } from 'redux';
import productReducer from './reducers';
import cartReducer from './cartReducer';
import likeReducer from './likeReducer'



export default combineReducers({
  product: productReducer,
  cart:cartReducer,
  likes:likeReducer,


});