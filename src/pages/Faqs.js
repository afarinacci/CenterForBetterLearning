import React from 'react';
import Helmet from 'react-helmet';

const Faqs = () => (
  <div>
    <Helmet>
      <title>Frequently Asked Questions</title>
      <meta
        property="og:title"
        content="Center for Better Learning | Frequently Asked Questions"
      />
      <meta property="og:type" content="article" />
      <meta
        property="og:description"
        content="Answers to frequently asked questions about Learning Related Visual Problems, Amblyopia, Strabismus, Acquired Brain Injury, Sports Vision Training, and Vision Therapy."
      />
      <meta
        name="description"
        content="Answers to frequently asked questions about Learning Related Visual Problems, Amblyopia, Strabismus, Acquired Brain Injury, Sports Vision Training, and Vision Therapy."
      />
      <meta
        property="og:url"
        content="https://www.centerforbetterlearning.com/faqs"
      />
      <meta
        property="twitter:image"
        content="https://lh3.googleusercontent.com/XwqIxTOPh1RD7y8ZStQLytJ4CHpbvEdh3fHuQI1dz-oO6DG14Tn8hfIZEK-YKVds6HLYkum_h3YrgLkKmchSjGBhphjnmg5bjBXE8nTOCWvzVwqyb6yg4vY12VN_2gFoRVTc0zg3Vtc=w1200"
      />
      <meta
        property="og:image"
        content="https://lh3.googleusercontent.com/XwqIxTOPh1RD7y8ZStQLytJ4CHpbvEdh3fHuQI1dz-oO6DG14Tn8hfIZEK-YKVds6HLYkum_h3YrgLkKmchSjGBhphjnmg5bjBXE8nTOCWvzVwqyb6yg4vY12VN_2gFoRVTc0zg3Vtc=w1200"
      />
    </Helmet>
    <div className="marginfornav">
      <div className="wideSectionBannerPrimary">
        <h1 className="text-center pageTitleOnDark">
          Frequently Asked Questions
        </h1>
      </div>
      <main className="container-fluid paddingAround max800"></main>
    </div>
  </div>
);

export default Faqs;
