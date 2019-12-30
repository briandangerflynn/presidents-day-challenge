import React from 'react';
import './App.scss';
import Header from './components/Header';
import { Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Route path="/" render={() => (
        <div>Yo Yo Yo!</div>
      )} />
    </>
  );
}

export default App;
