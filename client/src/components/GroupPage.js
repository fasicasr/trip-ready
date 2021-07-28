import React from "react";
import SavedTrip from "./SavedTrip";
import Gallery from "./Gallery";
import SearchResult from "./SearchResult";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
function GroupPage(props) {
  return (
    <Container fluid className="profile">
      <Row>
        <Col>
          <Gallery />
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
