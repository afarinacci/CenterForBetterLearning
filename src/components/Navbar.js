import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './../logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <div className="sticky">
      <nav className="navbar navbar-light">
        <div className="navbar-brand">
          <Link exact to="/">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <p className="logotitle">Center for Better Learning</p>
            <p className="logotagline">
              Better Vision. <span className="logoyellow">Brighter</span>{' '}
              Future.
            </p>
          </Link>
        </div>
        <button type="button" className="btn btn-primary nav-item nav-link">
          <FontAwesomeIcon icon={faPhone} /> (561) 264-1245
        </button>
        <button
          type="button"
          className="btn btn-outline-primary nav-item nav-link"
        >
          <NavLink activeClassName="active" to="/request-appointment">
            Request Appointment
          </NavLink>
        </button>
      </nav>
      <nav className="navbar navbar-dark bg-primary">
        <NavLink
          activeClassName="active"
          className="nav-item nav-link"
          to="/our-team"
        >
          Our Team
        </NavLink>
        <NavLink
          activeClassName="active"
          className="nav-item nav-link"
          to="/what-is-vision-therapy"
        >
          What is vision therapy?
        </NavLink>
        <NavLink
          activeClassName="active"
          className="nav-item nav-link"
          to="/services"
        >
          Services
        </NavLink>
        <NavLink
          activeClassName="active"
          className="nav-item nav-link"
          to="/resources"
        >
          Resources
        </NavLink>
        <NavLink
          activeClassName="active"
          className="nav-item nav-link"
          to="/symptom-checker"
        >
          Symptom Checker
        </NavLink>
        <NavLink
          activeClassName="active"
          className="nav-item nav-link"
          to="/forms"
        >
          Patient Forms
        </NavLink>
        <NavLink
          activeClassName="active"
          className="nav-item nav-link"
          to="/locations"
        >
          Locations
        </NavLink>
        <NavLink
          activeClassName="active"
          className="nav-item nav-link"
          to="/contact-us"
        >
          Contact Us
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
