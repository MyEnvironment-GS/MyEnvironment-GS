import axios from 'axios';
import { getFurniture } from '../actions/action';

export const fetchFurniture = id => {
  return async dispatch => {
    try {
      const { data: furniture } = await axios.get(`/api/furniture/${id}`);
      dispatch(getFurniture(furniture));
    } catch (error) {
      console.log(error);
    }
  };
};

// export const addToCart = (id, cartId) => {
//   return async dispatch => {
//     try {
//       const item = await axios.get(`api/furniture/${id}`);
//       const cart = await axios.put();
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };
