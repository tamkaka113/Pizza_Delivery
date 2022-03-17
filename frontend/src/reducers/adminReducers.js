import {
    ADMIN_LOGIN_FAIL,
    ADMIN_LOGIN_REQUEST,
    ADMIN_LOGIN_SUCCESS,
  } from "../contants/adminConstants";

export const adminLoginReducers = (state = { adminInfo: {} }, action) => {
    switch (action.type) {
      case   ADMIN_LOGIN_REQUEST:
        return { loading: true, adminInfo: {} };
      case   ADMIN_LOGIN_SUCCESS:
        return { loading: false,success:true, adminInfo: action.payload };
      case   ADMIN_LOGIN_FAIL:
        return { loading: false, error: action.payload,errors:true };
  
      default:
        return state;
    }
  };