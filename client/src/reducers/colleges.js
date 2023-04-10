import { PROFILE } from "../constants/actionTypes";

const reducer = (state = [], action) => {
  switch (action.type) {
    case PROFILE:
        console.log(action.data)
      return action.data;
    default:
      return state;
  }
};

export default reducer;
