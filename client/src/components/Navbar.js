import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap"
import { propTypes } from "react-bootstrap/esm/Image";
import { Link } from "react-router-dom";
import Profile from '../Profile';

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Trip Ready</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/profile">Home</Nav.Link>
      <Nav.Link href="#logout">Logout</Nav.Link>
    
    </Nav>
    </Container>
  </Navbar>
  );
}

export default NavBar;