import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Social from './Social';

class Navigation extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Simply You</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">Home</NavItem>
            <NavItem eventKey={2} href="#">Service Providers</NavItem>
            <NavDropdown eventKey={3} title="Services" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Hair</MenuItem>
              <MenuItem eventKey={3.2}>Facials & Waxing</MenuItem>
              <MenuItem eventKey={3.3}>Skincare & Makeup</MenuItem>
              <MenuItem divider />
            </NavDropdown>
            <NavItem eventKey={4} href="#">Weddings</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">Contact Us</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;