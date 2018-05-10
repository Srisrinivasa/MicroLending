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
          <NavItem componentClass={Link} activeClassName='activeLink' href="/dashBoard" to="/dashBoard">
            Borrowers
              </NavItem>
          <NavItem componentClass={Link} href="/" to="/">
            Investors
              </NavItem>

          <NavDropdown title="My Proposals" id="proposalsDropDown">
            <MenuItem className='menuItem' componentClass={Link} href="/" to="/" >Installments</MenuItem>
            <MenuItem divider />
            <MenuItem componentClass={Link} href="/" to="/" >All Proposals</MenuItem>
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
