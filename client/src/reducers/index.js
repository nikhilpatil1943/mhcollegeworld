import { combineReducers } from "redux";

import auth from "./auth.js";
import colleges from "./colleges";
export default combineReducers({
  auth,colleges
});
