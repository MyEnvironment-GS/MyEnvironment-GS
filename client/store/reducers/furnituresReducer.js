import { GET_FURNITURES } from  "../constants/constants"

const initialState = {
  furnitures: []
}
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FURNITURES:
      return { ...state , furnitures: action.data }
    default:
      return state
  }
}
