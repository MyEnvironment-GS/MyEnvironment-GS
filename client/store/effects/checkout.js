import axios from 'axios';
import { setInfo, deleteCartItem } from '../actions/action';

//Thunk

export const sendOrderInformation = (information, token, history) => {

  return async dispatch => {
    const user = await axios.put(`/api/users/me`, {information}, {
    headers: {
      authorization: token
    }});
    await axios.post(`/api/cart`, { user });

    history.push('/orderconfirmation');
  };
};

export const loadCheckout = (activeCart, history, token) => {
  return async dispatch => {
    const updatedCart = await axios.put(`/api/cart`, { activeCart, token });
    history.push('/checkout');
  };
};

export const loadCheckoutLocal = (localCart, information, history) => {
  return async dispatch => {
    await axios.post('/api/cart/local', { localCart, information });
    history.push('/orderconfirmation');
    window.localStorage.clear();
  };
};

export const fetchInfo = token => {
  return async dispatch => {
    console.log(token)
    const res = await axios.get('/api/users/me', {headers: {
      authorization: token
    }});
    const user = res.data;
    console.log(user)
    dispatch(setInfo(user));
  };
};

export const sendDeleteCartItem = (information, history) => {
  return async dispatch => {
    const res = await axios.delete(`api/cart/`, {
      data: { information: information }
    });
    const cart = res.data;
    dispatch(deleteCartItem(cart));
    history.push('/cart');
  };
};
