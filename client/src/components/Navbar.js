import React from 'react';
import {Button, Navbar, Form, Nav, FormControl} from "react-bootstrap"

function NavBar() {
  return (
  <Navbar bg="dark" variant="dark" expand="lg">
   
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="mr-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Logout</Nav.Link>
    
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Enter destination"
          className="mr-2"
          aria-label="Search"
        />
        <Button variant="outline-secondary">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
  );
}

export default NavBar;