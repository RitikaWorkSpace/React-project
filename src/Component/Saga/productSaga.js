// src/sagas/postSaga.js
import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_PRODUCT_DATA, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FAILURE,FETCH_PRODUCT_REQUEST } from '../NewRedux/actionTypes';


async function fetchPostData(){
  const data = await  fetch ('https://fakestoreapi.com/products')
  const res = await data.json()
  return res
}


// worker with video
function* fetchProducts(){
  try{
    yield put({type:FETCH_PRODUCT_REQUEST});
    const response = yield call(fetchPostData);
    yield put({type:FETCH_PRODUCT_SUCCESS,payload :response});
  }catch(error){
yield put ({type:FETCH_PRODUCT_FAILURE,payload :error.message})
  }
  }

  // watcher
export function* watchGetProduct() {
  yield takeLatest(GET_PRODUCT_DATA, fetchProducts);
}
