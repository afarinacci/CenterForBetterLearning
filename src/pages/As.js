import React from 'react';
import ServiceContent from './../components/ServiceContent';
import { Row, Col } from 'reactstrap';

function As() {
  const childAS_w1200 =
    'https://lh3.googleusercontent.com/-3OkcNKRuCyEsVNG_9cGg9ElCQOKNOumSx5KqOfpYaSLuHjjJkqpkLznQWQhgV9fKYThowqXa-ey90Q0Skv_OSiBNTBFFMNBzc6OHi7H68JVJsV4hIHixsfd-uSo1Yr6DUx7IRcpzKc=w1200';
  const childAS_w1641 =
    'https://lh3.googleusercontent.com/FbJYUb-UQmeK1UJg1VOEFCOMUmVcVH_4sn1LvXr2J-otq0fg_jUz3juG-zohqzc_jhnWVS5SUo1sCqm0CjLMtJ95Ds2qRxy-gleRYU0MgQ39YPwZjFIzDFEdrxrK8G_2ybK01rdgtLM=w1641';
  return (
    <ServiceContent
      title="Learning Related Visual Problems"
      linktext="Learn about other services we offer"
      url="services/amblyopia-strabismus"
      description="Learn about the signs and symptoms of amblyopia and strabismus, and how Vision Therapy can improve the condition."
    >
      <h5 className="h5articleTitle">What is amblyopia?</h5>
      <p>
        Amblyopia is commonly thought of as a type of "lazy eye". In amblyopia,
        there might not appear to be a noticeable problem of the eye. On the
        outside, the eye appears normal, but functionally, there are many issues
        that need to be resolved. It occurs when one eye is unable to achieve
        normal eyesight during visual development. In this case, even
        prescription lenses are unable to bring that eye to the sought after
        "20/20". Overtime, the disintegration between how the eyes and brain
        work together becomes magnified. The brain suppresses or ignores the
        signal from the weaker eye, depending only on input from the "good eye".
        Many amblyopes require vision therapy to regain operative use of central
        vision used in visual processing. This allows the child to regain visual
        function in both eyes, not one.
      </p>
      <br />

      <h5 className="h5articleTitle">What causes amblyopia?</h5>
      <ul>
        <li>Refractive error</li>
        <li>Strabismus</li>
        <li>Cataract, droopy eyelid, other eye diseases</li>
      </ul>
      <br />

      <h5 className="h5articleTitle">
        Is my child at risk factors for amblyopia?
      </h5>
      <ul>
        <li>Were they born premature?</li>
        <li>Were they born smaller than average?</li>
        <li>
          Do you have a family history of amblyopia, childhood cataracts or
          other eye conditions?
        </li>
        <li>Does your child have any developmental disabilities?</li>
      </ul>
      <br />

      <h5 className="h5articleTitle">What is Strabismus?</h5>
      <p>
        Strabismus is commonly known as "cross eyes". In a strabismic patient,
        the eyes do not line up, causing numerous issues with visual function
        and development. Two types of strabismus are esotropia and exotropia.
        Esotropia is defined by an inward turning eye, whereas exotropia is
        defined as an outward turning eye. In both strabismus and amblyopia (any
        type), the patient may experience double vision when trying to use both
        eyes, resulting in suppression of the weaker eye. In this case, the
        brain is no longer receiving input from both eyes, and the result is
        disruption or lack of the binocular vision system.
      </p>
      <br />

      <Row>
        <Col sm="12" md="6">
          <picture>
            <source media="(max-width: 767px)" srcSet={childAS_w1200} />
            <source media="(min-width: 768px)" srcSet={childAS_w1641} />
            <img
              src={childAS_w1641}
              className="fullWidthImage"
              alt="Doctor checking eyes of injured football player"
            ></img>
          </picture>
        </Col>
        <Col sm="12" md="6">
          <h5 className="h5articleTitle">
            What are signs &amp; symptoms of amblyopia and strabismus?
          </h5>
          <ul>
            <li>Squinting</li>
            <li>Shutting one eye</li>
            <li>Head tilt</li>
            <li>Lack of or poor depth perception</li>
            <li>Eyes appear to not work together</li>
            <li>Headaches due to visual stress</li>
            <li>Poor spatial recognition</li>
            <li>Reduced eyesight</li>
            <li>
              Self-esteem issues, especially if one eye is visibly misaligned
            </li>
          </ul>
        </Col>
      </Row>
      <br />

      <h5 className="h5articleTitle">
        What does vision therapy do in this case?
      </h5>
      <p>
        Vision therapy works to lessen the workload of the "good eye" and
        retrain both eyes to work and function together. With vision therapy, it
        is expected that your child will likely improve their eyesight and depth
        perception as well as learn how to use their eyes so that the eyes
        themselves are cosmetically lined up. In order to be a successful
        student and individual, we must be able to be efficient. Two eyes are
        better than one! Imagine just how hard your child is working to
        accomplish tasks with half of their visual system intact. Our goal here
        is to increase efficiency while boosting confidence and comprehension in
        our children.
      </p>
    </ServiceContent>
  );
}

export default As;
