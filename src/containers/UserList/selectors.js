import { createSelector } from "reselect";

const selectUserList = () => state => state.get("userList");

const selectUserListValue = id =>
  createSelector(selectUserList(), val => val.get(id));

export { selectUserListValue };
