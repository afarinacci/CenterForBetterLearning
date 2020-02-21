import React from 'react';
import ContactForm from './../components/ContactForm';
import Helmet from 'react-helmet';

function Contact() {
  return (
    <div>
      <Helmet>
        <title>Contact Us</title>
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Center for Better Learning | Contact Us"
        />
        <meta
          property="og:url"
          content="https://www.centerforbetterlearning.com/contact-us"
        />
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
