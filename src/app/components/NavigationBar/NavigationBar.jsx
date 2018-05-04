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
          <a href="#brand">
            <strong>Micro-Lending</strong>
          </a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>

      <Navbar.Collapse>
        <Nav>
          <NavItem componentClass={Link} href="/" to="/">
            <i className="fa fa-home"></i>&nbsp;Home
              </NavItem>
          <NavItem componentClass={Link} href="/" to="/">
            <i className="fa fa-home"></i>&nbsp;Page2
              </NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem href="#">
          <i className="fa fa-sign-in"></i>&nbsp;LogIn
      </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>;

  return navBarSection;
};

export default NavigationBar;
