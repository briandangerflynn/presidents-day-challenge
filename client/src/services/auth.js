import { api } from './api-helper'

const storeToken = (token) => {
  localStorage.setItem('jwt', token);
  api.defaults.headers.common.authorization = `Bearer ${token}`;
};

const verifyToken = async () => {
  const token = localStorage.getItem('jwt');
  if (token !== null) {
    try {
      const resp = api.get('/users/verify', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      storeToken(token);
      return resp.data;
    } catch (e) {
      console.log(e);
      return false
    }
  }
}

export const register = (userInfo) => {
  const resp = api.post('/users/', { user: userInfo });
  return resp.data;
}

export const login = (userInfo) => {
  const resp = api.post('/user_token', { auth: userInfo });
  return verifyToken(resp.data.token);
}
