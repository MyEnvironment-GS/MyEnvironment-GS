import axios from 'axios'
import { async } from 'regenerator-runtime'

//Thunk

export const sendOrderInformation = (information, token, history) => {
  return async (dispatch) => {
    const user = await axios.put(`api/users/${token}`, information)
    console.log(user)
    history.push('/cart')
  }
}
