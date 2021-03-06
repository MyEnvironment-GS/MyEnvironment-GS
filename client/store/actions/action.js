import { GET_USERS } from '../constants/constants';
import { GET_DISTRIBUTIONS } from '../constants/constants';
import { GET_MANUFACTURERSINFO } from '../constants/constants';

import { GET_FURNITURES } from '../constants/constants';
import { GET_FURNITURE } from '../constants/constants';
import { GET_BIOGRAPHIES } from '../constants/constants';
import { GET_USER } from '../constants/constants';
import { GET_SINGLE_USER } from '../constants/constants';
import { DELETE_CART_ITEM } from '../constants/constants';


// ACTION CREATORS

export const getUsers = data => {
  return {
    type: GET_USERS,
    data
  };
};

export const getDistributions = data => {
  return {
    type: GET_DISTRIBUTIONS,
    data
  };
};

export const getManufacturersInfo = data => {
  return {
    type: GET_MANUFACTURERSINFO,
    data
  };
};

export const getFurnitures = data => {
  return {
    type: GET_FURNITURES,
    data
  };
};

export const getFurniture = data => {
  return {
    type: GET_FURNITURE,
    data
  };
};

export const getBiographies = data => {
  return {
    type: GET_BIOGRAPHIES,
    data
  };
};

export const addFurnitureToCart = data => {
  return {
    type: ADD_FURNITURE_TO_CART,
    data
  };
};

export const setInfo = data => {
  return {
    type: GET_USER,
    data
  };
};

export const getSingleUser = (data) => {
  return {
    type: GET_SINGLE_USER,
    data,
  }
}

export const deleteCartItem = (data) => {
  return {
    type: DELETE_CART_ITEM,
    data
  }
}
