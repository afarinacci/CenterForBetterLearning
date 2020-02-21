import React from 'react';
import ApptForm from './../components/ApptForm';
import Helmet from 'react-helmet';

function Appt() {
  return (
    <div>
      <Helmet>
        <title>Request an Appointment</title>
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Center for Better Learning | Request an Appointment"
        />
        <meta
          property="og:url"
          content="https://www.centerforbetterlearning.com/request-appointment"
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
          <h1 className="text-center pageTitleOnDark">
            Request an Appointment
          </h1>
        </div>
        <main className="container-fluid page paddingAround max800 effect8">
          <div className="text-center" style={{ paddingBottom: '30px' }}>
            <h5>Please fill out the form below to request an appointment.</h5>
            <h5>We will get back to you shortly.</h5>
          </div>
          <ApptForm />
        </main>
      </div>
    </div>
  );
}

export default Appt;
