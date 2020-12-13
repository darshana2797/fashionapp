import { createSelector } from "reselect";

const selectGlobal = () => state => state.get("global");

const selectGlobalValue = id =>
  createSelector(selectGlobal(), val => val.get(id));

export { selectGlobalValue };
