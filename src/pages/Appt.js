import React from 'react';
import ApptForm from './../components/ApptForm';

function Appt() {
  return (
    <div className="marginfornav">
      <main className="container-fluid paddingAround max800 effect8">
        <h1 className="text-center pageTitle">Request an Appointment</h1>
        <ApptForm />
      </main>
    </div>
  );
}

export default Appt;
