import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLink as RRNavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faFileDownload } from '@fortawesome/free-solid-svg-icons';
import {
  Nav,
  Navbar,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  Button
} from 'reactstrap';
import NavLogo from './NavLogo';
const CustomNavbar = props => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => {
    setCollapsed(!collapsed);
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
  const scrollTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
  const scrollToLocations = () => {
    setCollapsed(!collapsed);
    const id = 'locations';
    const yOffset = -200;
    const element = document.getElementById(id);
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };
  return (
    <nav className="fixed-top">
      <Navbar
        color="primary"
        dark
        className="topNav navbar row align-items-start"
      >
        <div className="order-2 order-md-1 col-12 col-md-6 d-flex justify-content-center justify-content-md-start">
          <NavLogo onClick={scrollTop} />
        </div>
        <div className="order-1 order-md-2 col-12 col-md-6 d-flex flex-nowrap justify-content-center justify-content-md-end">
          <a href="tel:+1561-264-1245">
            <Button outline color="primary" className="topNavBtn">
              <FontAwesomeIcon icon={faPhone} /> (561) 264-1245
            </Button>
          </a>
          <Link exact to="/request-appointment">
            <Button outline color="primary" className="topNavBtn">
              Request an Appointment
            </Button>
          </Link>
        </div>
      </Navbar>
      <Navbar color="white" light expand="md" className="bottomNav">
        {/* Add toggler to auto-collapse */}
        <NavbarToggler onClick={toggleNavbar} className="ml-auto" />
        <Collapse isOpen={!collapsed} navbar>
          {/*Pull left */}
          <Nav navbar pills className="mr-auto ml-auto">
            <NavItem>
              <NavLink
                exact
                to="/our-team"
                tag={RRNavLink}
                onClick={toggleNavbar}
              >
                Our Team
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                exact
                to="/what-is-vision-therapy"
                tag={RRNavLink}
                onClick={toggleNavbar}
              >
                What is vision therapy?
              </NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Services
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  <NavLink
                    exact
                    to="/services"
                    tag={RRNavLink}
                    onClick={toggleNavbar}
                  >
                    <span style={{ fontWeight: 'bold' }}>All Services</span>
                  </NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <NavLink
                    exact
                    to="/services/learning-related-visual-problems"
                    tag={RRNavLink}
                    onClick={toggleNavbar}
                  >
                    Learning Related Visual Problems
                  </NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <NavLink
                    exact
                    to="/services/amblyopia-strabismus"
                    tag={RRNavLink}
                    onClick={toggleNavbar}
                  >
                    Amblyopia/Strabismus
                  </NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <NavLink
                    exact
                    to="/services/vision-rehabilitation"
                    tag={RRNavLink}
                    onClick={toggleNavbar}
                  >
                    Vision Rehabilitation
                  </NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <NavLink
                    exact
                    to="/services/sports-vision"
                    tag={RRNavLink}
                    onClick={toggleNavbar}
                  >
                    Sports Vision
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <NavItem>
              <NavLink
                exact
                to="/diagnosis"
                tag={RRNavLink}
                onClick={toggleNavbar}
              >
                Diagnosis
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                exact
                to="/resources"
                tag={RRNavLink}
                onClick={toggleNavbar}
              >
                Resources
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                exact
                to="/symptoms"
                tag={RRNavLink}
                onClick={toggleNavbar}
              >
                Symptoms
              </NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Patient Forms
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={toggleNavbar}>
                  <FontAwesomeIcon icon={faFileDownload} className="navIcon" />
                  Child Intake Form
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={toggleNavbar}>
                  <FontAwesomeIcon icon={faFileDownload} className="navIcon" />
                  Adult Intake Form
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink onClick={scrollToLocations}>Locations</NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                exact
                to="/contact-us"
                tag={RRNavLink}
                onClick={toggleNavbar}
              >
                Contact Us
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </nav>
  );
};

export default CustomNavbar;
