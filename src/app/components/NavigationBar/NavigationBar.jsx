import React from 'react';
import './NavigationBar.scss';
import { Link } from 'react-router';
import {
  Navbar, Nav, MenuItem, NavItem,
  NavDropdown
} from 'react-bootstrap';

const NavigationBar = (props) => {
  let navBarSection =
    <Navbar inverse collapseOnSelect id='navBarContainer'>
      <Navbar.Header>
        <Navbar.Brand>
          <strong>
            <img height='20px' width='50px' src={require('../../images/logo.png')} alt="logo"/>
          </strong>
          &nbsp;&nbsp;&nbsp;&nbsp;
          {/*<a href="#landing-home">*/}
            <strong>Micro-Lending</strong>
          {/*</a>*/}
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>

      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem href="#borrowerPane">
            BorrowerList
              </NavItem>
          <NavItem href="#userHelpPane">
            Help
              </NavItem>
          <NavItem href="#getStartedPane">
            Get Started
              </NavItem>
          <NavItem href="#" onClick={() => props.showLoginModal('showLoginModal')}>
            <i className="fa fa-sign-in"></i>&nbsp;LogIn
      </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>;

  return navBarSection;
};

export default NavigationBar;
