import React from 'react';
import SymptomsChecklist from './../components/SymptomsChecklist';

function Symptoms() {
  return (
    <main className="container-fluid paddingAround max800 effect8">
      <h1 className="text-center pageTitle">Symptoms Checklist</h1>
      <p>
        Use our symptom checklist below to find out if a vision therapy
        evaluation is right for you.
      </p>
      <br />
      <SymptomsChecklist />
    </main>
  );
}

export default Symptoms;
