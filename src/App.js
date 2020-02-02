import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App container">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Hello!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Center for Better Learning
        </a>
        <button type="button" className="btn btn-primary">
          Click ME
        </button>
        <button type="button" className="btn btn-warning">
          Click Me!
        </button>
        <button type="button" className="btn btn-success">
          Click Me!
        </button>
        <button type="button" className="btn btn-danger">
          Click Me!
        </button>
      </header>
    </div>
  );
}

export default App;
