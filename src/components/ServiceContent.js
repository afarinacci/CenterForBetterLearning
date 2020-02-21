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
        <meta
          property="og:title"
          content={`Center for Better Learning | ${props.title}`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:description" content={props.description} />
        <meta name="description" content={props.description} />
        <meta
          property="og:url"
          content={`https://www.centerforbetterlearning.com/${props.url}`}
        />
        <meta
          property="twitter:image"
          content="https://lh3.googleusercontent.com/IZozt6YjnYiibHeeMcvcJ3yrmfCH-dKNhVvBEBGU5Lh41f84cwBun7Nlpz8tbcqNAVNN8Ifoc2O5aG8sVEBVU4dEEOclASGdDPhtGGBikkxUW8kresvfqtin6vpZTqR-W89ylQPRd3g=w1200"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="og:image"
          content="https://lh3.googleusercontent.com/IZozt6YjnYiibHeeMcvcJ3yrmfCH-dKNhVvBEBGU5Lh41f84cwBun7Nlpz8tbcqNAVNN8Ifoc2O5aG8sVEBVU4dEEOclASGdDPhtGGBikkxUW8kresvfqtin6vpZTqR-W89ylQPRd3g=w1200"
        />
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
