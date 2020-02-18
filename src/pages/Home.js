import React from 'react';
import { Button, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleRight,
  faCalendarAlt,
  faUserCircle,
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';
import homepageVideo from './../images/videostockfootage.mp4';
import blueLogo from './../images/LogoForBlue.png';

function Home() {
  const childrenReading_w5743 =
    'https://lh3.googleusercontent.com/9HuJjH30f-N5coKDoc-cQE2xoHCPOMo9vmCVveJJy7cT6dDDB-NvWGgUv2PzAZFRaL1jmmQWVQbthfsY3yaR7A1hRziZPibyx6cdSb5r2g0l92Hflzas1IRJuBdyVd58H3qM5RkwkYo=w5743';
  const childrenReading_w2400 =
    'https://lh3.googleusercontent.com/OhHP8S-3Vq_jiSIWVlJ_bTROaTgJtE1FDUOTRy_rOwyHQvs1vVgg0sNiQN-U3hXjBMyJQFpvqykkRVJUtMJGS3wKK1Q53DEpQPs5WWej_GuLm-CgEli9RVqfAb7KVDLnBxplToVjFY0=w2400';
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
      if (this.state.collapsed !== true) {
        this.toggleNavbar();
      }
      const element = document.getElementById('locations');
      const y = element.getBoundingClientRect().top + window.pageYOffset - 111;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };
  return (
    <div className="marginfornav">
      {/* <picture>
        <source media="(max-width: 450px)" srcSet={childrenReading_w2400} />
        <source media="(min-width: 451px)" srcSet={childrenReading_w5743} />
        <img
          src={childrenReading_w5743}
          className="img-fluid"
          alt="Children Reading"
        ></img>
      </picture> */}
      <div className="videoContainer d-flex justify-content-center">
        <video
          autoplay
          controls
          muted
          loop
          id="homepageVideo"
          poster={childrenReading_w5743}
        >
          <source src={homepageVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="videoTextContainer text-white text-center">
          <div className="videoTitle videoTitleFadeIn">
            Bright Child, Poor Grades?
          </div>
          <div className="videoSubtitleFadeIn">
            <div className="videoSubtitle">
              Your child may have an undetected vision problem.
              <br />
              Find out how to get them back on track.
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
          <Link to="/our-team" onClick={scrollTop} className="homeLinkPrimary">
            <h4 className="textShadow" style={{ margin: '12px 0px' }}>
              Meet the Team <FontAwesomeIcon icon={faAngleRight} />
            </h4>
          </Link>
        </Col>
        <Col sm="12" md={{ size: 3, offset: 1 }} className="homeLinksCol">
          <FontAwesomeIcon icon={faCalendarAlt} className="homeLinksIcon" />
          <Link
            to="/request-appointment"
            onClick={scrollTop}
            className="homeLinkPrimary"
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
          <Link onClick={scrollToLocations} className="homeLinkPrimary">
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
          Southeast Florida. Our goal is to raise awareness on the importance of
          efficient coordination between the eyes, brain, and body for peak
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
          We started the Center for Better Learning with a clear vision in mind:
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
            <Col sm="12" sm="12" md={{ size: 4 }} className="circleBlurbCol">
              <div className="circleBlurb circleBlurbPrimary">PURPOSE</div>
              <div className="circleBlurbText">
                Our purpose is to provide innovative, evidenced-based vision
                therapy services to those seeking improvement, development, or
                rehabilitation of visual function.
              </div>
            </Col>
            <Col sm="12" sm="12" md={{ size: 4 }} className="circleBlurbCol">
              <div className="circleBlurb circleBlurbSuccess">PROMISE</div>
              <div className="circleBlurbText">
                Our promise is to rebuild the foundation and efficiency of your
                visual system to pave the way for a brighter future.
              </div>
            </Col>
          </Row>
          {/* row*/}
        </div>
        {/*container*/}
      </Col>

      <div className="wideSectionBannerPrimary text-center">
          <img src={blueLogo} alt="Center for Better Learning" style={{ maxWidth: '500px' }} />
      </div>

      <div className="row wivt-fordoctors-row text-center">
        <div className="col-12 col-md-6 wivt-fordoctors-col wivt-fordoctors-col1 row align-items-center">
          <div className="col-12">
            <h1 className="textShadow">For Patients</h1>
            <Link to="/what-is-vision-therapy">
              <Button
                color="primary"
                className="primary-btn buttonPrimary"
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
            <h1 className="textShadow">For Professionals</h1>
            <Link to="/resources">
              <Button
                color="primary"
                className="primary-btn buttonPrimary"
                onClick={scrollTop}
              >
                View All Resources <FontAwesomeIcon icon={faAngleRight} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
