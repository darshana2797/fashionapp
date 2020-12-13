import { GET_USERS, GET_USERS_FAILED, GET_USERS_SUCCESS } from "./constants";

export const getUsers = () => {
  return {
    type: GET_USERS
  };
};

export const getUsersSuccess = userList => {
  return {
    type: GET_USERS_SUCCESS,
    userList
  };
};

export const getUsersFailed = error => {
  return {
    type: GET_USERS_FAILED,
    error
  };
};
