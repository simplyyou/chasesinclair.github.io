import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class Navigation extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <LinkContainer to="/">
              <a>Simply You</a>
            </LinkContainer>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/">
              <NavItem eventKey={1}>Home</NavItem>
            </LinkContainer>
            <LinkContainer to="/service">
              <NavItem eventKey={2}>Service Providers</NavItem>
            </LinkContainer>
            <NavDropdown eventKey={3} title="Services" id="basic-nav-dropdown">
              <LinkContainer to="/service">
                <MenuItem eventKey={3.1}>Hair</MenuItem>
              </LinkContainer>
              <LinkContainer to="/service">
                <MenuItem eventKey={3.2}>Facials & Waxing</MenuItem>
              </LinkContainer>
              <LinkContainer to="/service">
                <MenuItem eventKey={3.3}>Skincare & Makeup</MenuItem>
              </LinkContainer>
            </NavDropdown>
            <LinkContainer to="/service">
              <NavItem eventKey={4} href="">Weddings</NavItem>
            </LinkContainer>
          </Nav>
          <Nav pullRight>
            <LinkContainer to="/service">
              <NavItem eventKey={1} href="">Contact Us</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;