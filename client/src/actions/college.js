import * as api from "../api/index";
import {PROFILE} from "../constants/actionTypes";

export const getcolleges = (formData,navigate) => async (dispatch) => {
  try {
  await api.getcolleges(formData).then((response)=>{
    dispatch({ type: PROFILE, data:response.data });
      navigate("/result" ,{state:formData})}
    ).catch((error)=>{
      navigate("/login")
    }
    );
  } catch (error) {
    alert("something went wrong will fetching college, Please try again after few minutes")
    console.log(error);
  }
};
