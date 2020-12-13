import { fromJS } from "immutable";
import { GET_USERS_FAILED, GET_USERS_SUCCESS } from "./constants";

const initialState = fromJS({
  userList: [],
  toast: null,
  toastMsg: null,
  toastType: null
});

function userListReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return state.set("userList", action.userList.results);

    case GET_USERS_FAILED:
      return state
        .set("userList", [])
        .set("toastMsg", "Something went wrong, please try again")
        .set("toastType", "error");
    default:
      return state;
  }
}

export default userListReducer;
