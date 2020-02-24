import React from 'react';
import ContactForm from './../components/ContactForm';
import Helmet from 'react-helmet';

function Contact() {
  return (
    <div>
      <Helmet>
        <title>Contact Us</title>
        <meta
          property="og:title"
          content="Center for Better Learning | Contact Us"
        />
        <meta
          property="og:url"
          content="https://www.centerforbetterlearning.com/contact-us"
        />
      </Helmet>
      <div className="marginfornav">
        <div className="wideSectionBannerPrimary">
          <h1 className="text-center pageTitleOnDark">Contact Us</h1>
        </div>
        <main className="container-fluid page paddingAround max800 effect8">
          <h5 style={{ paddingBottom: '30px' }} className="text-center">
            Please fill out the form below to contact us. We will get back to
            you shortly.
          </h5>
          <ContactForm />
        </main>
      </div>
    </div>
  );
}

export default Contact;
