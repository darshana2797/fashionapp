import { call, fork, put, takeLatest } from "redux-saga/effects";
import CONFIG from "../../config/config";
import { request } from "../../Utils/commonUtils";
import * as actions from "./actions";
import { GET_USERS } from "./constants";

export function* getUsers() {
  let requestUrl = CONFIG.API.getUsers;
  let params = {
    results: 10
  };

  const options = {
    method: "GET",
    "Content-Type": "application/json"
  };

  requestUrl += "?results=10";
  try {
    const response = yield call(request, requestUrl, options);
    yield put(actions.getUsersSuccess(response));
  } catch (err) {
    yield put(actions.getUsersFailed(err));
  }
}

export function* getUsersList() {
  yield takeLatest(GET_USERS, getUsers);
}

export function* initializeUsersWatcher() {
  const watcher1 = yield fork(getUsersList);
}
