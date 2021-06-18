import { GET_BIOGRAPHIES } from '../constants/constants';

export default (state = [], action) => {
  switch (action.type) {
    case GET_BIOGRAPHIES:
      return action.data;
    default:
      return state;
  }
};
