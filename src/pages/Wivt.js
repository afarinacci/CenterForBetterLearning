import React from 'react';
import ServiceContent from './../components/ServiceContent';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleRight,
  faCalendarCheck,
  faUserAlt,
  faClock
} from '@fortawesome/free-solid-svg-icons';
import justIcons from './../images/justIcons.png';

function Wivt() {
  const eyeExam =
    'https://lh3.googleusercontent.com/H3q5x9YoZpiCab4sMzCDyfmQf7VAGce9TBB2I0MWCE6oxNEfDi6U7r4-Zz8jv_LYv0XaSsQRDYiixv9J2mKb8a6kNt5qYfWo1dO3dz8Ext3gVF8VCUlSwWK5TGiBpGxTTofPq4qCUKw=w791';
  const girlWithSpecialGlasses =
    'https://lh3.googleusercontent.com/hBAZ1k15hEn84OrUvYtEneEwnmO5oaP4QnBwCD3Mpsgdw5DBNwEmujS-MsWnTq2Sn7aO97QeRLjrQS-Jr8hYTRM2Rq2MvRvevfJ24TACdxMrtrAnpHvmxQmmC6r6gkztoBsWznIs1Eg=w850';
  const motherAndDaughter_2400 =
    'https://lh3.googleusercontent.com/kxIsfKpZHImq7P8Bx5UnjlovfoThs2srB7NKilO8I2Dne2FRZgOQhBhli8QfVwTQiK_ZSfqNbkrMfwHTBNxsVSTJz5TMgNKsieIcSQfOZgg2G3ee3JuaSvGsm8KXHSDMqG9IcI_Rg64=w2400';
  const motherAndDaughter_1200 =
    'https://lh3.googleusercontent.com/1M5k13QCYKC565Qa7iG-tGtVuNqQeKywltEuK6hV8HhDz-IuOtCrPqQpdS8fMe02ThHqM2tMEVa5K_q75UHn3MTRFRYZt1_26OIomqYVAw806rgHspskB9M8hLMBQLtWoVZ-IX4mhRI=w1200';
  const childrenReadingGreen_2400 =
    'https://lh3.googleusercontent.com/b-7ELSe_9l524VPp4urevzCh2GyeEnUxTIdvVNzRhwmR3jxJsrGNW-FZbtiB1odKArbYArRLihHOWJhkC7GG82TtBfTaXr1obNms0tlZv0PaiMji4yuC_d7eRSoDNNHVWs4aN7uxj1w=w2400';
  const childrenReadingGreen_1200 =
    'https://lh3.googleusercontent.com/XwqIxTOPh1RD7y8ZStQLytJ4CHpbvEdh3fHuQI1dz-oO6DG14Tn8hfIZEK-YKVds6HLYkum_h3YrgLkKmchSjGBhphjnmg5bjBXE8nTOCWvzVwqyb6yg4vY12VN_2gFoRVTc0zg3Vtc=w1200';

  return (
    <ServiceContent
      title="What is Vision Therapy?"
      linktext="Vision Therapy Services"
    >
      <img
        src={justIcons}
        alt="eye, brain, and body"
        className="fullWidthImage"
      />

      <p>
        Over 80% of the brain function is incorporated in the visual system. The
        highly functioning visual system is comprised of the eyes, brain, and
        body working effortlessly in coordination with one another. We begin
        building this complex system from the moment we start interacting with
        our environment. For some people, this happens in a step-bystep process,
        with each skill building upon the previous. For others, this system may
        be built on disorder, causing certain skills to be inefficient or
        ineffective. This disorder results in a patient that is struggling or
        taking longer than necessary to complete daily tasks. To improve the
        visual system, we need to embed, not just learn, new ways of taking in
        and processing visual information. We need to retrain the brain, and we
        do this by completing a vision therapy program.
      </p>
      <br />
      <picture>
        <source media="(max-width: 450px)" srcSet={motherAndDaughter_1200} />
        <source media="(min-width: 451px)" srcSet={motherAndDaughter_2400} />
        <img
          src={motherAndDaughter_2400}
          className="fullWidthImage"
          alt="Mother helping frustrated daughter with schoolwork"
        ></img>
      </picture>
      <br />

      <Row>
        <Col sm="12" md={{ size: 6, order: 2 }}>
          <p>
            Vision therapy is an individualized program of neurosensory and
            neuromuscular activities prescribed by a developmental optometrist
            to develop, rehabilitate and enhance visual skills and processing.
            After completing your annual comprehensive eye exam to make sure
            your eyes are healthy, we will perform additional testing to
            determine the functionality of the visual system. These additional
            tests will tell us how your eyes move, focus, work together, and how
            well you process visual information. We take into account the
            results of these additional tests, your signs and symptoms, and your
            visual needs to build a custom vision therapy program for you.
          </p>
        </Col>
        <Col sm="12" md={{ size: 6, order: 1 }}>
          <picture>
            <img
              src={eyeExam}
              className="fullWidthImage"
              alt="Child getting an eye exam"
            ></img>
          </picture>
        </Col>
      </Row>
      <br />
      <Row>
        <Col sm="12" md="6">
          <p>
            Vision Therapy is a series of activities presented to the patient
            under very controlled circumstances, practiced for reinforcement,
            and then built upon for enhancement of visual skills. The goal is
            not to strengthen eye muscles! Your eye muscles are already
            incredibly strong. Rather, the goal is to get the visual system
            functioning at optimal levels to improve one's quality of life. Once
            the program is completed and the new brain connections have been
            made, your visual system will continue to grow and develop.
          </p>
        </Col>
        <Col sm="12" md="6">
          <picture>
            <img
              src={girlWithSpecialGlasses}
              className="fullWidthImage"
              alt="Child trying on special glasses"
            ></img>
          </picture>
        </Col>
      </Row>
      <br />
      <div>
        <Row className="wivtrow">
          <Col sm="12" md="3" className="wivtIconCol">
            <FontAwesomeIcon
              icon={faCalendarCheck}
              className="wivtIcon colorDanger"
            />
          </Col>
          <Col sm="12" md={{ size: 8 }}>
            <h5 className="colorDanger">
              How long does a Vision Therapy program last?
            </h5>
            <p>
              The average Vision Therapy program is 6-8 months. The length of
              treatment depends on severity of your specific diagnosis and the
              your goals.
            </p>
          </Col>
        </Row>
        <Row className="wivtrow">
          <Col sm="12" md="3" className="wivtIconCol">
            <FontAwesomeIcon icon={faClock} className="wivtIcon colorPrimary" />
          </Col>
          <Col sm="12" md={{ size: 8 }}>
            <h5 className="colorPrimary">How often are in-office sessions?</h5>
            <p>
              Vision therapy sessions are approximately 45 minutes long and are
              scheduled 1-2 times per week.
            </p>
          </Col>
        </Row>
        <Row className="wivtrow">
          <Col sm="12" md="3" className="wivtIconCol">
            <FontAwesomeIcon
              icon={faUserAlt}
              className="wivtIcon colorSuccess"
            />
          </Col>
          <Col sm="12" md={{ size: 8 }}>
            <h5 className="colorSuccess">What else is expected from me?</h5>
            <p>
              The success of a Vision Therapy program is highly dependent on the
              repetition and practice of the new skills learned during in-office
              sessions. We expect you to practice at home 3-4 days per week for
              20-30 minutes to complete program in estimated time. For those who
              cannot commit to consistent home practice, we recommend two in
              office sessions per week.
            </p>
          </Col>
        </Row>
      </div>
      <p>
        Our programs are designed based on exhaustive scientific research and
        years of continuing education and clinical experience. We know that
        vision therapy requires a serious commitment from you and your family,
        and we don't take that commitment lightly. We are here to guide you
        every step of the way, from the initial phone call through the
        graduation of the program. We want to truly change your life{' '}
        <em>forever</em>.
      </p>
      <br />
      <picture>
        <source media="(max-width: 450px)" srcSet={childrenReadingGreen_1200} />
        <source media="(min-width: 451px)" srcSet={childrenReadingGreen_2400} />
        <img
          src={childrenReadingGreen_2400}
          className="fullWidthImage"
          alt="Children reading books"
        ></img>
      </picture>
      <br />
      <h5 className="h5articleTitle">
        Our goals for bringing organization to an incredibly complex system are
        simple:
      </h5>
      <ul className="checkListStyleUL">
        <li className="checkListStyle">
          Help you develop or improve fundamental visual skills and abilities
        </li>
        <li className="checkListStyle">
          Improve visual comfort, ease, and efficiency
        </li>
        <li className="checkListStyle">
          Change the way you process or interpret visual information
        </li>
      </ul>
      <br />
      <h5 className="h5articleTitle">
        Research has demonstrated vision therapy can be an effective treatment
        option for:
      </h5>
      <ul>
        <li>Ocular motility dysfunctions (eye movement disorders)</li>
        <li>Non-strabismic binocular disorders (inefficient eye teaming)</li>
        <li>Strabismus (misalignment of the eyes)</li>
        <li>Amblyopia (poorly developed vision)</li>
        <li>Accommodative disorders (focusing problems)</li>
        <li>
          Visual information processing disorders, including visual-motor
          integration and integration with other sensory modalities
        </li>
        <li>Visual sequelae of acquired brain injury</li>
      </ul>
      <br />
      <h5 className="h5articleTitle">
        We find most people have come to this website for one of the following
        reasons:
      </h5>
      <ol>
        <li>
          You are tired of the way things currently are with your vision, and
          you are desperate to find a solution.
        </li>
        <li>
          You are worried about you or your loved one's future in successfully
          navigating through life.
        </li>
        <li>
          Other therapies and advice you've tried have not eliminated your
          problem.
        </li>
      </ol>
      <br />
      <p>
        If you are still unsure if vision therapy is the right choice for you or
        your child. Please contact us at your earliest convenience. Our friendly
        and knowledgeable staff at Center for Better Learning will be glad to
        guide you through the process of determining if an undiagnosed visual
        problem is a source of your problems.
      </p>
    </ServiceContent>
  );
}

export default Wivt;
