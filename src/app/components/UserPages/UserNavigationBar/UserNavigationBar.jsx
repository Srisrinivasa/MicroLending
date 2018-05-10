import React from 'react';
import './UserNavigationBar.scss';
import { IndexLink, Link } from 'react-router';
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
          <NavItem componentClass={IndexLink}
            activeClassName='activeLink' href="/dashBoard" to="/dashBoard">
            Borrowers
              </NavItem>
          <NavItem componentClass={Link} activeClassName='activeLink' href="/" to="/">
            Investors
              </NavItem>

          <NavDropdown title="My Proposals" id="proposalsDropDown">
            <MenuItem activeClassName='activeLink'
              componentClass={Link} href="/" to="/" >Installments</MenuItem>
            <MenuItem divider />
            <MenuItem activeClassName='activeLink'
            componentClass={Link} href="/" to="/proposals">All Proposals</MenuItem>
          </NavDropdown>

          <NavItem href="#">
            <i className="fa fa-sign-out"></i>&nbsp;Logout
      </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>;

  return navBarSection;
};

export default UserNavigationBar;
