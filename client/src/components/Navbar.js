
import React, { useState, createContext, useContext } from 'react';
import {Button, Navbar, Form, Nav, FormControl} from "react-bootstrap"
import { propTypes } from "react-bootstrap/esm/Image";


const PlacesContext = createContext();

export const usePlacesContext = () => useContext(PlacesContext);

export const PlacesProvider = ({ children }) => {
  const initialState = {
    places: [
      {
        name: '',
        business_status: "",
        formatted_address: "",
        place_id: "",
      },
    ],
  };

  // Provider components expect a value prop to be passed
  return (
    <PlacesContext.Provider value={initialState}>
      {/* Render children passed from props */}
      {children}
    </PlacesContext.Provider>
  );
};



function NavBar() {
  const searchRef = React.useRef();

  const handleSearchClick = (event) => {
    event.preventDefault();
    const destination = document.getElementById("destination-input").value;
    const key = 'AIzaSyCH-vDcWNCDsoG4WXCJ8S9cpFf3jpzzF54';
    const requestUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+${destination}&key=${key}`;

    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      props.setSearchData(searchRef.current.value);
    });
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
          id="destination-input"
        />
        <Button variant="outline-secondary" onClick={handleSearchClick}>
          Search
        </Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
  )
  } 


export default NavBar;
