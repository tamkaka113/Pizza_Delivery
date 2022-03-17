import {
  CREATE_ORDERS_REQUEST,
  CREATE_ORDERS_FAIL,
  CREATE_ORDERS_SUCCESS,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAIL,
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
  GET_ORDERS_FAIL,
  UPDATE_STATUS_REQUEST,
  UPDATE_STATUS_SUCCESS,
  UPDATE_STATUS_FAIL,
} from "../contants/orderConstants";
import axios from "axios";
export const createNewOrder = (order) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_ORDERS_REQUEST });

    const { data } = await axios.post("/api/v1/orders", order);

    dispatch({ type: CREATE_ORDERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_ORDERS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const userOrderDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_ORDER_REQUEST });

    const { data } = await axios.get(`/api/v1/orders/${id}`);

    dispatch({ type: GET_ORDER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_ORDER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const getAllOrders = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ORDERS_REQUEST });

    const { data } = await axios.get('/api/v1/orders');

    dispatch({ type: GET_ORDERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_ORDERS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};




export const updateStatus = (id,currentStatus) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_STATUS_REQUEST });

    const { data } = await axios.patch(`/api/v1/orders/${id}`,{currentStatus});

    dispatch({ type: UPDATE_STATUS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: UPDATE_STATUS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};



