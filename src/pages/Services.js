import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Services() {
  const childFrustrated_w1200 =
    'https://lh3.googleusercontent.com/WFqgpMmgoiU2yzm6EldbDvWFcID6_4dploMQg9w95pZqVea-bjUv7iCNCaUwAAJSpiVxThGGI1ZewCOzFSBlIzBSI2EfG4atMmZo-7ihtxMFz0bYQQ3jwIWkpknDrquGVDWfxIs7Omk=w1200';
  const childFrustrated_w1597 =
    'https://lh3.googleusercontent.com/bmEJGm3tDYskIkP4S_JwFj1XRjqWMbyXQKLsPsGx5RFp8CxzhN5Ffq-Pi8gDhF9cmy1m_F1uHNzw0d-1vTOmms-lqh0jA27_VMKH0plKwATrSIolQtTNypKuLhuvoqygDWoXu6PUACk=w1597';
  const childAS_w1200 =
    'https://lh3.googleusercontent.com/-3OkcNKRuCyEsVNG_9cGg9ElCQOKNOumSx5KqOfpYaSLuHjjJkqpkLznQWQhgV9fKYThowqXa-ey90Q0Skv_OSiBNTBFFMNBzc6OHi7H68JVJsV4hIHixsfd-uSo1Yr6DUx7IRcpzKc=w1200';
  const childAS_w1641 =
    'https://lh3.googleusercontent.com/FbJYUb-UQmeK1UJg1VOEFCOMUmVcVH_4sn1LvXr2J-otq0fg_jUz3juG-zohqzc_jhnWVS5SUo1sCqm0CjLMtJ95Ds2qRxy-gleRYU0MgQ39YPwZjFIzDFEdrxrK8G_2ybK01rdgtLM=w1641';
  const sports_w949 =
    'https://lh3.googleusercontent.com/UYf8yOPFVwWbcB9KsBsaDn4XaYu8JAWKZKwiaWHpEIqbJ3ytzI3axRTLCgiY5aWixXwy972l6hRNVI00tf3OAkJE5Tx7TnlAttfoIXR65VfH7SgbMuwxAjRcri7Urn3zmzGKTZ3wJ_k=w949';
  const sports_w1266 =
    'https://lh3.googleusercontent.com/_MdveahU5PeJPF_9PB-yGbEfDGTznEML8KG5_Vf6lEAvwf1CgzljeAINofGlSmAIvt1idSxPIb7V1b0TgkD6HREIaGuCKeHrhjNTExrWx3VEHeH0KiewR-vgYfMI5UER3HpH3Hvz7DM=w1266';
  const rubbingeye_w1200 =
    'https://lh3.googleusercontent.com/2crfJsp7U4KVgxtVObZsrKjUoslEISnW9lCvcZr3TmcXHvXCkCI8qZzsPW-AeyRq0oZPoqusolf0h0AKgiO3wJuqYnmb0nfQ6zFI6HsGOVImQpR9K9WlLYT9h0Qlrx1uMBcJagK1TUA=w1200';
  const rubbingeye_w1600 =
    'https://lh3.googleusercontent.com/yKhk9j3Iiq-e3h9Z7a54I_zJkD1IUg7iOYXgUjwFJru3axWSpYrwe6l9sJH3hcppV-sSRiEwQ5Z31sYw89lbCJwX723i-mOiYX_wVjuv1Gl7wNijrSUScXGgNKlMym8besgMZ2Q4JJo=w1600';
  const visionrehab_1200 =
    'https://lh3.googleusercontent.com/MJNDsiDJfiEGfNsCYYHU4tA2WGTa8vhVAp1DsLawy3GDZNCG58QUD17OfuBVZDSzw66MxTCyc-wcU_nd-_LgE3s-ReDPk2C_EumIfnf6eRZiBMkjQLuLTL8L77Dc2sc9B_Mx0g35b0E=w1200';
  const visionrehab_1600 =
    'https://lh3.googleusercontent.com/KAGlVUW8siHlX-_p_-Hy4O2L8xbzLhURj5tQoxa2LgxfyDvQM5QIB6nzbSm2Z1xG0XQy3Ec4dC2KRgZm97z3BbcT6J_0Cui0BdfG5x27r34UDIrV48rlJ23avuArw0-e3nefZPwtboY=w1600';

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
              <source media="(max-width: 767px)" srcSet={rubbingeye_w1200} />
              <source media="(min-width: 768px)" srcSet={rubbingeye_w1600} />
              <img
                src={rubbingeye_w1600}
                className="img-fluid"
                alt="Child frustrated with reading"
              ></img>
            </picture>
          </Col>
          <Col sm="12" md="6" className="allServicesCol my-auto">
            <div
              className="paddingAround extraPaddingBottomPhone"
              style={{ paddingTop: '15px' }}
            >
              <h3>Learning Related Visual Problems</h3>
              <p>
                The visual system is the dominant sense utilized for learning.
                When our visual system does not work efficiently, it can
                negatively impact the ability to learn and/ or stay focused.
                Vision Therapy restores the ability to gather and process visual
                information efficiently resulting in improved academic
                performance.
              </p>
              <Link to="/services/learning-related-visual-problems">
                <Button
                  color="primary"
                  className="buttonPrimary"
                  onClick={scrollTop}
                >
                  Learn More <FontAwesomeIcon icon={faArrowRight} />
                </Button>
              </Link>
            </div>
          </Col>
        </Row>

        <Row bg-light>
          <Col sm="12" md={{ size: 6, order: 2 }} className="allServicesCol">
            <picture>
              <source media="(max-width: 767px)" srcSet={childAS_w1200} />
              <source media="(min-width: 768px)" srcSet={childAS_w1641} />
              <img
                src={childAS_w1641}
                className="img-fluid"
                alt="Child with Amblyopia"
              ></img>
            </picture>
          </Col>
          <Col
            sm="12"
            md={{ size: 6, order: 1 }}
            className="allServicesCol my-auto"
          >
            <div className="paddingAround extraPaddingBottomPhone">
              <h3>Amblyopia &amp; Strabismus</h3>
              <p>
                Those with Amblyopia experience reduced eyesight in one (or
                both) eyes despite best correction with contact or glasses.
                Strabismus occurs when the eyes are unable to align properly.
                Vision Therapy coordinate the eyes and brain to team both eye
                together resulting in clear and comfortable binocular vision.
              </p>
              <Link to="/services/amblyopia-strabismus">
                <Button
                  color="primary"
                  className="buttonPrimary"
                  onClick={scrollTop}
                >
                  Learn More <FontAwesomeIcon icon={faArrowRight} />
                </Button>
              </Link>
            </div>
          </Col>
        </Row>

        <Row bg-light>
          <Col sm="12" md="6" className="allServicesCol">
            <picture>
              <source media="(max-width: 767px)" srcSet={visionrehab_1200} />
              <source media="(min-width: 768px)" srcSet={visionrehab_1600} />
              <img
                src={visionrehab_1600}
                className="img-fluid"
                alt="Vision exam"
              ></img>
            </picture>
          </Col>
          <Col sm="12" md="6" className="allServicesCol my-auto">
            <div className="paddingAround extraPaddingBottomPhone">
              <h3>Vision Rehabilitation</h3>
              <p>
                Vision Rehabilitation improves the visual processes in someone
                who suffered a Traumatic Brain Injury due to trauma or stroke.
                Vision Therapy works to improve the quality of life in those who
                suffer visual field defects, double vision, or visual balance
                disorders.
              </p>
              <Link to="/services/vision-rehabilitation">
                <Button
                  color="primary"
                  className="buttonPrimary"
                  onClick={scrollTop}
                >
                  Learn More <FontAwesomeIcon icon={faArrowRight} />
                </Button>
              </Link>
            </div>
          </Col>
        </Row>

        <Row bg-light>
          <Col sm="12" md={{ size: 6, order: 2 }} className="allServicesCol">
            <picture>
              <source media="(max-width: 767px)" srcSet={sports_w949} />
              <source media="(min-width: 768px)" srcSet={sports_w1266} />
              <img
                src={sports_w1266}
                className="img-fluid"
                alt="Doctor checking athletes eyes"
              ></img>
            </picture>
          </Col>
          <Col
            sm="12"
            md={{ size: 6, order: 1 }}
            className="allServicesCol my-auto"
          >
            <div className="paddingAround extraPaddingBottomPhone">
              <h3>Sports Vision</h3>
              <p>
                Sports Vision Training works on improving the visual abilities
                of an athlete to give them a competitive edge over the
                competition. A great player can become an excellent player with
                the enhanced visual processing to make split second decisions
                with confidence and precision.
              </p>
              <Link to="/services/sports-vision">
                <Button
                  color="primary"
                  className="buttonPrimary"
                  onClick={scrollTop}
                >
                  Learn More <FontAwesomeIcon icon={faArrowRight} />
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Services;
