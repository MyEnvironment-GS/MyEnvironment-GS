import { GET_DISTRIBUTIONS, } from "../constants/constants";

// DISTRIBUTIONS REDUCER

const intialState = {
  distributions: []
}
export default (state = intialState, action) => {
  switch (action.type) {
    case GET_DISTRIBUTIONS:
      return {...state, distribution: action.data }
    default:
      return state
  };
};
