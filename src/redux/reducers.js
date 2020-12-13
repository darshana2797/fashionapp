import { combineReducers } from "redux-immutable";
import globalReducer from "../containers/App/reducers";
import productListReducer from "../containers/ProductListing/reducers";
import userListReducer from "../containers/UserList/reducers";

export default combineReducers({
  global: globalReducer,
  userList: userListReducer,
  productList: productListReducer
});
