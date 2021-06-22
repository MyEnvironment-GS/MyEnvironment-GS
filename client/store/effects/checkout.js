import axios from 'axios'
import { setInfo } from '../actions/action'

//Thunk

export const sendOrderInformation = (information, token, history) => {
  return async (dispatch) => {
    const user = await axios.put(`api/users/${token}`, information)
    await axios.post(`api/cart`, {user, token})

    history.push('/orderconfirmation')
  }
}

export const loadCheckout = (activeCart, history, token) => {
  return async (dispatch) => {
    const updatedCart = await axios.put(`api/cart`, {activeCart, token})
    history.push('/checkout')
  }
}


export const fetchInfo = (token) => {
  return async (dispatch) => {
    const res = await axios.get(`api/users/${token}`)
    const user = res.data
    dispatch(setInfo(user))
  }
}
