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
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAIL,
  UPDATE_PRODUCT_RESET,
} from "../contants/productConstants";

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      return { loading: true, products: [] };
    case GET_PRODUCTS_SUCCESS:
      return { loading: false, products: action.payload };
    case GET_PRODUCTS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const getProductReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case GET_PRODUCT_REQUEST:
      return { loading: true, product: {} };
    case GET_PRODUCT_SUCCESS:
      return { loading: false, product: action.payload };
    case GET_PRODUCT_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const createProductReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case CREATE_PRODUCT_REQUEST:
      return { loading: true, product: {} };
    case CREATE_PRODUCT_SUCCESS:
      return { loading: false, success: true, product: action.payload };
    case CREATE_PRODUCT_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const updateProductReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case UPDATE_PRODUCT_REQUEST:
      return { loading: true, product: {} };
    case UPDATE_PRODUCT_SUCCESS:
      return { loading: false, success: true, product: action.payload };
    case UPDATE_PRODUCT_FAIL:
      return { loading: false, error: action.payload };

    case UPDATE_PRODUCT_RESET:
      return { loading: false, product: {} };

    default:
      return state;
  }
};

export const deleteProductReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_PRODUCT_REQUEST:
      return { loading: true };
    case DELETE_PRODUCT_SUCCESS:
      return { loading: false, success: true };
    case DELETE_PRODUCT_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
