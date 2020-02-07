import React from 'react';
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

class CustomNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { collapsed: true };
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.scrollTop = this.scrollTop.bind(this);
    this.scrollToLocations = this.scrollToLocations.bind(this);
  }
  toggleNavbar() {
    this.setState(state => ({ collapsed: !state.collapsed }));
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  scrollTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  scrollToLocations() {
    this.setState(state => ({ collapsed: !state.collapsed }));
    const id = 'locations';
    const yOffset = -170;
    const element = document.getElementById(id);
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
  render() {
    return (
      <nav className="fixed-top" role="navigation">
        <Navbar
          color="primary"
          dark
          className="topNav navbar row align-items-start"
        >
          <div className="order-2 order-md-1 col-12 col-md-6 d-flex justify-content-center justify-content-md-start">
            <NavLogo onClick={this.scrollTop} />
          </div>
          <div className="order-1 order-md-2 col-12 col-md-6 d-flex flex-nowrap justify-content-center justify-content-md-end">
            <a href="tel:+1561-264-1245">
              <Button outline color="primary" className="topNavBtn">
                <FontAwesomeIcon icon={faPhone} /> (561) 264-1245
              </Button>
            </a>
            <Link to="/request-appointment">
              <Button
                outline
                color="primary"
                className="topNavBtn"
                onClick={this.scrollTop}
              >
                Request an Appointment
              </Button>
            </Link>
          </div>
        </Navbar>
        <Navbar light expand="md" className="bottomNav bg-light">
          {/* Add toggler to auto-collapse */}
          <NavbarToggler onClick={this.toggleNavbar} className="ml-auto" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            {/*Pull left */}
            <Nav navbar pills className="mr-auto ml-auto nav-fill">
              <NavItem>
                <NavLink
                  to="/our-team"
                  tag={RRNavLink}
                  onClick={this.toggleNavbar}
                >
                  Our Team
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/what-is-vision-therapy"
                  tag={RRNavLink}
                  onClick={this.toggleNavbar}
                >
                  What is Vision Therapy?
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
                      onClick={this.toggleNavbar}
                    >
                      <span style={{ fontWeight: 'bold' }}>All Services</span>
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink
                      to="/services/learning-related-visual-problems"
                      tag={RRNavLink}
                      onClick={this.toggleNavbar}
                    >
                      Learning Related Visual Problems
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink
                      to="/services/amblyopia-strabismus"
                      tag={RRNavLink}
                      onClick={this.toggleNavbar}
                    >
                      Amblyopia/Strabismus
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink
                      to="/services/vision-rehabilitation"
                      tag={RRNavLink}
                      onClick={this.toggleNavbar}
                    >
                      Vision Rehabilitation
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink
                      to="/services/sports-vision"
                      tag={RRNavLink}
                      onClick={this.toggleNavbar}
                    >
                      Sports Vision
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              {/*}
              <NavItem>
                <NavLink
                  to="/diagnosis"
                  tag={RRNavLink}
                  onClick={this.toggleNavbar}
                >
                  Diagnosis
                </NavLink>
              </NavItem>
    */}
              <NavItem>
                <NavLink
                  to="/resources"
                  tag={RRNavLink}
                  onClick={this.toggleNavbar}
                >
                  Professional Resources
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  to="/symptoms"
                  tag={RRNavLink}
                  onClick={this.toggleNavbar}
                >
                  Symptoms
                </NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Patient Forms
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem onClick={this.toggleNavbar}>
                    <FontAwesomeIcon
                      icon={faFileDownload}
                      className="navIcon"
                    />
                    Child Intake Form
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={this.toggleNavbar}>
                    <FontAwesomeIcon
                      icon={faFileDownload}
                      className="navIcon"
                    />
                    Adult Intake Form
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink onClick={this.scrollToLocations}>Locations</NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/contact-us"
                  tag={RRNavLink}
                  onClick={this.toggleNavbar}
                >
                  Contact Us
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </nav>
    );
  }
}

export default CustomNavbar;
