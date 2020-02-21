import React from 'react';
import Helmet from 'react-helmet';
import { Button, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleRight,
  faCalendarAlt,
  faUserCircle,
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';
import blueLogo from './../images/LogoForBlue.png';
import homepageVideo from './../images/childfrustrated_33mb.mov';

function Home() {
  const childFrustrated =
    'https://lh3.googleusercontent.com/T073UnafXcAf2dnCrjOpmjUXc3O9JZ4H_bx4GXBB0nALZ_SFJR-qEcTG3SE-A0NJORqj96aYUyIVtX-V9qinizbCdMTQ72XIl8UJ3HwMsU5eyhJigF2Xr_tzipXjVIv-rv7g_pQ7Ans=w2400';
  const childFrustrated_small =
    'https://lh3.googleusercontent.com/VTCihepZ9i9HrdHFw5YpidjbF7a6GmyEzDL_HwZ7GJrfJu6gkD40nz0YFwFm3hk0Ku_XAbq32BtUKcZK3CSB-_UdM_ZIVAclUIzIIqR5np66yrT32lk76rJNLIemuZts8zSUfuWvTUI=w1200';
  const scrollTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
  const scrollToLocations = () => {
    if (document.body.clientWidth > 767) {
      const yOffset = document
        .getElementById('fixedNav')
        .getBoundingClientRect().height;
      const element = document.getElementById('locations');
      const y =
        element.getBoundingClientRect().top + window.pageYOffset - yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      const element = document.getElementById('locations');
      const y = element.getBoundingClientRect().top + window.pageYOffset - 99;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };
  return (
    <div>
      <Helmet>
        <title>Center for Better Learning | Dr. Christina Murray, O.D.</title>
        <meta
          property="og:title"
          content="Center for Better Learning | Dr. Christina Murray, O.D."
        />
        <link rel="canonical" href="https://www.centerforbetterlearning.com" />
        <meta
          property="og:url"
          content="https://www.centerforbetterlearning.com"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Vision Therapy for Learning Related Visual Problems, Amblyopia, Strabismus, Acquired Brain Injury, and Sports Vision Training. Located in South Florida. Request an appointment today!"
        />
        <meta
          name="description"
          content="Vision Therapy for Learning Related Visual Problems, Amblyopia, Strabismus, Acquired Brain Injury, and Sports Vision Training. Located in South Florida. Request an appointment today!"
        />
      </Helmet>
      <div className="marginfornav">
        <div className="videoContainer d-flex justify-content-center">
          <video
            loop
            autoPlay
            muted
            id="homepageVideo"
            poster={childFrustrated}
          >
            <source src={homepageVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="videoTextContainer text-white text-center">
            <div className="videoTitle videoTitleFadeIn">
              Bright Child, Poor Grades?
            </div>

            <div className="videoSubtitleFadeIn1">
              <div className="videoSubtitle1">
                Your child may have an undetected vision problem.
              </div>
            </div>
            <div className="videoSubtitleFadeIn2">
              <div className="videoSubtitle2">
                We can help your child reach their full potential.
              </div>
              <Link to="/services/learning-related-visual-problems">
                <Button
                  outline
                  color="primary"
                  onClick={scrollTop}
                  className="videoButtonPrimary shrinkingButton"
                >
                  Learn More <FontAwesomeIcon icon={faAngleRight} />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <Row
          className="backgroundTextureDark text-center justify-content-center homeLinksRow"
          style={{ color: 'white' }}
        >
          <Col sm="12" md={{ size: 3 }} className="homeLinksCol">
            <FontAwesomeIcon icon={faUserCircle} className="homeLinksIcon" />
            <Link
              to="/our-team"
              onClick={scrollTop}
              className="homeLinkPrimary homeLinkPrimarySpace"
            >
              <h4 className="textShadow" style={{ margin: '12px 0px' }}>
                Meet Our Team <FontAwesomeIcon icon={faAngleRight} />
              </h4>
            </Link>
          </Col>
          <Col sm="12" md={{ size: 3, offset: 1 }} className="homeLinksCol">
            <FontAwesomeIcon icon={faCalendarAlt} className="homeLinksIcon" />
            <Link
              to="/request-appointment"
              onClick={scrollTop}
              className="homeLinkPrimary homeLinkPrimarySpace"
            >
              <h4 className="textShadow" style={{ margin: '12px 0px' }}>
                Request an{' '}
                <span style={{ whiteSpace: 'nowrap' }}>
                  Appointment <FontAwesomeIcon icon={faAngleRight} />
                </span>
              </h4>
            </Link>
          </Col>
          <Col sm="12" md={{ size: 3, offset: 1 }} className="homeLinksCol">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="homeLinksIcon" />
            <Link
              onClick={scrollToLocations}
              className="homeLinkPrimary homeLinkPrimarySpace"
            >
              <h4 className="textShadow" style={{ margin: '12px 0px' }}>
                Locations <FontAwesomeIcon icon={faAngleRight} />
              </h4>
            </Link>
          </Col>
        </Row>

        <Col className="container-fluid paddingAround max800">
          <h1 className="text-center pageTitleHomepage">Welcome</h1>
          <p>
            We are proud to offer Vision Therapy services to our community of
            Southeast Florida. Our goal is to raise awareness on the importance
            of efficient coordination between the eyes, brain, and body for peak
            visual performance.
          </p>
          <p>
            Please take some time to learn about the various aspects of your
            visual system and take the interactive{' '}
            <Link
              to="/symptoms"
              className="paragraphLinkPrimary"
              onClick={scrollTop}
            >
              symptoms checklist
            </Link>{' '}
            to determine if you or your child would benefit from Vision Therapy
            services. We can help you or your child meet the demanding visual
            needs of our everyday life.
          </p>
          <p>
            We started the Center for Better Learning with a clear vision in
            mind:
          </p>
          <br />
          <div className="container text-center">
            <Row className="justify-content-center">
              <Col sm="12" md={{ size: 4 }} className="circleBlurbCol">
                <div className="circleBlurb circleBlurbDanger">PASSION</div>
                <div className="circleBlurbText">
                  Our passion is to bring awareness to the importance of synergy
                  in the visual system by educating the community about the
                  connection between the eyes, brain, and body.
                </div>
              </Col>
              <Col sm="12" md={{ size: 4 }} className="circleBlurbCol">
                <div className="circleBlurb circleBlurbPrimary">PURPOSE</div>
                <div className="circleBlurbText">
                  Our purpose is to provide innovative, evidenced-based vision
                  therapy services to those seeking improvement, development, or
                  rehabilitation of visual function.
                </div>
              </Col>
              <Col sm="12" md={{ size: 4 }} className="circleBlurbCol">
                <div className="circleBlurb circleBlurbSuccess">PROMISE</div>
                <div className="circleBlurbText">
                  Our promise is to rebuild the foundation and efficiency of
                  your visual system to pave the way for a brighter future.
                </div>
              </Col>
            </Row>
            {/* row*/}
          </div>
          {/*container*/}
        </Col>

        <div className="wideSectionBannerPrimary text-center">
          <img
            src={blueLogo}
            alt="Center for Better Learning"
            style={{ maxWidth: '500px', width: '100%', height: 'auto' }}
          />
        </div>

        <div className="row wivt-fordoctors-row text-center">
          <div className="col-12 col-md-6 wivt-fordoctors-col wivt-fordoctors-col1 row align-items-center">
            <div className="col-12">
              <h1>For Patients</h1>
              <Link to="/what-is-vision-therapy">
                <Button
                  outline
                  color="primary"
                  className="videoButtonPrimary"
                  onClick={scrollTop}
                >
                  Learn About Vision Therapy{' '}
                  <FontAwesomeIcon icon={faAngleRight} />
                </Button>
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-6 wivt-fordoctors-col wivt-fordoctors-col2 row align-items-center">
            <div className="col-12">
              <h1>For Professionals</h1>
              <Link to="/resources">
                <Button
                  outline
                  color="primary"
                  className="videoButtonPrimary"
                  onClick={scrollTop}
                >
                  View All Resources <FontAwesomeIcon icon={faAngleRight} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
