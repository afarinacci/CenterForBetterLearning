import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Routes from './routes/routes';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <main>
          <Routes />
        </main>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
