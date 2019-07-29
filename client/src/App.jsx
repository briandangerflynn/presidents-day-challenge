import React from 'react';
import './App.scss';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header
          currentUser={{
            id: 1,
            username: 'david',
          }}
        />
        <h1 id="title">President's Day Challenge</h1>
      </header>
    </div>
  );
}

export default App;
