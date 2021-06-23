import { GET_USERS, GET_USER, DELETE_CART_ITEM } from "../constants/constants";

// USER REDUCER


export default (state = [], action) => {
  switch (action.type) {
    case GET_USERS:
      return  action.data
    case GET_USER:
      return action.data
    case DELETE_CART_ITEM:
      return  {...state, carts: action.data}
      default:
      return state
  }
}
