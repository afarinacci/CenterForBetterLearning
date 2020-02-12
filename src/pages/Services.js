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
  const scrollTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
  return (
    <div className="container-fluid marginfornav">
      {/*<h1 className="text-center pageTitle">Services</h1>*/}
      <Row bg-light>
        <Col sm="12" md="6" className="allServicesCol">
          <picture>
            <source media="(max-width: 767px)" srcSet={childFrustrated_w1200} />
            <source media="(min-width: 768px)" srcSet={childFrustrated_w1597} />
            <img
              src={childFrustrated_w1597}
              className="img-fluid"
              alt="Child frustrated with schoolwork"
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Link to="/services/learning-related-visual-problems">
              <Button
                color="primary"
                className="primary-btn"
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Link to="/services/learning-related-visual-problems">
              <Button
                color="primary"
                className="primary-btn"
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
            <source media="(max-width: 767px)" srcSet={childFrustrated_w1200} />
            <source media="(min-width: 768px)" srcSet={childFrustrated_w1597} />
            <img
              src={childFrustrated_w1597}
              className="img-fluid"
              alt="Child frustrated with schoolwork"
            ></img>
          </picture>
        </Col>
        <Col sm="12" md="6" className="allServicesCol my-auto">
          <div className="paddingAround extraPaddingBottomPhone">
            <h3>Vision Rehabilitation</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Link to="/services/learning-related-visual-problems">
              <Button
                color="primary"
                className="primary-btn"
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
            <source media="(max-width: 767px)" srcSet={childFrustrated_w1200} />
            <source media="(min-width: 768px)" srcSet={childFrustrated_w1597} />
            <img
              src={childFrustrated_w1597}
              className="img-fluid"
              alt="Child frustrated with schoolwork"
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Link to="/services/learning-related-visual-problems">
              <Button
                color="primary"
                className="primary-btn"
                onClick={scrollTop}
              >
                Learn More <FontAwesomeIcon icon={faArrowRight} />
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Services;
