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
            <h3 className="footerlocation">Coconut Creek</h3>
            <div>
              <address>
                <span>
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="footerIcon"
                  />
                </span>
                4171 W Hillsboro Blvd, Ste 13
                <br />
                Coconut Creek, FL 33703
                <br />
              </address>
            </div>
            <a href="tel:+1561-462-1245">
              <Button outline color="dark" className="footerBtn">
                <FontAwesomeIcon icon={faPhone} className="footerIcon" />
                (561) 462-1245
              </Button>
            </a>
          </div>
          <div className="col-12 col-lg-6 text-center ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.242939625798!2d-80.18354878496756!3d26.318631783387072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d91c7de52ad3b1%3A0xa72e0705bacc4e88!2s4171%20W%20Hillsboro%20Blvd%2C%20Coconut%20Creek%2C%20FL%2033073%2C%20USA!5e0!3m2!1sen!2s!4v1581398068070!5m2!1sen!2s"
              width="220"
              height="220"
              frameBorder="0"
              style={{ border: '2px solid rgb(249,249,249)' }}
              allowFullScreen=""
              title="CoconutCreekLocation"
              className="locationMap"
            ></iframe>
          </div>
        </div>
        <div className="footerCol col-12 col-md-6 row">
          <div className="col-12 col-lg-6 text-center ">
            <h3 className="footerlocation">West Palm Beach</h3>
            <div>
              <address>
                <span>
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="footerIcon"
                  />
                </span>
                3650 Forest Hill Blvd, Ste 2
                <br />
                West Palm Beach, FL 33406
                <br />
                <span style={{ fontStyle: 'italic' }}>
                  Located inside Premier Eye Center
                </span>
              </address>
            </div>
            <a href="tel:+1561-462-2356">
              <Button outline color="dark" className="footerBtn">
                <FontAwesomeIcon icon={faPhone} className="footerIcon" />
                (561) 462-2356
              </Button>
            </a>
          </div>
          <div className="col-12 col-lg-6 text-center ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.9259432077806!2d-80.0996689849606!3d26.650853483241118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8d7e2b2fda219%3A0x4a24362d573a4248!2s3650%20Forest%20Hill%20Blvd%20%232%2C%20West%20Palm%20Beach%2C%20FL%2033406%2C%20USA!5e0!3m2!1sen!2s!4v1580894192930!5m2!1sen!2s"
              width="220"
              height="220"
              frameBorder="0"
              style={{ border: '2px solid rgb(249,249,249)' }}
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
