import {api, verifyToken} from './api-helper'

export const register = (userInfo) => {
  const resp = api.post('/users/', {user: userInfo});
  return resp.data;
}

export const login = (userInfo) => {
  const resp = api.post('/user_token', {auth: userInfo});
  return verifyToken(resp.data.token);
}
