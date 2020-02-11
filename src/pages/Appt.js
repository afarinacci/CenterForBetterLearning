import React from 'react';
import ApptForm from './../components/ApptForm';

function Appt() {
  return (
    <main className="container-fluid paddingAround max800">
      <h1 className="text-center pageTitle">Request an Appointment</h1>
      <ApptForm />
    </main>
  );
}

export default Appt;
