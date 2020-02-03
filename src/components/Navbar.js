import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './../logo.svg';

function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-dark bg-primary">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <div className="logo">
        <h1 className="logotitle">Center for Better Learning</h1>
        <h2 className="logotagline">
          Better Vision. <span className="logoyellow">Brighter</span> Future.
        </h2>
      </div>
      <NavLink
        exact
        activeClassName="navbar__link--active"
        className="navbar__link"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        activeClassName="navbar__link--active"
        className="navbar__link"
        to="/request-appointment"
      >
        Request Appointment
      </NavLink>
      <NavLink
        activeClassName="navbar__link--active"
        className="navbar__link"
        to="/our-team"
      >
        Our Team
      </NavLink>
      <NavLink
        activeClassName="navbar__link--active"
        className="navbar__link"
        to="/what-is-vision-therapy"
      >
        What is vision therapy?
      </NavLink>
      <NavLink
        activeClassName="navbar__link--active"
        className="navbar__link"
        to="/services"
      >
        Services
      </NavLink>
      <NavLink
        activeClassName="navbar__link--active"
        className="navbar__link"
        to="/resources"
      >
        Resources
      </NavLink>
      <NavLink
        activeClassName="navbar__link--active"
        className="navbar__link"
        to="/symptom-checker"
      >
        Symptom Checker
      </NavLink>
      <NavLink
        activeClassName="navbar__link--active"
        className="navbar__link"
        to="/forms"
      >
        Patient Forms
      </NavLink>
      <NavLink
        activeClassName="navbar__link--active"
        className="navbar__link"
        to="/locations"
      >
        Locations
      </NavLink>
      <NavLink
        activeClassName="navbar__link--active"
        className="navbar__link"
        to="/contact-us"
      >
        Contact Us
      </NavLink>
    </nav>
  );
}

export default Navbar;
