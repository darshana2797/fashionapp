import {
  GET_PRODUCTS,
  GET_PRODUCTS_FAILED,
  GET_PRODUCTS_SUCCESS
} from "./constants";

export const getProducts = () => {
  return {
    type: GET_PRODUCTS
  };
};

export const getProductsSuccess = productList => {
  return {
    type: GET_PRODUCTS_SUCCESS,
    productList
  };
};

export const getProductsFailed = error => {
  return {
    type: GET_PRODUCTS_FAILED,
    error
  };
};
