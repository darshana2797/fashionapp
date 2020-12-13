import { call, fork, put, takeLatest } from "redux-saga/effects";
import CONFIG from "../../config/config";
import { request } from "../../Utils/commonUtils";
import * as actions from "./actions";
import { GET_PRODUCTS } from "./constants";

export function* getProducts() {
  let requestUrl = CONFIG.API.getProducts;

  const options = {
    method: "GET",
    "Content-Type": "application/json"
  };

  requestUrl += "?limit=10";
  try {
    const response = yield call(request, requestUrl, options);
    yield put(actions.getProductsSuccess(response));
  } catch (err) {
    yield put(actions.getProductsFailed(err));
  }
}

export function* getProductsList() {
  yield takeLatest(GET_PRODUCTS, getProducts);
}

export function* initializeProductsWatcher() {
  const watcher1 = yield fork(getProductsList);
}
