import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { api_ws } from './services/api-helper'
import { ActionCableProvider } from 'react-actioncable-provider';



ReactDOM.render(<Router><ActionCableProvider url={api_ws}><App /></ActionCableProvider></Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
