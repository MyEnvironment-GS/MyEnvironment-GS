import { GET_FURNITURES } from '../constants/constants';

export default (state = [], action) => {
  switch (action.type) {
    case GET_FURNITURES:
      return action.data;
    default:
      return state;
  }
};
