import axios from 'axios';

import { getFurnitures } from '../actions/action';

// THUNK CREATORS

export const fetchAllFurnitures = () => {
  console.log('this is fetchAllFurnitures')
  return async (dispatch) => {
    try {
      const { data: allFurnitures } = await axios.get('/api/furniture');
      console.log(allFurnitures)
      dispatch(getFurnitures(AllFurnitures));
    } catch (error) {
      console.log(error);
    }
  };
};
