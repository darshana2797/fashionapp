import { fromJS } from "immutable";
import { GET_PRODUCTS_FAILED, GET_PRODUCTS_SUCCESS } from "./constants";

const initialState = fromJS({
  productList: [],
  toast: null,
  toastMsg: null,
  toastType: null
});

function productListReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      console.log("$$$$$$$$$$$$$$$$$$", action);
      return state.set("productList", action.productList);

    case GET_PRODUCTS_FAILED:
      return state
        .set("productList", [])
        .set("toastMsg", "Something went wrong, please try again")
        .set("toastType", "error");

    default:
      return state;
  }
}

export default productListReducer;
