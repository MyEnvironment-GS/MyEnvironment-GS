import axios from 'axios';

import { getBiographies } from '../actions/action';

//THUNK CREATORS
export const fetchAllBiographies = () => {
  return async (dispatch) => {
    try {
      const { data: allBiographies } = await axios.get('/api/about');
      dispatch(getBiographies(allBiographies));
    } catch (error) {
      console.log('error fetching biographies', error.message);
    }
  };
};
