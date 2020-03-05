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
        <script type="application/ld+json">{`
        {
          "@context": "http://schema.org",
          "@type": "Organization",
          "name": "Center for Better Learning",
          "email": "mailto:info@centerforbetterlearning.com",
          "url": "https://www.centerforbetterlearning.com",
          "logo": "https://lh3.googleusercontent.com/IZozt6YjnYiibHeeMcvcJ3yrmfCH-dKNhVvBEBGU5Lh41f84cwBun7Nlpz8tbcqNAVNN8Ifoc2O5aG8sVEBVU4dEEOclASGdDPhtGGBikkxUW8kresvfqtin6vpZTqR-W89ylQPRd3g=w1200",
          "description": "Vision Therapy for Learning Related Visual Problems, Amblyopia, Strabismus, Acquired Brain Injury, and Sports Vision Training. Located in South Florida. Request an appointment today!",
          "location": [
              {
                "@type": "LocalBusiness",
                "name" : "Center for Better Learning – Coconut Creek",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Coconut Creek",
                  "addressRegion": "Florida",
                  "postalCode": "33073",
                  "streetAddress": "4171 W Hillsboro Blvd, Ste 13"
                  },
                "openingHours": ["Mo 09:00-19:00", "Tu 09:00-18:00", "We 09:00-18:00", "Th 09:00-19:00", "Fr 09:00-18:00", "Sa 09:00-13:00"],
                "telephone" : "+1-561-462-1245",
                "image": "https://lh3.googleusercontent.com/IZozt6YjnYiibHeeMcvcJ3yrmfCH-dKNhVvBEBGU5Lh41f84cwBun7Nlpz8tbcqNAVNN8Ifoc2O5aG8sVEBVU4dEEOclASGdDPhtGGBikkxUW8kresvfqtin6vpZTqR-W89ylQPRd3g=w1200"
              },
              {
                "@type": "LocalBusiness",
                "name" : "Center for Better Learning – West Palm Beach",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "West Palm Beach",
                  "addressRegion": "Florida",
                  "postalCode": "33406",
                  "streetAddress": "3650 Forest Hill Blvd, Ste 2"
                  },
                "openingHours": ["Mo-Fr 09:00-18:00", "Sa 09:00-13:00"],
                "telephone" : "+1-561-462-2356",
                "image": "https://lh3.googleusercontent.com/IZozt6YjnYiibHeeMcvcJ3yrmfCH-dKNhVvBEBGU5Lh41f84cwBun7Nlpz8tbcqNAVNN8Ifoc2O5aG8sVEBVU4dEEOclASGdDPhtGGBikkxUW8kresvfqtin6vpZTqR-W89ylQPRd3g=w1200"
              }
            ],
          "employees": [
            {
              "@type": "Person",
              "jobTitle": "Optometrist",
              "name": "Dr. Christina Murray, O.D."
            },
            {
              "@type": "Person",
              "jobTitle": "Lead Vision Therapist",
              "name": "Renee Wise"
            },
            {
              "@type": "Person",
              "jobTitle": "Operations Manager",
              "name": "Paul Murray"
            }
          ]
        }
    `}</script>
      </Helmet>
      <CustomNavbar />
      <Routes />
      <Footer />
    </Router>
  );
}

export default App;
