import React from 'react';
import './NavigationBar.css';
import { Link } from 'react-router';
import { Navbar, Nav, MenuItem, NavItem,
    NavDropdown } from 'react-bootstrap';

const NavigationBar = (props) => {
    let navBarSection =
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">Micro-Lending</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
            
          <Navbar.Collapse>
            <Nav>
              <NavItem componentClass={Link} href="/" to="/">
                <i className="fa fa-home fa-sm"></i>&nbsp;Home
              </NavItem>
            </Nav>
            </Navbar.Collapse>
        </Navbar>;

    return navBarSection;
  };

export default NavigationBar;
