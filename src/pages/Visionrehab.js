import React from 'react';
import ServiceContent from './../components/ServiceContent';
import { Row, Col } from 'reactstrap';

function Visionrehab() {
  const eyeExam_1200 =
    'https://lh3.googleusercontent.com/MJNDsiDJfiEGfNsCYYHU4tA2WGTa8vhVAp1DsLawy3GDZNCG58QUD17OfuBVZDSzw66MxTCyc-wcU_nd-_LgE3s-ReDPk2C_EumIfnf6eRZiBMkjQLuLTL8L77Dc2sc9B_Mx0g35b0E=w1200';
  const eyeExam_1600 =
    'https://lh3.googleusercontent.com/KAGlVUW8siHlX-_p_-Hy4O2L8xbzLhURj5tQoxa2LgxfyDvQM5QIB6nzbSm2Z1xG0XQy3Ec4dC2KRgZm97z3BbcT6J_0Cui0BdfG5x27r34UDIrV48rlJ23avuArw0-e3nefZPwtboY=w1600';
  const football_w949 =
    'https://lh3.googleusercontent.com/UYf8yOPFVwWbcB9KsBsaDn4XaYu8JAWKZKwiaWHpEIqbJ3ytzI3axRTLCgiY5aWixXwy972l6hRNVI00tf3OAkJE5Tx7TnlAttfoIXR65VfH7SgbMuwxAjRcri7Urn3zmzGKTZ3wJ_k=w949';
  const football_w1266 =
    'https://lh3.googleusercontent.com/_MdveahU5PeJPF_9PB-yGbEfDGTznEML8KG5_Vf6lEAvwf1CgzljeAINofGlSmAIvt1idSxPIb7V1b0TgkD6HREIaGuCKeHrhjNTExrWx3VEHeH0KiewR-vgYfMI5UER3HpH3Hvz7DM=w1266';
  return (
    <ServiceContent
      title="Vision Rehabilitation"
      linktext="Learn about other services we offer"
      url="services/vision-rehabilitation"
      description="Acquired Brain Injury can cause dramatic changes to an individual's visual system. The root cause may come from a stroke, neurological dysfunction or hit on the head."
    >
      <h3 className="h5articleTitle">Acquired Brain Injury</h3>
      <p>
        An acquired brain injury (ABI) is caused by a trauma to the brain. The
        root cause may come from a stroke, neurological dysfunction or hit on
        the head. A common cause of an ABI in children and young adults is
        sports as they may fall, get hit, or get a concussion as a result of
        impact. An acquired brain injury does not discriminate and knows no age.
        As a result, a person may experience a decline or maladaptation to their
        state of consciousness. This in turn can cause a deterioration in
        sensory processing, cognitive ability and physical function. Regardless
        of the severity of the trauma, dramatic changes may occur to the
        individual's visual system.
      </p>
      <p>
        The connection between vision and the brain is remarkably significant.
        Vision is the backbone of sensory information processing. When there is
        a disruption in the brain, there is a disruption in the way visual
        information is received and reacted upon. This results in disruptions in
        efficiency concerning information processing. A patient with an ABI may
        demonstrate disturbances in behavioral and emotional function,
        physiological maladjustment, and partial/total functional disability.
        Following an ABI, the visual system is not the way it what was.
        Something as simple as having the patient use their previously worn
        glasses can exaggerate visual issues.
      </p>
      <p>
        You need good visual skills to work efficiently and with purpose!
        Sometimes, you simply need to retrain these skills!
      </p>
      <br />

      <Row>
        <Col sm="12" md="6">
          <picture>
            <source media="(max-width: 767px)" srcSet={football_w949} />
            <source media="(min-width: 768px)" srcSet={football_w1266} />
            <img
              src={football_w1266}
              className="fullWidthImage"
              alt="Doctor checking eyes of injured football player"
            ></img>
          </picture>
        </Col>
        <Col sm="12" md="6">
          <h5 className="h5articleTitle">
            What are symptoms following an Acquired Brain Injury?
          </h5>
          <ul>
            <li>Double vision</li>
            <li>Blurry distance/near vision</li>
            <li>Light sensitivity</li>
            <li>
              Reading difficulties; lack in comprehension, frequently losing
              your place, words seem to move
            </li>
            <li>Eye pain, specifically when reading</li>
            <li>Dizziness &amp; issues with balance</li>
            <li>Lack of attention and concentration</li>
            <li>Visual memory issues</li>
            <li>Headaches</li>
            <li>Loss of peripheral vision</li>
          </ul>
        </Col>
      </Row>
      <br />

      <h5 className="h5articleTitle">
        What does Vision Therapy do for patients with an Acquired Brain Injury?
      </h5>
      <p>
        Through vision therapy and a pertinent treatment plan, our patients gain
        the skills necessary to enhance their visual system and improve upon
        their visual efficiency. Following the initial evaluation, our doctor
        will determine if the patient requires the use of corrective lenses,
        prism glasses, and relevant activities to improve their activities of
        daily living.
      </p>
      <br />
    </ServiceContent>
  );
}

export default Visionrehab;
