import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

function ServiceContent(props) {
  const scrollTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
  return (
    <div>
      <Helmet>
        <title>{props.title}</title>
      </Helmet>
      <div className="marginfornav">
        <div className="wideSectionBannerPrimary">
          <h1 className="text-center pageTitleOnDark">{props.title}</h1>
        </div>
        <main className="container-fluid paddingAround max800">
          {props.children}
          <br />
          <p
            style={{
              fontStyle: 'italic',
              textAlign: 'right',
              letterSpacing: '.1em'
            }}
          >
            <Link
              to="/services"
              className="paragraphLinkPrimary"
              onClick={scrollTop}
            >
              {props.linktext} <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </p>
        </main>
      </div>
    </div>
  );
}

export default ServiceContent;
