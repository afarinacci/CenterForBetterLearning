import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faFileDownload } from '@fortawesome/free-solid-svg-icons';
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
  Collapse,
  Button
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
        <Navbar
          color="primary"
          dark
          className="topNav navbar row align-items-start"
        >
          <div className="order-2 order-md-1 col-12 col-md-6 d-flex justify-content-center justify-content-md-start">
            <NavLogo />
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
        <Navbar color="white" light expand="md">
          {/* Add toggler to auto-collapse */}
          <NavbarToggler onClick={this.toggle} className="ml-auto" />
          <Collapse isOpen={this.state.isOpen} navbar>
            {/*Pull left */}
            <Nav navbar tabs>
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
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Services
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>
                      <Link exact to="/services">
                        All Services
                      </Link>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      <Link
                        exact
                        to="/services/learning-related-visual-problems"
                      >
                        Learning Related Visual Problems
                      </Link>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      <Link exact to="/services/amblyopia-strabismus">
                        Amblyopia/Strabismus
                      </Link>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      <Link exact to="/services/vision-rehabilitation">
                        Vision Rehabilitation
                      </Link>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      <Link exact to="/services/sports-vision">
                        Sports Vision
                      </Link>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </NavItem>

              <NavItem>
                <NavLink
                  activeClassName="active"
                  className="nav-item nav-link"
                  to="/diagnosis"
                >
                  Diagnosis
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  activeClassName="active"
                  className="nav-item nav-link"
                  to="/resources"
                >
                  Resources
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  activeClassName="active"
                  className="nav-item nav-link"
                  to="/symptoms"
                >
                  Symptoms
                </NavLink>
              </NavItem>

              <NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Patient Forms
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>
                      <FontAwesomeIcon
                        icon={faFileDownload}
                        className="navIcon"
                      />
                      Child Intake Form
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      <FontAwesomeIcon
                        icon={faFileDownload}
                        className="navIcon"
                      />
                      Adult Intake Form
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
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
