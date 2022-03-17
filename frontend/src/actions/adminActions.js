import axios from "axios";

import {
  ADMIN_LOGIN_FAIL,
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
} from "../contants/adminConstants";

export const adminLogin = ({username,password}) => async (dispatch ) => {


  try {

    dispatch({ type: ADMIN_LOGIN_REQUEST });
    const config = {
      headers: {
        "Conent-Type": "application/json",
      },
    };

    const { data } = await axios.post("/api/v1/admin/login",{username,password},config);

    console.log(data)
    dispatch({ type: ADMIN_LOGIN_SUCCESS, payload: data });
   
    localStorage.setItem("adminInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: ADMIN_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  } 
};
