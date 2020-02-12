import React from 'react';
import ContactForm from './../components/ContactForm';

function Contact() {
  return (
    <div className="marginfornav">
      <main className="container-fluid paddingAround max800 effect8">
        <h1 className="text-center pageTitle">Contact Us</h1>
        <ContactForm />
      </main>
    </div>
  );
}

export default Contact;
