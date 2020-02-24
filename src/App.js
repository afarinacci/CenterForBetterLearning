import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Routes from './routes/routes';
import CustomNavbar from './components/CustomNavbar';
import Helmet from 'react-helmet';

function App() {
  return (
    <Router>
      <Helmet>
        <title>Center for Better Learning | Dr. Christina Murray, O.D.</title>
        <meta
          property="og:title"
          content="Center for Better Learning | Dr. Christina Murray, O.D."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Center for Better Learning" />
        <meta property="og:type" content="website" />
        <meta
          property="twitter:image"
          content="https://lh3.googleusercontent.com/IZozt6YjnYiibHeeMcvcJ3yrmfCH-dKNhVvBEBGU5Lh41f84cwBun7Nlpz8tbcqNAVNN8Ifoc2O5aG8sVEBVU4dEEOclASGdDPhtGGBikkxUW8kresvfqtin6vpZTqR-W89ylQPRd3g=w1200"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="og:image"
          content="https://lh3.googleusercontent.com/IZozt6YjnYiibHeeMcvcJ3yrmfCH-dKNhVvBEBGU5Lh41f84cwBun7Nlpz8tbcqNAVNN8Ifoc2O5aG8sVEBVU4dEEOclASGdDPhtGGBikkxUW8kresvfqtin6vpZTqR-W89ylQPRd3g=w1200"
        />
        <meta
          property="og:description"
          content="Vision Therapy for Learning Related Visual Problems, Amblyopia, Strabismus, Acquired Brain Injury, and Sports Vision Training. Located in South Florida. Request an appointment today!"
        />
        <meta
          name="description"
          content="Vision Therapy for Learning Related Visual Problems, Amblyopia, Strabismus, Acquired Brain Injury, and Sports Vision Training. Located in South Florida. Request an appointment today!"
        />
      </Helmet>
      <CustomNavbar />
      <Routes />
      <Footer />
    </Router>
  );
}

export default App;
