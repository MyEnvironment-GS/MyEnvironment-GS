import GET_USERS from "../constants/constants";
import GET_DISTRIBUTIONS from "../constants/constants";
import GET_MANUFACTURERSINFO from "../constants/constants";

// ACTION CREATORS

export const getUsers = (data) => {
  return {
    type: GET_USERS,
    data,
  };
};

export const getDistributions = (data) => {
  return {
    type: GET_DISTRIBUTIONS,
    data,
  };
};

export const getMunufacturersInfo = (data) => {
  return {
    type: GET_MANUFACTURERSINFO,
    data,
  };
};

export const getFurnitures = (data) => {
  return {
    type: GET_FURNITURES,
    data,
  };
};
