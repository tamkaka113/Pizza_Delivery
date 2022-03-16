import {
  CREATE_ORDERS_REQUEST,
  CREATE_ORDERS_FAIL,
  CREATE_ORDERS_SUCCESS,
} from "../contants/orderConstants";

export const orderReducers = (state = { orders: [] },action) => {
  switch (action.type) {
    case CREATE_ORDERS_REQUEST:
      return { loading: true, orders: [] };
    case CREATE_ORDERS_SUCCESS:
      return { loading: false, orders: action.payload };
    case CREATE_ORDERS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export default orderReducers;
