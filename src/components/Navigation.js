import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../images/fulls/logo_header.png';

class Navigation extends Component {
  render() {
    return (
      <div>
      <header>
        <img className="img header-img" id="logo-main" src={logo} width="200" alt="Simply You"></img>
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
              <LinkContainer to="/decor">
                <NavItem eventKey={1}>Home Decor</NavItem>
              </LinkContainer>
              <LinkContainer to="/service">
                <NavItem eventKey={2}>Salon</NavItem>
              </LinkContainer>
              <LinkContainer to="/stuff">
                <NavItem eventKey={2}>Boutique</NavItem>
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