import axios from 'axios';
import { addFurnitureToCart } from '../actions/action';

export const add_Furniture_To_Cart = () => {
  return async dispatch => {
    try {
      await axios.post('/:id/add');
    } catch (error) {
      console.log(error);
    }
  };
};
