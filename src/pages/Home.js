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
    <div>
      <picture>
        <source media="(max-width: 450px)" srcSet={childrenReading_w2400} />
        <source media="(min-width: 451px)" srcSet={childrenReading_w5743} />
        <img
          src={childrenReading_w5743}
          className="img-fluid"
          alt="Children Reading"
        ></img>
      </picture>

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
        <div className="col-12 col-md-6 bg-white wivt-fordoctors-col">
          <h4>For Patients</h4>
          <Link to="/what-is-vision-therapy">
            <Button color="primary" className="primary-btn" onClick={scrollTop}>
              Learn About Vision Therapy <FontAwesomeIcon icon={faArrowRight} />
            </Button>
          </Link>
        </div>
        <div className="col-12 col-md-6 bg-light wivt-fordoctors-col">
          <h4>For Doctors</h4>
          <Link to="/resources">
            <Button color="primary" className="primary-btn" onClick={scrollTop}>
              View All Resources <FontAwesomeIcon icon={faArrowRight} />
            </Button>
          </Link>
        </div>
      </div>

      <main className="container-fluid text-center">
        <h1 className="text-center pageTitle">Welcome</h1>
        <p>Thanks for visiting the Center for Better Learning website.</p>
        <br />
        <h5>
          Our <span className="missionVerbs">PASSION</span> is to bring
          awareness to the importance of synergy in the visual system by
          educating the community of the connection between the eyes, brain, and
          body.
        </h5>
        <br />
        <h5>
          Our <span className="missionVerbs">PURPOSE</span> is to provide
          innovative, evidenced based vision therapy services to those seeking
          improvement, development, or rehabilitation of visual function.
        </h5>
        <br />
        <h5>
          Our <span className="missionVerbs">PROMISE</span> is to rebuild the
          foundation and efficiency of your visual system to pave the way for a
          brighter future.
        </h5>
        <br />
      </main>
    </div>
  );
}

export default Home;
