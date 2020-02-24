import React from 'react';
import Helmet from 'react-helmet';
import { Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Services() {
  const childAS_w1200 =
    'https://lh3.googleusercontent.com/-3OkcNKRuCyEsVNG_9cGg9ElCQOKNOumSx5KqOfpYaSLuHjjJkqpkLznQWQhgV9fKYThowqXa-ey90Q0Skv_OSiBNTBFFMNBzc6OHi7H68JVJsV4hIHixsfd-uSo1Yr6DUx7IRcpzKc=w1200';
  const childAS_w1641 =
    'https://lh3.googleusercontent.com/FbJYUb-UQmeK1UJg1VOEFCOMUmVcVH_4sn1LvXr2J-otq0fg_jUz3juG-zohqzc_jhnWVS5SUo1sCqm0CjLMtJ95Ds2qRxy-gleRYU0MgQ39YPwZjFIzDFEdrxrK8G_2ybK01rdgtLM=w1641';
  const help_w1200 =
    'https://lh3.googleusercontent.com/BT42uiDKN3rz0J7Debr9oYaF1TFte80knjEmlL3tDMxRE0-3-8rKNhRp9B2aSJdOjCbvr2D1ftpyDQCHniv_b7nxaxF52GPIcEdqCjFAOGNv5v81BCC5-LTDeNNtbGKioUVniuPb1qI=w1200';
  const help_w1600 =
    'https://lh3.googleusercontent.com/FGKgFjIK13uNGUsSuQC8uKCOjlCabbaoewEeZh35SCvB0T--r4Ey6f3QbSwpUcxpgDOuZnuu-peSAcisLFMwQGpWJYUPmVlC6yjdmwTOIDaFP_LcRghM4WYUOA4U78Frzg8MSavPnJc=w1600';
  const baseball_w1200 =
    'https://lh3.googleusercontent.com/YipAhFDdRLBB4citGpvBT9GzMECMMS-3pSpp28murcJHtpRpiIYrNScH1wG8bwcZLNxr42C4rxaEOZ7gkZjEo62iZf-aIOA820F8250FnVAbBXIoY3-0sq1WJR7-CnjMD3Xeg9r3hpk=w1200';
  const baseball_w1600 =
    'https://lh3.googleusercontent.com/Y4QIanrNTpMhAKiLLxuu0KXZK5kxFjXuPi0PLvLWqxbm_1m8H9XAxx9C_Gt8subQacSDJ_O1umc79axS5DGVUS9eASN36MhOlCe7_-GWpzPNfJZcZip5FA9cp-SS3_UGg--t1pro7gE=w1600';
  const adult_w1200 =
    'https://lh3.googleusercontent.com/UmpAygL-aAfgf-jqjXb99zQAEE4_7ss5qW9dsYVa9QBHIUe55Km4BpL3tJ2yR10gojhvJxrMZBedfycphgkTYwXEYLepUQq_08yXZ_FYGilZIgniJOChhDHqotv45r_U7moseKgZtLM=w1200';
  const adult_w1600 =
    'https://lh3.googleusercontent.com/mc-APuZHdchGHS0VCzYtL1SHt54-ENLJXKecG87eubOrV0QmTv67SslWssn91fZ9n3S2OJ_VxLPu4o07t5uwsz5oPWiRHfFj3aWrod-yHWPuzpBTfhbUfR1692wvb-AOkkqoehAryAo=w1600';

  const scrollTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
  return (
    <div>
      <Helmet>
        <title>Services Offered</title>
        <meta
          property="og:title"
          content="Center for Better Learning | Services"
        />
        <meta
          property="og:url"
          content="https://www.centerforbetterlearning.com/services"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="Our Vision Therapy services include Learning Related Visual Problems, Amblyopia, Strabismus, Acquired Brain Injury, and Sports Vision Training."
        />
        <meta
          name="description"
          content="Our Vision Therapy services include Learning Related Visual Problems, Amblyopia, Strabismus, Acquired Brain Injury, and Sports Vision Training."
        />
      </Helmet>
      <div className="marginfornav">
        <div className="wideSectionBannerPrimary">
          <h1 className="text-center pageTitleOnDark">Services</h1>
        </div>
        <div className="container-fluid">
          <Row bg-light>
            <Col sm="12" md="6" className="allServicesCol">
              <picture>
                <source media="(max-width: 767px)" srcSet={help_w1200} />
                <source media="(min-width: 768px)" srcSet={help_w1600} />
                <img
                  src={help_w1600}
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
                  negatively impact our ability to learn or stay focused. Vision
                  Therapy restores the ability to gather and process visual
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
                <source media="(max-width: 767px)" srcSet={adult_w1200} />
                <source media="(min-width: 768px)" srcSet={adult_w1600} />
                <img
                  src={adult_w1600}
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
                  Vision Therapy works to improve the quality of life in those
                  who suffer visual field defects, double vision, or visual
                  balance disorders.
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
                <source media="(max-width: 767px)" srcSet={baseball_w1200} />
                <source media="(min-width: 768px)" srcSet={baseball_w1600} />
                <img
                  src={baseball_w1600}
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
                  competition. A great player can become an excellent player
                  with the enhanced visual processing to make split second
                  decisions with confidence and precision.
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
    </div>
  );
}

export default Services;
