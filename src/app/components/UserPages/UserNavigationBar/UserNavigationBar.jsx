import React from 'react';
import './UserNavigationBar.scss';
import { Link } from 'react-router';
import {
  Navbar, Nav, MenuItem, NavItem,
  NavDropdown
} from 'react-bootstrap';

const UserNavigationBar = (props) => {
  let navBarSection =
    <Navbar inverse collapseOnSelect id='userNavBarContainer'>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#brand">
            <strong>Micro-Lending</strong>
          </a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>

      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem componentClass={Link} href="/" to="/">
            Borrowers
              </NavItem>
          <NavItem componentClass={Link} href="/" to="/">
            Investors
              </NavItem>
          <NavItem componentClass={Link} href="/" to="/">
            My Proposals
              </NavItem>
          <NavItem href="#">
            <i className="fa fa-sign-out"></i>&nbsp;Logout
      </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>;

  return navBarSection;
};

export default UserNavigationBar;
