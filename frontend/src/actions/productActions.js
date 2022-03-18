import axios from "axios";
import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAIL,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
} from "../contants/productConstants";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCTS_REQUEST });
    const { data } = await axios.get("/api/v1/products");
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const getSingleProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCT_REQUEST });

    const { data } =  await axios.get(`/api/v1/products/${id}`);

 

    dispatch({ type: GET_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_PRODUCT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const createProduct = (product) => async (dispatch) => {

  try {

    dispatch({ type: CREATE_PRODUCT_REQUEST });

    const { data } =  await axios.post('/api/v1/products/create',product);

    dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_PRODUCT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteProduct = (id) => async (dispatch) => {

  try {

    dispatch({ type: DELETE_PRODUCT_REQUEST });

      await axios.delete(`/api/v1/products/${id}`);

    dispatch({ type: DELETE_PRODUCT_SUCCESS });
  } catch (error) {
    dispatch({
      type: DELETE_PRODUCT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

