import axios from 'axios'
import { getCart } from "../actions/action"

//THUNK CREATOR

export const fetchCart = (id) => {
  return async (dispatch) => {
    try {
      const {data: activeCart} = axios.get(`/api/users/${id}`)
      dispatch(getCart(activeCart))
    } catch (error) {
      console.log(error)
    }
  }
}
