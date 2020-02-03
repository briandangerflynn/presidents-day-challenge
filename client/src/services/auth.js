import { api } from './api-helper'

const storeToken = (token) => {
  localStorage.setItem('jwt', token);
  api.defaults.headers.common.authorization = `Bearer ${token}`;
};

export const verifyToken = async () => {
  const token = localStorage.getItem('jwt');
  if (token !== null) {
    try {
      const resp = await api.get('/users/verify', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      storeToken(token);
      return resp.data;
    } catch (e) {
      return false
    }
  }
}

export const register = async (userInfo) => {
  const resp = await api.post('/users/', { user: userInfo });
  storeToken(resp.data.token);
  const { token, ...userTeams } = resp.data
  return userTeams;
}

export const login = async (userInfo) => {
  const resp = await api.post('/user_token', { auth: userInfo });
  storeToken(resp.data.token);
  const { token, ...userTeams } = resp.data
  return userTeams;
}

export const removeToken = () => {
  api.defaults.headers.common.authorization = null;
}
