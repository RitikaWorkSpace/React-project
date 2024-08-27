import { FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FAILURE } from './actionTypes';

const initialState = {
  isLoading: false,
  productData: [],
  error: null,
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCT_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_PRODUCT_SUCCESS:
      return { ...state, isLoading: false, productData: action.payload };
    case FETCH_PRODUCT_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
}