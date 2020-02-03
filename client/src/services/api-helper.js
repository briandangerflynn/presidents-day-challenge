import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000'
});

const api_ws = 'ws://localhost:3000/cable';




export {
  api,
  api_ws
}
