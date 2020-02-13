import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

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
    const id = 'locations';
    const yOffset = -170;
    const element = document.getElementById(id);
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
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
      {/* <video width="800px">
        <source src="./../images/videostockfootage.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/zkVO56Rjb5c?controls=0"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <div className="row homeLinks grid-divider grid-divider-light">
        <div className="col-md-4 homeLinksSection">
          <div className="card text-center bg-primary">
            <div className="card-body">
              <h5 className="card-title homeLinksTitle">Meet the Team</h5>
              <div>
                <Link to="/our-team">
                  <Button
                    outline
                    color="primary"
                    onClick={scrollTop}
                    className="homeLinksButton"
                  >
                    Our Staff <FontAwesomeIcon icon={faArrowRight} />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 homeLinksSection">
          <div className="card text-center bg-primary">
            <div className="card-body">
              <h5 className="card-title homeLinksTitle">
                Request an Appointment
              </h5>
              <div>
                <Link to="/request-appointment">
                  <Button
                    outline
                    color="primary"
                    className="homeLinksButton"
                    onClick={scrollTop}
                  >
                    Appointments <FontAwesomeIcon icon={faArrowRight} />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 homeLinksSection">
          <div className="card text-center bg-primary">
            <div className="card-body">
              <h5 className="card-title homeLinksTitle">Find Us</h5>
              <div>
                <Button
                  outline
                  color="primary"
                  className="homeLinksButton"
                  onClick={scrollToLocations}
                >
                  Locations <FontAwesomeIcon icon={faArrowRight} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row wivt-fordoctors-row text-center">
        <div className="col-12 col-md-6 bg-light wivt-fordoctors-col">
          <h4 style={{ color: 'var(--dark)' }}>For Patients</h4>
          <Link to="/what-is-vision-therapy">
            <Button color="primary" className="primary-btn" onClick={scrollTop}>
              Learn About Vision Therapy <FontAwesomeIcon icon={faArrowRight} />
            </Button>
          </Link>
        </div>
        <div className="col-12 col-md-6 bg-secondary wivt-fordoctors-col">
          <h4 style={{ color: 'var(--light)' }}>For Professionals</h4>
          <Link to="/resources">
            <Button color="primary" className="primary-btn" onClick={scrollTop}>
              View All Resources <FontAwesomeIcon icon={faArrowRight} />
            </Button>
          </Link>
        </div>
      </div>

      <main className="container-fluid paddingAround max800">
        <h1 className="text-center pageTitle">Welcome</h1>
        <p>
          We are proud to offer Vision Therapy serves to our community. We are
          here to educate and bring awareness to the importance of efficient
          coordination of the eyes, brain, and body for peak visual performance.
          Please take some time to learn about the various aspects of your
          visual system and take the interactive symptoms checklist to determine
          if you or your child would benefit from Vision Therapy services. We
          can help you or your child meet the demanding visual needs of our
          everyday life. Center for Better Learning was developed with a clear
          vision in mind:
        </p>
        <br />

        <div class="card-deck text-center">
          <div class="card text-white bg-primary mb-3">
            <div class="card-header">
              <h3 className="missionVerbs">PASSION</h3>
            </div>
            <div class="card-body">
              <p class="card-text">
                Our passion is to bring awareness to the importance of synergy
                in the visual system by educating the community about the
                connection between the eyes, brain, and body.
              </p>
            </div>
          </div>
          <div class="card text-white bg-danger mb-3">
            <div class="card-header">
              <h3 className="missionVerbs">PURPOSE</h3>
            </div>
            <div class="card-body">
              <p class="card-text">
                Our purpose is to provide innovative, evidenced-based vision
                therapy services to those seeking improvement, development, or
                rehabilitation of visual function.
              </p>
            </div>
          </div>
          <div class="card text-white bg-success mb-3">
            <div class="card-header">
              <h3 className="missionVerbs">PROMISE</h3>
            </div>
            <div class="card-body">
              <p class="card-text">
                Our promise is to rebuild the foundation and efficiency of your
                visual system to pave the way for a brighter future.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
