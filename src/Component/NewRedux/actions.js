import { FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FAILURE, GET_PRODUCT_DATA } from './actionTypes';

export const fetchProductRequest = () => ({
  type: FETCH_PRODUCT_REQUEST,
});

export const fetchProductSuccess = (data) => ({
  type: FETCH_PRODUCT_SUCCESS,
  payload: data,
});

export const fetchProductFailure = (error) => ({
  type: FETCH_PRODUCT_FAILURE,
  payload: error,
});

export const getProductData = () => ({
  type: GET_PRODUCT_DATA,
});

// ============================================================================================

// Define action types
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const INCREMENT_ITEM = "INCREMENT_ITEM";
export const DECREMENT_ITEM = "DECREMENT_ITEM";

// Define action creators
export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});

export const incrementItem = (id) => ({
  type: INCREMENT_ITEM,
  payload: id,
});

export const decrementItem = (id) => ({
  type: DECREMENT_ITEM,
  payload: id,
});
