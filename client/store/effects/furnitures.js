import axios from 'axios';

import { getFurnitures } from '../actions/action';

// THUNK CREATORS

export const fetchAllFurnitures = () => {
  return async (dispatch) => {
    try {
      const { data: allFurnitures } = await axios.get('/api/furniture');
      dispatch(getFurnitures(allFurnitures));
    } catch (error) {
      console.log(error);
    }
  };
};
