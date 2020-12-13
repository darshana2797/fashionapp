import { SET_SELECTED_USER } from "./constants";

export const setSelectedUser = user => {
  return {
    type: SET_SELECTED_USER,
    user
  };
};
