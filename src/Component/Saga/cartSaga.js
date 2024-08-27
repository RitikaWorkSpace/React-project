import { takeEvery, put, call } from 'redux-saga/effects';
import { ADD_TO_CART } from '../NewRedux/actions';

function* addToCartSaga(action) {
  // If you need to handle asynchronous operations (e.g., API calls), do it here
  yield put({ type: ADD_TO_CART, payload: action.payload });
}

export function* watchCartActions() {
  yield takeEvery(ADD_TO_CART, addToCartSaga);
}


