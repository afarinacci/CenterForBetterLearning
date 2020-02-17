import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Wivt() {
  const scrollTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  const checkmark = './../images/checkmark.svg';
  return (
    <div className="marginfornav">
      <div className="wideSectionBannerPrimary">
        <h1 className="text-center pageTitleOnDark">What is Vision Therapy?</h1>
      </div>
      <main className="container-fluid paddingAround max800">
        <p>
          Over 80% of the brain function is incorporated in the visual system.
          The highly functioning visual system is comprised of the eyes, brain,
          and body working effortlessly in coordination with one another. We
          begin building this complex system from the moment we start
          interacting with our environment. For some people, this happens in a
          step-by-step process, with each skill building upon the previous. For
          others, this system may be built on disorder, causing certain skills
          to be inefficient or ineffective. This disorder results in a patient
          that is struggling or taking longer than necessary to complete daily
          tasks. To improve the visual system, we need to embed, not just learn,
          new ways of taking in and processing visual information. We need to
          retrain the brain, and we do this by completing a vision therapy
          program.
        </p>
        <p>
          Vision therapy is an individualized program of neurosensory and
          neuromuscular activities prescribed by a developmental optometrist to
          develop, rehabilitate and enhance visual skills and processing. After
          completing your annual comprehensive eye exam to make sure your eyes
          are healthy, we will perform additional testing to determine the
          functionality of the visual system. These additional tests will tell
          us how your eyes move, focus, work together, and how well you process
          visual information. We take into account the results of these
          additional tests, your signs and symptoms, and your visual needs to
          build a custom vision therapy program for you. A series of activities
          are presented to the patient under very controlled circumstances,
          practiced for reinforcement, and then built upon for enhancement of
          visual skills. The goal is not to strengthen eye muscles! Your eye
          muscles are already incredibly strong. Rather, the goal is to get the
          visual system functioning at optimal levels so as to improve one's
          quality of life. The length of the program depends on your goals,
          severity of the diagnosed conditions, and your dedication to home
          practice. Once the program is completed and the new brain connections
          have been made, your visual system will continue to grow and develop.
        </p>
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

        <h5>
          Our goals for bringing organization to an incredibly complex system
          are simple:
        </h5>
        <ul className="checkListStyle">
          <li>
            Help you develop or improve fundamental visual skills and abilities
          </li>
          <li>Improve visual comfort, ease, and efficiency</li>
          <li>Change the way you process or interpret visual information</li>
        </ul>
        <br />

        <h5>
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

        <h5>
          We find most people have come to this website for one of the following reasons:
        </h5>
        <ol>
          <li>
            You are tired of the way things currently are, and you are desperate
            to find a solution.
          </li>
          <li>
            You are worried about you or your loved one's future in successfully navigating through life.
          </li>
          <li>
            Previous advice and other therapies you've tried have not eliminated your problem.
          </li>
        </ol>
        <br />
        
        <p>
          If you are still unsure if vision therapy is the right choice for you or
          your child. Please contact us at your earliest convenience. Our
          friendly and knowledgeable staff at Center for Better Learning will be
          glad to guide you through the process of determining if an undiagnosed
          visual problem is the source of your struggle.
        </p>
        <br />
        
        <p style={{fontStyle: 'italic'}}>
          Please visit our{' '}
          <Link to="/services" className="paragraphLink paragraphLinkPrimary" onClick={scrollTop}>
            services{' '}
            <FontAwesomeIcon
              icon={faExternalLinkAlt}
              style={{ fontSize: '.8em', color: 'var(--primary)' }}
            />
          </Link> page for information on each service we offer.
        </p>
      </main>
    </div>
  );
}

export default Wivt;
