import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import referralForm from './../forms/VT_Evaluation_Referral_Form_PROFESSIONALS.pdf';
import optometrist from './../images/optometrist.png';
import teacher from './../images/teacher.png';
import therapist from './../images/therapist.png';
import psychologist from './../images/psychologist.png';

function Resources() {
  const optometrists_w1200 =
    'https://lh3.googleusercontent.com/MJNDsiDJfiEGfNsCYYHU4tA2WGTa8vhVAp1DsLawy3GDZNCG58QUD17OfuBVZDSzw66MxTCyc-wcU_nd-_LgE3s-ReDPk2C_EumIfnf6eRZiBMkjQLuLTL8L77Dc2sc9B_Mx0g35b0E=w1200';
  const optometrists_w1600 =
    'https://lh3.googleusercontent.com/KAGlVUW8siHlX-_p_-Hy4O2L8xbzLhURj5tQoxa2LgxfyDvQM5QIB6nzbSm2Z1xG0XQy3Ec4dC2KRgZm97z3BbcT6J_0Cui0BdfG5x27r34UDIrV48rlJ23avuArw0-e3nefZPwtboY=w1600';
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
        <h1 className="text-center pageTitleOnDark">Professional Resources</h1>
      </div>
      <div className="container-fluid" style={{ maxWidth: '900px' }}>
        <Row bg-light>
          <Col sm="12" md="6" className="allServicesCol">
            <img
              src={optometrist}
              alt="Optometrist"
              className="resourcesImage"
            />
            <div
              style={{ color: 'var(--secondary)', fontSize: '.5rem' }}
              className="text-center"
            >
              Icons made by{' '}
              <a
                href="https://www.flaticon.com/authors/freepik"
                title="Freepik"
              >
                Freepik
              </a>{' '}
              from{' '}
              <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </a>
            </div>
          </Col>
          <Col sm="12" md="6" className="allServicesCol my-auto">
            <div
              className="paddingAround extraPaddingBottomPhone"
              style={{ paddingTop: '15px' }}
            >
              <h3>Optometrists</h3>
              <p>
                Identifying and referring patients with functional vision
                problem to a behavioral optometrist will gain you a patient for
                life. We will send a full report on all results from additional
                testing, periodic updates on their progress, and ultimately
                release the patient back to your care upon completion of their
                vision therapy program. A quick cover test, EOMs, and NPC can be
                the difference between a referral for discovering an undiagnosed
                visual problem or a child continuing to struggle in silence.
              </p>
              <a href={referralForm} download="VT_referral_form">
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
            <img src={teacher} alt="Teacher" className="resourcesImage" />
            <div
              style={{ color: 'var(--secondary)', fontSize: '.5rem' }}
              className="text-center"
            >
              Icons made by{' '}
              <a
                href="https://www.flaticon.com/authors/freepik"
                title="Freepik"
              >
                Freepik
              </a>{' '}
              from{' '}
              <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </a>
            </div>
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
                Please fill out the referral form with the child’s parent/
                guardian to.
              </p>
              <a href={referralForm} download="VT_referral_form">
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
            <img
              src={therapist}
              alt="Physical therapist"
              className="resourcesImage"
            />
            <div
              style={{ color: 'var(--secondary)', fontSize: '.5rem' }}
              className="text-center"
            >
              Icons made by{' '}
              <a
                href="https://www.flaticon.com/authors/freepik"
                title="Freepik"
              >
                Freepik
              </a>{' '}
              from{' '}
              <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </a>
            </div>
          </Col>
          <Col sm="12" md="6" className="allServicesCol my-auto">
            <div className="paddingAround extraPaddingBottomPhone">
              <h3>Physical/Occupational Therapists</h3>
              <p>
                We work closely with OT’s and PTs to provide full comprehensive
                care to our patients. There is often overlap between functional
                vision problems and other deficits in motor skills. If you
                notice a patient hit a barrier in their progress and you think
                it may be due to an undiagnosed visual problem, please send them
                to us for a full developmental evaluation. Often once the vision
                problems are resolved, we can move forward with their therapy
                program and often have even better results.
              </p>
              <a href={referralForm} download="VT_referral_form">
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
            <img
              src={psychologist}
              alt="Psychologist"
              className="resourcesImage"
            />
            <div
              style={{ color: 'var(--secondary)', fontSize: '.5rem' }}
              className="text-center"
            >
              Icons made by{' '}
              <a
                href="https://www.flaticon.com/authors/freepik"
                title="Freepik"
              >
                Freepik
              </a>{' '}
              from{' '}
              <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </a>
            </div>
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
              <a href={referralForm} download="VT_referral_form">
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
