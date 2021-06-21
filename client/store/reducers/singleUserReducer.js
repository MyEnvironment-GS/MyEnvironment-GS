import { GET_USER } from "../constants/constants";

// USER REDUCER


export default (state = {}, action) => {
  switch (action.type) {
    case GET_USER:
      return  action.data
      default:
      return state
  }
}
