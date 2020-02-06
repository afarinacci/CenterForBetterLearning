import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'reactstrap';

function Footer() {
  return (
    <footer>
      <div className="row footerRow">
        <div id="locations" className="footerCol col-12 col-md-6 row">
          <div className="col-12 col-lg-6 text-center ">
            <h3>Coconut Creek</h3>
            <div>
              <address>
                <span>
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="footerIcon"
                  />
                </span>
                4147 Hillsboro Boulevard, Suite 13
                <br />
                Coconut Creek, FL 33703
                <br />
              </address>
            </div>
            <a href="tel:+1561-264-1245">
              <Button outline color="primary" className="footerBtn">
                <FontAwesomeIcon icon={faPhone} className="footerIcon" />
                (561) 264-1245
              </Button>
            </a>
          </div>
          <div className="col-12 col-lg-6 text-center ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.258638795866!2d-80.18277158496754!3d26.318123283387358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d91c875ee26d09%3A0xb7deb2e84fa680a9!2s4147%20W%20Hillsboro%20Blvd%2C%20Coconut%20Creek%2C%20FL%2033073%2C%20USA!5e0!3m2!1sen!2s!4v1580954921167!5m2!1sen!2s"
              width="220"
              height="220"
              frameBorder="0"
              style={{ border: '2px solid white' }}
              allowFullScreen=""
              title="CoconutCreekLocation"
              className="locationMap"
            ></iframe>
          </div>
        </div>
        <div className="footerCol col-12 col-md-6 row">
          <div className="col-12 col-lg-6 text-center ">
            <h3>West Palm Beach</h3>
            <div>
              <address>
                <span>
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="footerIcon"
                  />
                </span>
                3650 Forest Hill Boulevard, Suite 2
                <br />
                West Palm Beach, FL 33406
                <br />
                <span style={{ fontStyle: 'italic' }}>
                  Located inside Premier Eye Center
                </span>
              </address>
            </div>
            <a href="tel:+1561-264-2345">
              <Button outline color="primary" className="footerBtn">
                <FontAwesomeIcon icon={faPhone} className="footerIcon" />
                (561) 264-2345
              </Button>
            </a>
          </div>
          <div className="col-12 col-lg-6 text-center ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.9259432077806!2d-80.0996689849606!3d26.650853483241118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8d7e2b2fda219%3A0x4a24362d573a4248!2s3650%20Forest%20Hill%20Blvd%20%232%2C%20West%20Palm%20Beach%2C%20FL%2033406%2C%20USA!5e0!3m2!1sen!2s!4v1580894192930!5m2!1sen!2s"
              width="220"
              height="220"
              frameBorder="0"
              style={{ border: '2px solid white' }}
              allowFullScreen=""
              title="WestPalmLocation"
              className="locationMap"
            ></iframe>
          </div>
        </div>
      </div>
      <hr
        style={{ margin: '2px', border: '1px solid rgba(255,255,255, 0.5)' }}
      />
      <div className="row footerRow">
        <div className="col-12 d-flex justify-content-center ">
          <div className="hours">
            <h5 style={{ fontWeight: 'bold' }}>OFFICE HOURS:</h5>
            Mon: 9:00 AM - 6:00 PM
            <br />
            Tue: 9:00 AM - 6:00 PM
            <br />
            Wed: 9:00 AM - 6:00 PM
            <br />
            Thu: 9:00 AM - 6:00 PM
            <br />
            Fri: 9:00 AM - 6:00 PM
            <br />
            Sat: 9:00 AM - 1:00 PM
            <br />
            Sun: <span style={{ fontStyle: 'italic' }}>Closed</span>
            <br />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
