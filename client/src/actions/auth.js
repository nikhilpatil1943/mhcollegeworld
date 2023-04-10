import * as api from "../api/index";
import { AUTH } from "../constants/actionTypes";

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    //login the users
    await api
      .signin(formData)
      .then((response) => {
        if (!response.data.result.isPaid) {
          navigate("/payment");
          dispatch({ type: AUTH, data: response.data });
        } else {
          navigate("/QandA");
          dispatch({ type: AUTH, data: response.data });
        }
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    //login the users
    await api
      .signup(formData)
      .then((response) => {
        if (response.status === 201) {
          console.log(response.data)
          dispatch({ type: AUTH, data: response.data });
          navigate("/payment");
          alert("Account Created Successfully");
        }
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  } catch (error) {
    console.log(error);
  }
};
