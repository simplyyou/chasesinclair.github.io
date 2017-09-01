import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo3 from '../images/logo3.png';

class Navigation extends Component {
  render() {
    return (
      <div className="header-container">
      <header>
        <img className="img header-img" id="logo-main" src={logo3} alt="Simply You"></img>
        <Navbar collapseOnSelect>
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
              <NavDropdown eventKey={1} title="Home Decor" id="basic-nav-dropdown">
                <LinkContainer to="/service">
                  <MenuItem eventKey={1.1}>Interiors</MenuItem>
                </LinkContainer>
                <LinkContainer to="/contact">
                  <MenuItem eventKey={1.2}>Custom Metal Signs</MenuItem>
                </LinkContainer>
                <LinkContainer to="/contact">
                  <MenuItem eventKey={1.3}>Seasonal</MenuItem>
                </LinkContainer>
                <LinkContainer to="/contact">
                  <MenuItem eventKey={1.4}>Gift Ideas</MenuItem>
                </LinkContainer>
              </NavDropdown>
              <NavDropdown eventKey={2} title="Salon" id="basic-nav-dropdown">
                <LinkContainer to="/service">
                  <MenuItem eventKey={2.1}>Services</MenuItem>
                </LinkContainer>
                <LinkContainer to="/contact">
                  <MenuItem eventKey={2.2}>Team Members</MenuItem>
                </LinkContainer>
              </NavDropdown>
              <LinkContainer to="/stuff">
                <NavItem eventKey={3}>Boutique</NavItem>
              </LinkContainer>
            </Nav>
            <Nav pullRight>
              <LinkContainer to="/contact">
                <NavItem eventKey={1}>Contact Us</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
      </div>
    );
  }
}

export default Navigation;