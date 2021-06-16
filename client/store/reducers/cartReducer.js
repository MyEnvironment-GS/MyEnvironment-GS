import { GET_CART } from "../constants/constants";

//CART REDUCER

export default (state = [], action) => {
  switch(action.type) {
    case GET_CART:
      return action.data
    default:
      return state
  }
}
