import { GET_DISTRIBUTIONS, } from "../constants/constants";

// DISTRIBUTIONS REDUCER

export default (state = [], action) => {
  switch (action.type) {
    case GET_DISTRIBUTIONS:
      return action.data
    default:
      return state
  };
};
