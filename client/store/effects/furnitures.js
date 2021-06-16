import axios from 'axios';

import { getFurnitures } from '../actions/action';

// THUNK CREATORS

export const fetchAllFurnitures = () => {
  return async (dispatch) => {
    try {
      const { data: AllFurnitures } = await axios.get('/api/furniture');
      dispatch(getFurnitures(AllFurnitures));
    } catch (error) {
      console.log(error);
    }
  };
};
