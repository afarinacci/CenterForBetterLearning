import React from 'react';
import Helmet from 'react-helmet';

function NotFound() {
  return (
    <div>
      <Helmet>
        <title>Page Not Found</title>
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="marginfornav">
        <main className="container-fluid paddingAround max800">
          <h1 className="text-center pageTitle">
            404 - Sorry this page is not found
          </h1>
        </main>
      </div>
    </div>
  );
}

export default NotFound;
