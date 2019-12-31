import React from 'react';
import './App.scss';
import Header from './components/Header';
import Signup from './components/Signup';
import Login from './components/Login';
import { Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Route path="/login" render={() => (
        <Login />
      )} />
      <Route path="/register" render={() => (
        <Signup />
      )} />
      <Route exact path="/" render={() => (
        <div>Yo Yo Yo!</div>
      )} />
    </>
  );
}

export default App;
