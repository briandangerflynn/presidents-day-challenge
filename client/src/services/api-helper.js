import axios from 'axios';

let url;
let api_ws;

if (process.env.NODE_ENV === 'development') {
  url = 'http://localhost:3000'
  api_ws = 'ws://localhost:3000/cable'
}

if (process.env.NODE_ENV === 'production') {
  url = 'http://presidents-day-challenge.herokuapp.com/'
  api_ws = 'wss://presidents-day-challenge.herokuapp.com/cable'
}

const api = axios.create({
  baseURL: url
});

export {
  api,
  api_ws
}
