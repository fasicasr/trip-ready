import React from "react";
import SavedTrip from "../SavedTrip";
import Gallery from "../Gallery";
import SearchResult from "../SearchResult";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./GroupPage.css";

function GroupPage(props) {
  return (
    <Container fluid className="profile">
      <Row>
        <Col>
          <Row>
            <Col className="ms-5 border custom">
              <header></header>
              <h5>Destination:</h5>
              <h5>Date:</h5>
              <h5>Description:</h5>
            </Col>
          </Row>
          <Row>
            <Col>
              <Gallery />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col xs={3}>
          <SavedTrip savedTripData={props.savedTripData} />
        </Col>
        <Col xs={9}>
          <SearchResult searchData={props.searchData} />
        </Col>
      </Row>
    </Container>
  );
}

//ustate setup using graphql to pull info from saved trip
export default GroupPage;
