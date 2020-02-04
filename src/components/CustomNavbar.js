import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import {
  Nav,
  Navbar,
  NavbarToggler,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarBrand,
  Collapse
} from 'reactstrap';
import NavLogo from './NavLogo';

class CustomNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <nav className="fixed-top">
        <Nav className="topNav navbar navbar-light row align-items-start">
          <div className="order-2 order-md-1 col-12 col-md-6 d-flex justify-content-center justify-content-md-start">
            <NavLogo />
          </div>
          <div className="order-1 order-md-2 col-12 col-md-6 d-flex flex-nowrap justify-content-center justify-content-md-end">
            <a
              href="tel:+1561-264-1245"
              className="btn btn-primary btnResponsive topNavBtn"
            >
              <FontAwesomeIcon icon={faPhone} /> (561) 264-1245
            </a>
            <Link
              exact
              to="/request-appointment"
              className="btn btn-outline-primary btnResponsive topNavBtn"
            >
              Request an Appointment
            </Link>
          </div>
        </Nav>
        <Navbar color="primary" dark expand="md">
          {/* Add toggler to auto-collapse */}
          <NavbarToggler onClick={this.toggle} className="ml-auto" />
          <Collapse isOpen={this.state.isOpen} navbar>
            {/*Pull left */}
            <Nav navbar fill>
              <NavItem>
                <NavLink
                  activeClassName="active"
                  className="nav-item nav-link"
                  to="/our-team"
                >
                  Our Team
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  activeClassName="active"
                  className="nav-item nav-link"
                  to="/what-is-vision-therapy"
                >
                  What is vision therapy?
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  activeClassName="active"
                  className="nav-item nav-link"
                  to="/services"
                >
                  Services
                </NavLink>
              </NavItem>
              <NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Resources
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>
                      <Link exact to="/resources">
                        All Resources
                      </Link>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Parents</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Teachers</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </NavItem>
              <NavItem>
                <NavLink
                  activeClassName="active"
                  className="nav-item nav-link"
                  to="/symptom-checker"
                >
                  Symptom Checker
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  activeClassName="active"
                  className="nav-item nav-link"
                  to="/forms"
                >
                  Patient Forms
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  activeClassName="active"
                  className="nav-item nav-link"
                  to="/locations"
                >
                  Locations
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  activeClassName="active"
                  className="nav-item nav-link"
                  to="/contact-us"
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
