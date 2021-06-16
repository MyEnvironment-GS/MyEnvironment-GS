import axios from 'axios';

import { getUsers } from '../actions/action';

// THUNK CREATORS

export const fetchAllUsers = () => {
	return async (dispatch) => {
		try {
			const { data: allUsers } = await axios.get('/api/users');
			dispatch(getUsers(allUsers));
		} catch (error) {
			console.log(error);
		}
	};
};
