import { all, fork } from "redux-saga/effects";
import { initializeProductsWatcher } from "../containers/ProductListing/sagas";
import { initializeUsersWatcher } from "../containers/UserList/sagas";

export default function*() {
  yield all([fork(initializeUsersWatcher)]);
  yield all([fork(initializeProductsWatcher)]);
}
