import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:3000'
});

const storeToken = (token) => {
  localStorage.setItem('jwt', token);
  api.defaults.headers.common.authorization = `Bearer ${token}`;
};

const verifyToken = async () => {
  const token = localStorage.getItem('jwt');
  if (token !== null) {
    try{
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

export {
  api,
  verifyToken
}
