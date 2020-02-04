import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Routes from './routes/routes';
import CustomNavbar from './components/CustomNavbar';

function App() {
  return (
    <Router>
      <CustomNavbar />
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
