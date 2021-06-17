import { GET_USERS } from "../constants/constants";

// USER REDUCER


export default (state = [], action) => {
  switch (action.type) {
    case GET_USERS:
      return  action.data
      default:
      return state
  }
}
