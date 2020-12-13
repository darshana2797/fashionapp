import { fromJS } from "immutable";
import { SET_SELECTED_USER } from "./constants";

const initialState = fromJS({
  selectedUser: null
});

function globalReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SELECTED_USER:
      return state.set("selectedUser", action.user);

    // case GET_USERS_FAILED:
    //   return state
    //     .set("userList", [])
    //     .set("toastMsg", "Something went wrong, please try again")
    //     .set("toastType", "error");
    default:
      return state;
  }
}

export default globalReducer;
