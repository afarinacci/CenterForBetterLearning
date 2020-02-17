import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function ServiceContent(props) {
  const scrollTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
  return (
    <div className="marginfornav">
      <div className="wideSectionBannerPrimary">
        <h1 className="text-center pageTitleOnDark">{props.title}</h1>
      </div>
      <main className="container-fluid paddingAround max800">
        {props.children}
        <br />
        <p style={{ fontStyle: 'italic' }}>
          <Link
            to="/services"
            className="paragraphLink paragraphLinkPrimary"
            onClick={scrollTop}
          >
            Learn about other services we offer{' '}
            <FontAwesomeIcon
              icon={faExternalLinkAlt}
              style={{ fontSize: '.8em', color: 'var(--primary)' }}
            />
          </Link>
        </p>
      </main>
      <div className="wideSectionFooterPrimary">
        <h5 style={{ margin: '0px' }}>
          <Link
            to="/request-appointment"
            className="paragraphLink paragraphLinkWhite"
            onClick={scrollTop}
          >
            Schedule an Evaluation{' '}
            <FontAwesomeIcon
              icon={faExternalLinkAlt}
              style={{ fontSize: '.8em' }}
            />
          </Link>
        </h5>
      </div>
    </div>
  );
}

export default ServiceContent;
