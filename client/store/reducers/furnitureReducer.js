import { GET_FURNITURE } from '../constants/constants';
export default (state = [], action) => {
  switch (action.type) {
    case GET_FURNITURE:
      return action.data;
    default:
      return state;
  }
};
