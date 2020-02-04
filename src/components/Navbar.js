import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './../logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faBrain,
  faEye,
  faUser
} from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <nav className="fixed-top">
      <nav className="topNav navbar navbar-light row align-items-start">
        <div className="order-2 order-md-1 col-12 col-md-6 d-flex justify-content-center justify-content-md-start">
          <Link exact to="/" className="navbar-brand">
            {/*<img src={logo} className="App-logo" alt="logo" /> */}
            <div className="text-center">
              {/*<img src=" " width="30" height="30" alt=""></img>*/}
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
              <p className="logotitle">Center for Better Learning</p>
              <p className="logotagline">
                Better Vision. <span className="logoyellow">Brighter</span>{' '}
                Future.
              </p>
            </div>
          </Link>
        </div>
        <div className="order-1 order-md-2 col-12 col-md-6 d-flex flex-nowrap justify-content-center justify-content-md-end">
          <a href="tel:+1561-264-1245" className="btn btn-primary topNavBtn">
            <FontAwesomeIcon icon={faPhone} /> (561) 264-1245
          </a>
          <Link
            exact
            to="/request-appointment"
            className="btn btn-outline-primary topNavBtn"
          >
            Request an Appointment
          </Link>
        </div>
      </nav>
      <nav className="bottomNav navbar navbar-dark bg-primary navbar-expand-lg">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-item nav-link"
                to="/our-team"
              >
                Our Team
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-item nav-link"
                to="/what-is-vision-therapy"
              >
                What is vision therapy?
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-item nav-link"
                to="/services"
              >
                Services
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-item nav-link"
                to="/resources"
              >
                Resources
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-item nav-link"
                to="/symptom-checker"
              >
                Symptom Checker
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-item nav-link"
                to="/forms"
              >
                Patient Forms
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-item nav-link"
                to="/locations"
              >
                Locations
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-item nav-link"
                to="/contact-us"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </nav>
  );
}

export default Navbar;
