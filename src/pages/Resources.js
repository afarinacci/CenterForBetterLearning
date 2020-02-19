import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';

function Resources() {
  const optometrists_w1200 = '';
  const optometrists_w1600 = '';
  const teachers_w1200 = '';
  const teachers_w1600 = '';
  const physicalTherapists_w1200 = '';
  const physicalTherapists_w1600 = '';
  const psychologists_w1200 = '';
  const psychologists_w1600 = '';
  const scrollTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
  return (
    <div className="marginfornav">
      <div className="wideSectionBannerPrimary">
        <h1 className="text-center pageTitleOnDark">Services</h1>
      </div>
      <div className="container-fluid">
        <Row bg-light>
          <Col sm="12" md="6" className="allServicesCol">
            <picture>
              <source media="(max-width: 767px)" srcSet={optometrists_w1200} />
              <source media="(min-width: 768px)" srcSet={optometrists_w1600} />
              <img
                src={optometrists_w1600}
                className="img-fluid"
                alt="Optometrist"
              ></img>
            </picture>
          </Col>
          <Col sm="12" md="6" className="allServicesCol my-auto">
            <div
              className="paddingAround extraPaddingBottomPhone"
              style={{ paddingTop: '15px' }}
            >
              <h3>Optometrists</h3>
              <p>
                We will send a full report on all results from additional
                testing, periodic updates on their progress, and ultimately
                release the patient back to your care upon completion of their
                vision therapy program. A quick cover test, EOMs, and NPC can be
                the difference between a referral for discovering an undiagnosed
                visual problem or a child continuing to struggle in silence.
              </p>
              <a
                href="https://drive.google.com/file/d/1rvyzNxohvLjk32RrNOb3-HK8j51kSTh5/view?usp=sharing"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button color="primary" className="buttonPrimary">
                  <FontAwesomeIcon icon={faFileDownload} className="navIcon" />{' '}
                  Referral Form
                </Button>
              </a>
            </div>
          </Col>
        </Row>

        <Row bg-light>
          <Col sm="12" md={{ size: 6, order: 2 }} className="allServicesCol">
            <picture>
              <source media="(max-width: 767px)" srcSet={teachers_w1200} />
              <source media="(min-width: 768px)" srcSet={teachers_w1600} />
              <img
                src={teachers_w1600}
                className="img-fluid"
                alt="Teacher"
              ></img>
            </picture>
          </Col>
          <Col
            sm="12"
            md={{ size: 6, order: 1 }}
            className="allServicesCol my-auto"
          >
            <div className="paddingAround extraPaddingBottomPhone">
              <h3>Teachers &amp; Educators</h3>
              <p>
                Do you have any children in your class who do not seem to be
                performing up to their potential? Or you know a child is very
                bright, yet their grades do not meet that expectation? Too many
                children struggle unnecessarily from an undiagnosed vision
                problem. We offer FREE developmental vision screenings to
                children you suspect may have a learning related visual problem.
                Please fill out the referral form with the child’s
                parent/guardian to.
              </p>
              <a
                href="https://drive.google.com/file/d/1rvyzNxohvLjk32RrNOb3-HK8j51kSTh5/view?usp=sharing"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button color="primary" className="buttonPrimary">
                  <FontAwesomeIcon icon={faFileDownload} className="navIcon" />{' '}
                  Referral Form
                </Button>
              </a>
            </div>
          </Col>
        </Row>

        <Row bg-light>
          <Col sm="12" md="6" className="allServicesCol">
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet={physicalTherapists_w1200}
              />
              <source
                media="(min-width: 768px)"
                srcSet={physicalTherapists_w1600}
              />
              <img
                src={physicalTherapists_w1600}
                className="img-fluid"
                alt="Physical Occupational Therapist"
              ></img>
            </picture>
          </Col>
          <Col sm="12" md="6" className="allServicesCol my-auto">
            <div className="paddingAround extraPaddingBottomPhone">
              <h3>Physical/Occupational Therapists</h3>
              <p>
                functional vision problems and other deficits in motor skills.
                If you notice a patient hit a barrier in their progress and you
                think it may be due to an undiagnosed visual problem, please
                send them to us for a full developmental evaluation. Often once
                the vision problems are resolved, we can move forward with their
                therapy program and often have even better results.
              </p>
              <a
                href="https://drive.google.com/file/d/1rvyzNxohvLjk32RrNOb3-HK8j51kSTh5/view?usp=sharing"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button color="primary" className="buttonPrimary">
                  <FontAwesomeIcon icon={faFileDownload} className="navIcon" />{' '}
                  Referral Form
                </Button>
              </a>
            </div>
          </Col>
        </Row>

        <Row bg-light>
          <Col sm="12" md={{ size: 6, order: 2 }} className="allServicesCol">
            <picture>
              <source media="(max-width: 767px)" srcSet={psychologists_w1200} />
              <source media="(min-width: 768px)" srcSet={psychologists_w1600} />
              <img
                src={psychologists_w1600}
                className="img-fluid"
                alt="Psychologist"
              ></img>
            </picture>
          </Col>
          <Col
            sm="12"
            md={{ size: 6, order: 1 }}
            className="allServicesCol my-auto"
          >
            <div className="paddingAround extraPaddingBottomPhone">
              <h3>Psychologists</h3>
              <p>
                Anxiety, anger, frustration, inattention, and poor behavior are
                common reasons children are referred for a psychological
                evaluation. These behaviors are commonly rooted in an
                undiagnosed visual problem. We strongly believe a child should
                have a full developmental eye exam before any diagnosis of ADD/
                ADHD or other behavioral or mood disorder are diagnosed. We are
                always seeking like minded mental health providers to help guide
                our patients through the changes Vision Therapy brings to their
                life.
              </p>
              <a
                href="https://drive.google.com/file/d/1rvyzNxohvLjk32RrNOb3-HK8j51kSTh5/view?usp=sharing"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button color="primary" className="buttonPrimary">
                  <FontAwesomeIcon icon={faFileDownload} className="navIcon" />{' '}
                  Referral Form
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Resources;
