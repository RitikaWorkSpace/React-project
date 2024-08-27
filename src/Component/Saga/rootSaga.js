// src/sagas/rootSaga.js
import { all } from 'redux-saga/effects';
import {watchGetProduct} from './productSaga';
import {watchCartActions} from './cartSaga';


export default function* rootSaga() {
  yield all([
    watchGetProduct(),watchCartActions(),
  ]);
}
