import React from 'react';
import ApptForm from './../components/ApptForm';

function Appt() {
  return (
    <div className="marginfornav">
      <div className="wideSectionBannerPrimary">
        <h1 className="text-center pageTitleOnDark">Request an Appointment</h1>
      </div>
      <main className="container-fluid page paddingAround max800 effect8">
        <h5 style={{ paddingBottom: '30px' }} className="text-center">
          Please fill out the form below to request an appointment. We will get
          back to you shortly.
        </h5>
        <ApptForm />
      </main>
    </div>
  );
}

export default Appt;
