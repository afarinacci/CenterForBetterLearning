import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink as RRNavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faFileDownload,
  faCalendarAlt
} from '@fortawesome/free-solid-svg-icons';
import {
  Nav,
  Navbar,
  NavbarBrand,
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
    this.closeNavbar = this.closeNavbar.bind(this);
    this.scrollTop = this.scrollTop.bind(this);
    this.scrollToLocations = this.scrollToLocations.bind(this);
  }
  toggleNavbar() {
    this.setState(state => ({ collapsed: !state.collapsed }));
  }
  closeNavbar() {
    if (this.state.collapsed !== true) {
      this.toggleNavbar();
    }
    this.scrollTop();
  }
  scrollTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  scrollToLocations() {
    if (document.body.clientWidth > 767) {
      const yOffset = document
        .getElementById('fixedNav')
        .getBoundingClientRect().height;
      const element = document.getElementById('locations');
      const y =
        element.getBoundingClientRect().top + window.pageYOffset - yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      if (this.state.collapsed !== true) {
        this.toggleNavbar();
      }
      const element = document.getElementById('locations');
      const y = element.getBoundingClientRect().top + window.pageYOffset - 111;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
  render() {
    return (
      <nav className="fixed-top" role="navigation" id="fixedNav">
        <div className="row bg-light topNav">
          <div
            className="col-12 col-md-6 order-2 order-md-1 row justify-content-center justify-content-md-start"
            style={{ margin: '0px', padding: '0px' }}
          >
            <NavbarBrand className="d-none d-md-block" onClick={this.scrollTop}>
              <Link to="/">
                <div className="logotitle">Center for Better Learning</div>
              </Link>
            </NavbarBrand>
          </div>
          <div
            className="col-12 col-md-6 order-1 order-md-2 row justify-content-center justify-content-md-end"
            style={{ margin: '0px', padding: '0px' }}
          >
            <a href="tel:+1561-462-1245" className="topNavLink">
              <FontAwesomeIcon
                icon={faPhone}
                style={{ color: 'var(--primary)' }}
              />{' '}
              (561) 462-1245
            </a>
            <Link
              to="/request-appointment"
              onClick={this.scrollTop}
              className="topNavLink"
              style={{ paddingLeft: '15px' }}
            >
              <FontAwesomeIcon
                icon={faCalendarAlt}
                style={{ color: 'var(--primary)' }}
              />{' '}
              Request an Appointment
            </Link>
          </div>
        </div>
        <Navbar expand="md" className="bottomNav navbar-light bg-light">
          <NavbarBrand className="d-md-none" onClick={this.scrollTop}>
            <Link to="/">
              <div className="logotitle">Center for Better Learning</div>
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="ml-auto" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar className="mr-auto nav-fill">
              <NavItem>
                <NavLink
                  to="/what-is-vision-therapy"
                  tag={RRNavLink}
                  onClick={this.closeNavbar}
                  activeClassName="active"
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
                      onClick={this.closeNavbar}
                      activeClassName="active"
                    >
                      All Services
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink
                      to="/services/learning-related-visual-problems"
                      tag={RRNavLink}
                      onClick={this.closeNavbar}
                      activeClassName="active"
                    >
                      Learning Related Visual Problems
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink
                      to="/services/amblyopia-strabismus"
                      tag={RRNavLink}
                      onClick={this.closeNavbar}
                      activeClassName="active"
                    >
                      Amblyopia &amp; Strabismus
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink
                      to="/services/vision-rehabilitation"
                      tag={RRNavLink}
                      onClick={this.closeNavbar}
                      activeClassName="active"
                    >
                      Vision Rehabilitation
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink
                      to="/services/sports-vision"
                      tag={RRNavLink}
                      onClick={this.closeNavbar}
                      activeClassName="active"
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
                  onClick={this.closeNavbar}
                  activeClassName="active"
                >
                  Diagnosis
                </NavLink>
              </NavItem>
    */}
              <NavItem>
                <NavLink
                  to="/resources"
                  tag={RRNavLink}
                  onClick={this.closeNavbar}
                  activeClassName="active"
                >
                  Professional Resources
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  to="/symptoms"
                  tag={RRNavLink}
                  onClick={this.closeNavbar}
                  activeClassName="active"
                >
                  Symptoms Checklist
                </NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Patient Forms
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <NavLink
                      href="./../forms/CHILD_INTAKE_FORM.pdf"
                      download
                      onClick={this.closeNavbar}
                    >
                      <FontAwesomeIcon
                        icon={faFileDownload}
                        className="navIcon"
                      />
                      Child Intake Form
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink
                      href="./../forms/ADULT_INTAKE_FORM.pdf"
                      download
                      onClick={this.closeNavbar}
                    >
                      <FontAwesomeIcon
                        icon={faFileDownload}
                        className="navIcon"
                      />
                      Adult Intake Form
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="#" onClick={this.scrollToLocations}>
                  Locations
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
