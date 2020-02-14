import React from 'react';
import SymptomsChecklist from './../components/SymptomsChecklist';

function Symptoms() {
  return (
    <div className="marginfornav">
      <div className="wideSectionBannerPrimary">
        <h1 className="text-center pageTitleOnDark">Symptoms Checklist</h1>
      </div>
      <main className="container-fluid page paddingAround max800 effect8">
        <p style={{ paddingBottom: '30px' }} className="text-center">
          Use our symptom checklist below to find out if a vision therapy
          evaluation is right for you.
        </p>
        <SymptomsChecklist />
      </main>
    </div>
  );
}

export default Symptoms;
