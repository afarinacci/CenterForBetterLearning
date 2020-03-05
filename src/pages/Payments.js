import React from 'react';
import Helmet from 'react-helmet';

const Payments = () => (
  <div>
    <Helmet>
      <title>Payment Options</title>
      <meta
        property="og:title"
        content="Center for Better Learning | Payment Options"
      />
      <meta property="og:type" content="article" />
      <meta
        property="og:description"
        content="Payment options for our Center for Better Learning vision therapy services."
      />
      <meta
        name="description"
        content="Payment options for our Center for Better Learning vision therapy services."
      />
      <meta
        property="og:url"
        content="https://www.centerforbetterlearning.com/our-team"
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
        <h1 className="text-center pageTitleOnDark">Payment Options</h1>
      </div>
      <main className="container-fluid paddingAround max800"></main>
    </div>
  </div>
);

export default Payments;
