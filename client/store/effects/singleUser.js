import axios from "axios";

import { getSingleUser } from '../actions/action';


export const fetchSingleUser = (id) => {
  console.log('we made it here')
  return async (dispatch) => {
    try {
      const { data: singleUser } = await axios.get(`/api/users/${id}`)
      console.log('Here is singleUser', singleUser)
       dispatch(getSingleUser(singleUser))
    } catch (error) {
      console.log(error)
    }
  }
}
