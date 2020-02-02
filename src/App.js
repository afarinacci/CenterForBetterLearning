import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App container">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="logotitle">Center for Better Learning</h1>
      <h2 className="logotagline">
        Better Vision. <span className="logoyellow">Brighter</span> Future.
      </h2>
    </div>
  );
}

export default App;
