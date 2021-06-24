import axios from 'axios';

import { getUsers } from '../actions/action';

// THUNK CREATORS

export const fetchAllUsers = (token) => {
  return async (dispatch) => {
    try {
      const { data: allUsers } = await axios.get('/api/users', {
        headers: { authorization: token },
      });
      dispatch(getUsers(allUsers));
    } catch (error) {
      console.log(error);
    }
  };
};
