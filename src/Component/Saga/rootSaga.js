// src/sagas/rootSaga.js
import { all } from 'redux-saga/effects';
import { watchGetProduct} from './productSaga';






export default function* rootSaga() {
  yield all([
    watchGetProduct(),
  ]);
}
