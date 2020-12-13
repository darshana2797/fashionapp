import { createSelector } from "reselect";

const selectProductList = () => state => state.get("productList");

const selectProductListValue = id =>
  createSelector(selectProductList(), val => val.get(id));

export { selectProductListValue };
