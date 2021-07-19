import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faMapMarkerAlt,
  faCopyright,
  faCalendarAlt,
  faEnvelope,
  faUserCircle,
  faAngleRight,
  faQuestionCircle,
  faCreditCard,
  faFileDownload,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookSquare,
  faInstagram,
  faGoogle,
  faYelp,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { Button, NavLink } from 'reactstrap';
import privacyPolicy from './../forms/Notice_of_Privacy_Practices.pdf';

function Footer() {
  const d = new Date();
  const currentYear = d.getFullYear();
  const scrollTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
  return (
    <footer>
      <div className="wideSectionFooterPrimary">
        <h5 style={{ margin: '0px' }}>
          <Link
            to="/request-appointment"
            className="paragraphLinkWhite homeLinkPrimarySpace"
            onClick={scrollTop}
          >
            Schedule an Evaluation <FontAwesomeIcon icon={faAngleRight} />
          </Link>
        </h5>
      </div>
      <div className="row footerRow">
        <div id="locations" className="footerCol col-12 col-sm-6 row">
          <div className="footerCol col-12 col-lg-6 footerColLocationName">
            <h3 className="footerlocation">Coconut Creek</h3>
            <div>
              <address>
                <span>
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="footerIcon"
                  />
                </span>
                <span itemProp="address">
                  4171 W Hillsboro Blvd, Ste 10
                  <br />
                  Coconut Creek, FL 33073
                </span>
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
          <div className="footerCol col-12 col-lg-6 footerMapCol">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.242939625798!2d-80.18354878496756!3d26.318631783387072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d91c7de52ad3b1%3A0xa72e0705bacc4e88!2s4171%20W%20Hillsboro%20Blvd%2C%20Coconut%20Creek%2C%20FL%2033073%2C%20USA!5e0!3m2!1sen!2s!4v1581398068070!5m2!1sen!2s"
              width="220"
              height="220"
              frameBorder="0"
              style={{ border: '2px solid rgb(249,249,249)' }}
              allowFullScreen=""
              title="CoconutCreekLocation"
            ></iframe>
          </div>
        </div>
        <div className="footerCol col-12 col-sm-6 row">
          <div className="footerCol col-12 col-lg-6 footerColLocationName">
            <h3 className="footerlocation">Boynton Beach</h3>
            <div>
              <address>
                <span>
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="footerIcon"
                  />
                </span>
                <span itemProp="address">
                  8200 S Jog Rd Suite 200
                  <br />
                  Boynton Beach, FL 33472
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
          <div className="footerCol col-12 col-lg-6 footerMapCol">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3568.937297049948!2d-80.15158878496258!3d26.554282183283295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d926d3ef6ae225%3A0x521c4b4e548b8bd0!2s8200%20Jog%20Rd%20%23200%2C%20Boynton%20Beach%2C%20FL%2033472!5e0!3m2!1sen!2sus!4v1610817264108!5m2!1sen!2sus"
              width="220"
              height="220"
              frameBorder="0"
              style={{ border: '2px solid rgb(249,249,249)' }}
              allowFullScreen=""
              title="BoyntonLocation"
            ></iframe>
          </div>
        </div>
      </div>
      <hr
        style={{ margin: '2px', border: '1px solid rgba(255,255,255, 0.5)' }}
      />
      <div className="row footerRow footerBottomSection">
        <div className="col-12 col-sm-6 col-md-4 footerCol1">
          <h6 className="footerLinkDiv">
            <Link to="/our-team" onClick={scrollTop} className="footerLink">
              <FontAwesomeIcon icon={faUserCircle} className="footerLinkIcon" />
              Our Team
            </Link>
          </h6>
          <h6 className="footerLinkDiv">
            <Link to="/contact-us" onClick={scrollTop} className="footerLink">
              <FontAwesomeIcon icon={faEnvelope} className="footerLinkIcon" />
              Contact Us
            </Link>
          </h6>
          <h6 className="footerLinkDiv">
            <Link
              to="/request-appointment"
              onClick={scrollTop}
              className="footerLink"
            >
              <FontAwesomeIcon
                icon={faCalendarAlt}
                className="footerLinkIcon"
              />
              Schedule an Appointment
            </Link>
          </h6>
          <h6 className="footerLinkDiv">
            <Link to="/faqs" onClick={scrollTop} className="footerLink">
              <FontAwesomeIcon
                icon={faQuestionCircle}
                className="footerLinkIcon"
              />
              Frequently Asked Questions
            </Link>
          </h6>
          <h6 className="footerLinkDiv">
            <Link to="/payments" onClick={scrollTop} className="footerLink">
              <FontAwesomeIcon icon={faCreditCard} className="footerLinkIcon" />
              Payment Options
            </Link>
          </h6>
          <h6 className="footerLinkDiv">
            <a href={privacyPolicy} download className="footerLink">
              <FontAwesomeIcon
                icon={faFileDownload}
                className="footerLinkIcon"
              />
              Privacy Policy
            </a>
          </h6>
        </div>
        <div className="col-12 col-sm-6 col-md-4 footerCol2">
          <h4 style={{ fontWeight: 'bold' }}>Office Hours</h4>
          <div className="hours">
            <time dateTime="Mo 09:00-18:00">Mon: 10:00 AM - 7:00 PM</time>
          </div>
          <div className="hours">
            <time dateTime="Tu 09:00-18:00">Tue: 10:00 AM - 7:00 PM</time>
          </div>
          <div className="hours">
            <time dateTime="We 09:00-18:00">Wed: 10:00 AM - 7:00 PM</time>
          </div>
          <div className="hours">
            <time dateTime="Th 09:00-18:00">Thu: 10:00 AM - 7:00 PM</time>
          </div>
          <div className="hours">
            <time dateTime="Fr 09:00-18:00">Fri: 10:00 AM - 7:00 PM</time>
          </div>
          <div className="hours">
            <time dateTime="Sa 09:00-13:00">Sat: 10:00 AM - 1:00 PM</time>
          </div>
          <div className="hours">
            Sun: <span style={{ fontStyle: 'italic' }}>Closed</span>
          </div>
        </div>
        <div className="col-12 col-md-4 row footerCol3">
          <div className="col-12" style={{ padding: '0px 0px 30px 0px' }}>
            <a
              href="https://www.facebook.com/centerforbetterlearning/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faFacebookSquare}
                size="2x"
                className="socialIcon"
              />
            </a>
            <a
              href="https://www.instagram.com/centerforbetterlearning/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                size="2x"
                className="socialIcon socialIconLeftPadding"
              />
            </a>
            <a
              href="https://www.google.com/search?sxsrf=ACYBGNSr-_cZKWegdHZRZ2Z7LSU_ulWfpQ%3A1581735938989&source=hp&ei=AmBHXsuBOo-HoATG_bKQCQ&q=center+for+better+learning+coconut+creek&btnK=Google+Search#btnK=Google%20Search"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faGoogle}
                size="2x"
                className="socialIcon socialIconLeftPadding"
              />
            </a>
            <a
              href="https://www.yelp.com/biz/premier-eye-center-west-palm-beach"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faYelp}
                size="2x"
                className="socialIcon socialIconLeftPadding"
              />
            </a>
          </div>
          <div className="col-12 align-self-md-end" style={{ padding: '0px' }}>
            <FontAwesomeIcon icon={faCopyright} /> {currentYear} Center for
            Better Learning
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
