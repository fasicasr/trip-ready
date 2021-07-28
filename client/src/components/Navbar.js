import React from "react";
import { Button, Navbar, Form, Nav, FormControl } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";

function NavBar(props) {
  const searchRef = React.useRef();
  const handleSearchClick = (event) => {
    //fetch data from api using this input value here - pass in api results in setSearchData
    props.setSearchData(searchRef.current.value);
  };
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
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
            ref={searchRef}
          />
          <Button variant="outline-secondary" onClick={handleSearchClick}>
            Search
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
