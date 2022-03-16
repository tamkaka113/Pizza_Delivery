import {
  CREATE_ORDERS_REQUEST,
  CREATE_ORDERS_FAIL,
  CREATE_ORDERS_SUCCESS,
} from "../contants/orderConstants";
import axios from "axios";
export const createNewOrder = (order) => async (dispatch) => {
  
      console.log(order)
  try {
    dispatch({ type: CREATE_ORDERS_REQUEST });

    const { data } = await axios.post("/api/v1/orders", order);

    console.log(data)
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
