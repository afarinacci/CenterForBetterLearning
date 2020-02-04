import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="row">
        <div className="location col-12 col-md-6 text-center">
          <h3>Coconut Creek</h3>
          <address>
            4147 Hillsboro Blvd Suite 13
            <br />
            Coconut Creek FL, 33703
            <br />
          </address>

          <a
            href="tel:+1561-264-1245"
            className="btn btn-outline-primary bg-white"
          >
            (561) 264-1245
          </a>
        </div>
        <div className="location col-12 col-md-6 text-center">
          <h3>West Palm Beach</h3>
          <address>
            3650 Forest Hill Blvd. Suite 2<br />
            West Palm Beach, FL 33406
            <br />
          </address>

          <a
            href="tel:+1561-264-2345"
            className="btn btn-outline-primary bg-white"
          >
            (561) 264-2345
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
