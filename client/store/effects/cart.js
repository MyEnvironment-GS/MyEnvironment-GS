import axios from 'axios';
import { addFurnitureToCart } from '../actions/action';

export const add_Furniture_To_Cart = (furnitureId, user) => {
  return async dispatch => {
    try {
      await axios.post(`/api/furniture/add/${furnitureId}`, user);
    } catch (error) {
      console.log(error);
    }
  };
};
