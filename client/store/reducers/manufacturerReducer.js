import { GET_MANUFACTURERSINFO } from "../constants/constants"

// MANUFACTURER REDUCER

const intialState = {
  manufacturers: []
}
export default (state = intialState, action) => {
  switch (action.type) {
    case GET_MANUFACTURERSINFO:
      return {...state, manufacturers: action.data }
    default:
      return state
  }
}
