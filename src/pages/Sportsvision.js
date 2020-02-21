import React from 'react';
import ServiceContent from './../components/ServiceContent';
import { Row, Col } from 'reactstrap';

function Sportsvision() {
  const baseball_w1200 =
    'https://lh3.googleusercontent.com/YipAhFDdRLBB4citGpvBT9GzMECMMS-3pSpp28murcJHtpRpiIYrNScH1wG8bwcZLNxr42C4rxaEOZ7gkZjEo62iZf-aIOA820F8250FnVAbBXIoY3-0sq1WJR7-CnjMD3Xeg9r3hpk=w1200';
  const baseball_w1600 =
    'https://lh3.googleusercontent.com/Y4QIanrNTpMhAKiLLxuu0KXZK5kxFjXuPi0PLvLWqxbm_1m8H9XAxx9C_Gt8subQacSDJ_O1umc79axS5DGVUS9eASN36MhOlCe7_-GWpzPNfJZcZip5FA9cp-SS3_UGg--t1pro7gE=w1600';
  return (
    <ServiceContent
      title="Sports Vision"
      linktext="Learn about other services we offer"
      url="services/sports-vision"
      description="Sports vision training (VT) can be used by athletes of any age and any
        level of sports to gain an upper hand on the competition."
    >
      <h3 className="h5articleTitle">Sports Vision Training</h3>
      <p>
        Sports vision training (VT) can be used by athletes of any age and any
        level of sports to gain an upper hand on the competition. Most players
        have the speed, strength and endurance needed to play the sports; yet,
        it is the enhancement in visual processing skills and superior reaction
        time that distinguishes the great athletes from the good athletes.
        Sports VT helps athletes develop high-caliber visual processing
        functions, giving the extremely skilled athletes the ability to make
        prompt, game-changing decisions that result in a win. Improved visual
        reaction speed grants the athlete the ability to process the game in
        "slow motion" so that they may be able to foresee and act with increased
        accuracy and split-second timing.
      </p>
      <br />
      <h5 className="h5articleTitle">
        Our program focuses on improving the skills used during competition.
        These skills include but are not limited to:
      </h5>
      <ul>
        <li>Eye tracking</li>
        <li>Visual processing speed (reaction time)</li>
        <li>Eye focusing</li>
        <li>Binocular vision (depth perception)</li>
        <li>Visual attention (central and peripheral vision)</li>
      </ul>
      <br />
      <p>
        Upon evaluation, our doctor will assess visual performance as it
        pertains to the particular sport and position played. The information
        gathered from the assessment will be used to develop a personal vision
        profile for the athlete. We will be able determine our athletes visual
        strengths and weaknesses and improve upon these vulnerabilities to help
        them become an elite athlete. Sports VT is a great addition to training
        for any player that wants to boost their performance to new heights.
      </p>
      <br />

      <Row>
        <Col sm="12" md="6">
          <picture>
            <source media="(max-width: 767px)" srcSet={baseball_w1200} />
            <source media="(min-width: 768px)" srcSet={baseball_w1600} />
            <img
              src={baseball_w1600}
              className="fullWidthImage"
              alt="Baseball player"
            ></img>
          </picture>
        </Col>
        <Col sm="12" md="6">
          <h5 className="h5articleTitle">
            The examination allows our doctor to:
          </h5>
          <ul>
            <li>Determine speed and accuracy of visual input</li>
            <li>
              Prescribe corrective lenses that athlete may need to see better
              than 20/20
            </li>
            <li>
              Gauge the readiness of the visual system to interpret the game
            </li>
          </ul>
        </Col>
      </Row>
      <br />

      <p>
        Upon completion of the sports vision therapy program, our mission is to
        make good athletes great! By enhancing our athletes visual processing
        skills, we are improving their reaction time, hand-eye coordination, and
        overall performance.
      </p>
    </ServiceContent>
  );
}

export default Sportsvision;
