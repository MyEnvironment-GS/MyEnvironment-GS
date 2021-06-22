import { GET_SINGLE_USER } from "../constants/constants";

export default (state = {}, action) => {
  console.log(action.data)
  switch (action.type) {
    case GET_SINGLE_USER:
      return action.data
    default:
      return state;
  }
}
