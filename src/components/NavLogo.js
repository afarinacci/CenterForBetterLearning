import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faEye, faUser } from '@fortawesome/free-solid-svg-icons';

function NavLogo(props) {
  return (
    <div>
      <Link exact to="/" className="navbar-brand">
        {/*<img src={logo} className="App-logo" alt="logo" /> */}
        <div className="text-center">
          <div className="d-none d-md-block">
            <FontAwesomeIcon
              className="eyeIcon logoIcon"
              icon={faEye}
              size="2x"
            />
            <FontAwesomeIcon
              className="userIcon logoIcon"
              icon={faUser}
              size="3x"
            />
            <FontAwesomeIcon
              className="brainIcon logoIcon"
              icon={faBrain}
              size="2x"
            />
          </div>
          <p className="logotitle">Center for Better Learning</p>
          <p className="logotagline">
            Better Vision. <span className="logoyellow">Brighter</span> Future.
          </p>
        </div>
      </Link>
    </div>
  );
}

export default NavLogo;
