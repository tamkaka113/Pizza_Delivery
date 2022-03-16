import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_RESET_ITEM,
} from "../contants/cartConstants";

export const addToCart = (pizza) => async (dispatch, getState) => {
  dispatch({ type: CART_ADD_ITEM, payload: pizza });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));


};

export const removeCart = (id) => async (dispatch, getState) => {


  dispatch({ type: CART_REMOVE_ITEM, payload: id });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const resetCart = () => async (dispatch, getState) => {
  dispatch({ type: CART_RESET_ITEM });
};
