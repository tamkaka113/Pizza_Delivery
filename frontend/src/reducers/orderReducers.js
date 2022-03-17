import {
  CREATE_ORDERS_REQUEST,
  CREATE_ORDERS_FAIL,
  CREATE_ORDERS_SUCCESS,
  GET_ORDER_REQUEST,
  GET_ORDER_FAIL,
  GET_ORDER_SUCCESS,
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
  GET_ORDERS_FAIL,
  UPDATE_STATUS_REQUEST,
  UPDATE_STATUS_SUCCESS,
  UPDATE_STATUS_FAIL,
} from "../contants/orderConstants";

export const orderReducers = (state = { orders: [] },action) => {
  switch (action.type) {
    case CREATE_ORDERS_REQUEST:
      return { loading: true, orders: [] };
    case CREATE_ORDERS_SUCCESS:
      return { loading: false,success:true, orders: action.payload };
    case CREATE_ORDERS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};


export const userOrderReducers = (state = { order: [] },action) => {
  switch (action.type) {
    case GET_ORDER_REQUEST:
      return { loading: true, orders: [] };
    case GET_ORDER_SUCCESS:
      return { loading: false,success:true, order: action.payload };
    case GET_ORDER_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};


export const getAllOrderReducers = (state = { orders: [] },action) => {
  switch (action.type) {
    case GET_ORDERS_REQUEST:
      return { loading: true, orders: [] };
    case GET_ORDERS_SUCCESS:
      return { loading: false,success:true, orders: action.payload };
    case GET_ORDERS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};


export const updateStatusReducers = (state = { product: {} },action) => {
  switch (action.type) {
    case UPDATE_STATUS_REQUEST:
      return { loading: true, product: {} };
    case UPDATE_STATUS_SUCCESS:
      return { loading: false, product: action.payload };
    case UPDATE_STATUS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
