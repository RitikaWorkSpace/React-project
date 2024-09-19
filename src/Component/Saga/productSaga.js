// import { call, put, takeLatest } from "redux-saga/effects";
// import {
//   GET_PRODUCT_DATA,
//   FETCH_PRODUCT_SUCCESS,
//   FETCH_PRODUCT_FAILURE,
//   FETCH_PRODUCT_REQUEST,
//   FETCH_MATCH_PRODUCT_SUCCESS,
//   FETCH_MATCH_PRODUCT_FAILURE,
//   FETCH_MATCH_PRODUCT_REQUEST,
// } from "../NewRedux/actionTypes";

// async function fetchProductData() {
//   const data = await fetch("https://fakestoreapi.com/products");
//   const res = await data.json();
//   console.log("Product details fetched:", res);
//   return res;
// }

// // worker
// function* fetchProducts() {
//   try {
//     yield put({ type: FETCH_PRODUCT_REQUEST });
//     const response = yield call(fetchProductData);
//     yield put({ type: FETCH_PRODUCT_SUCCESS, payload: response });
//   } catch (error) {
//     yield put({ type: FETCH_PRODUCT_FAILURE, payload: error.message });
//   }
// }

// // Saga to fetch matching products based on category
// // function* fetchMatchProductSaga(action) {
// //  console.log(action)
// //   try {

// //     const response = yield call(axios.get, `https://fakestoreapi.com/products`);
// //     const filteredProduct = response.data.filter(
// //       (item) => item.id === action.payload
// //     );
// //     if (filteredProduct.length > 0) {
// //       const product = filteredProduct[0]; // Get the first matched product

// //       // Fetch related products based on the matched product's category
// //       const relatedProductsResponse = yield call(axios.get, `https://fakestoreapi.com/products`);
// //       const matchedProducts = relatedProductsResponse.data.filter(
// //         (item) => item.category === product.category && item.id !== product.id // Exclude the matched product itself
// //       );

// //       // Dispatch success actions for both the matched product and related products
// //       yield put({ type: FETCH_MATCH_PRODUCT_SUCCESS, payload: { product, matchedProducts } });
// //     } else {
// //       // If no product is found with the given id, dispatch failure
// //       yield put({ type: FETCH_MATCH_PRODUCT_FAILURE, payload: "Product not found" });
// //     }
// //   } catch (error) {
// //     yield put({ type: FETCH_MATCH_PRODUCT_FAILURE, payload: error.message });
// //   }
// // }

// // watcher
// export function* watchGetProduct() {
//   yield takeLatest(GET_PRODUCT_DATA, fetchProducts);
// }

// // export function* watchFetchMatchProduct() {
// //   yield takeLatest(FETCH_MATCH_PRODUCT_REQUEST, fetchMatchProductSaga);
// // }




import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_PRODUCT_DATA,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
  FETCH_PRODUCT_REQUEST,
} from "../NewRedux/actionTypes";

async function fetchProductData() {
  const data = await fetch("https://fakestoreapi.com/products");
  const res = await data.json();
  console.log("Product details fetched:", res);
  return res;
}

// worker
function* fetchProducts() {
  try {
    yield put({ type: FETCH_PRODUCT_REQUEST });
    const response = yield call(fetchProductData);
    yield put({ type: FETCH_PRODUCT_SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: FETCH_PRODUCT_FAILURE, payload: error.message });
  }
}



// watcher
export function* watchGetProduct() {
  yield takeLatest(GET_PRODUCT_DATA, fetchProducts);
}


