import React, { useState, createContext, useContext } from 'react';
import {Container, Nav, Navbar} from "react-bootstrap"
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
      // props.setSearchData(searchRef.current.value);
    });
  };

  return (
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Trip Ready</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#logout">Logout</Nav.Link>
    
    </Nav>
    </Container>
  </Navbar>
  );
}

export default NavBar;