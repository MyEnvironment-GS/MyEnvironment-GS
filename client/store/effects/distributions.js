import axios from 'axios';
import { getDistributions } from '../actions/action';

// THUNK CREATORS

export const fetchAllDistrbutions = () => {
	return async (dipatch) => {
		try {
			const { data: allDistributions } = axios.get('/api/distributionCenters');
			dipatch(getDistributions(allDistributions));
    } catch (error) {
      console.log(error)
    }
	};
};
