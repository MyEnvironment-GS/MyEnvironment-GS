import { GET_MANUFACTURERSINFO } from "../constants/constants"

// MANUFACTURER REDUCER

export default (state = [], action) => {
  switch (action.type) {
    case GET_MANUFACTURERSINFO:
    return action.data
    default:
      return state
  }
}
