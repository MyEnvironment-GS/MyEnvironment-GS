import { GET_USERS } from "../constants/constants";

// USER REDUCERS

const intialState = {
  users: []
}
export default (state = intialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {...state, users: action.data }
      default:
      return state
  }
}
