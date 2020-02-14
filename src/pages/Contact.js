import React from 'react';
import ContactForm from './../components/ContactForm';

function Contact() {
  return (
    <div className="marginfornav">
      <div className="wideSectionBannerPrimary">
        <h1 className="text-center pageTitleOnDark">Contact Us</h1>
      </div>
      <main className="container-fluid page paddingAround max800 effect8">
        <h5 style={{ paddingBottom: '30px' }} className="text-center">
          Please fill out the form below to contact us. We will get back to you
          shortly.
        </h5>
        <ContactForm />
      </main>
    </div>
  );
}

export default Contact;
