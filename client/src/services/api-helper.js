import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://localhost:3000'
  baseURL: 'http://presidents-day-challenge.herokuapp.com/'
});

// const api_ws = 'ws://localhost:3000/cable';
const api_ws = 'wss://presidents-day-challenge.herokuapp.com/cable'




export {
  api,
  api_ws
}
