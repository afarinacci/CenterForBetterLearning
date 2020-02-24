import React from 'react';
import Helmet from 'react-helmet';
import SymptomsChecklist from './../components/SymptomsChecklist';

function Symptoms() {
  return (
    <div>
      <Helmet>
        <title>Symptoms Checklist</title>
        <meta
          property="og:title"
          content="Center for Better Learning | Symptoms Checklist"
        />
        <meta
          property="og:url"
          content="https://www.centerforbetterlearning.com/symptoms"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="Complete our symptoms checklist to find out if a vision therapy evaluation is right for you."
        />
        <meta
          name="description"
          content="Complete our symptoms checklist to find out if a vision therapy evaluation is right for you."
        />
      </Helmet>
      <div className="marginfornav">
        <div className="wideSectionBannerPrimary">
          <h1 className="text-center pageTitleOnDark">Symptoms Checklist</h1>
        </div>
        <main className="container-fluid page paddingAround max800 effect8">
          <h5 style={{ paddingBottom: '30px' }} className="text-center">
            Complete the checklist below to find out if a vision therapy
            evaluation is right for you.
          </h5>
          <SymptomsChecklist />
        </main>
      </div>
    </div>
  );
}

export default Symptoms;
