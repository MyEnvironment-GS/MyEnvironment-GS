import axios from 'axios';
import { addFurnitureToCart } from '../actions/action';

export const add_Furniture_To_Cart = (furnitureId, token) => {
  return async dispatch => {
    try {
      await axios.post(`/api/furniture/add/${furnitureId}`, {
        token
      });
    } catch (error) {
      console.log(error);
    }
  };
};
