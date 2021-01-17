import React from 'react';
import ApptForm from './../components/ApptForm';
import Helmet from 'react-helmet';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Appt() {
  return (
    <div>
      <Helmet>
        <title>Request an Appointment</title>
        <meta
          property="og:title"
          content="Center for Better Learning | Schedule an Appointment"
        />
        <meta
          property="og:url"
          content="https://www.centerforbetterlearning.com/request-appointment"
        />
      </Helmet>
      <div className="marginfornav">
        <div className="wideSectionBannerPrimary">
          <h1 className="text-center pageTitleOnDark">
            Schedule an Appointment
          </h1>
        </div>
        <div className="container-fluid" style={{ maxWidth: '900px' }}>
          <br />
          <h3>Book an appointment at the Coconut Creek Location</h3>
          <Button
            color="primary"
            className="buttonPrimary"
            onClick={() =>
              window.open(
                'https://outlook.office365.com/owa/calendar/CenterforBetterLearning@centerforbetterlearning.com/bookings/',
                '_blank'
              )
            }
          >
            Book Appointment <FontAwesomeIcon icon={faArrowRight} />
          </Button>
          <br />

          <iframe
            src="https://app.acuityscheduling.com/schedule.php?owner=21675469&location=8200%20S%20Jog%20Rd.%20Suite%20200%20Boynton%20Beach%2C%20FL%2033472"
            title="Schedule Appointment"
            width="100%"
            height="800"
            frameBorder="0"
          ></iframe>
          <script
            src="https://embed.acuityscheduling.com/js/embed.js"
            type="text/javascript"
          ></script>

          <br />
          <br />
          <h3>Book an appointment at the Boynton Beach Location</h3>
          <Button
            color="primary"
            className="buttonPrimary"
            onClick={() =>
              window.open(
                'https://outlook.office365.com/owa/calendar/CenterforBetterLearningBoyntonBeach@centerforbetterlearning.com/bookings/',
                '_blank'
              )
            }
          >
            Book Appointment <FontAwesomeIcon icon={faArrowRight} />
          </Button>
          <br />
          <br />
        </div>
        {/*  <main className="container-fluid page paddingAround max800 effect8">
          <div className="text-center" style={{ paddingBottom: '30px' }}>
            <h5>Please fill out the form below to request an appointment.</h5>
            <h5>We will get back to you shortly.</h5>
          </div>
          <ApptForm />
        </main> */}
      </div>
    </div>
  );
}

export default Appt;
