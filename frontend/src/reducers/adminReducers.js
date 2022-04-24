import {
  ADMIN_LOGIN_FAIL,
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGOUT,
} from "../contants/adminConstants";

export const adminLoginReducers = (state = { adminInfo: {} }, action) => {
  switch (action.type) {
    case ADMIN_LOGIN_REQUEST:
      return { loading: true, adminInfo: {} };
    case ADMIN_LOGIN_SUCCESS:
      return { loading: false, success: true, adminInfo: action.payload };
    case ADMIN_LOGIN_FAIL:
      return { loading: false, error: action.payload, errors: true };

    case ADMIN_LOGOUT:
      return { adminInfo: {} };
    default:
      return state;
  }
};
