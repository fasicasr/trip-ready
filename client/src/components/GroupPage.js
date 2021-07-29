import React from "react";
import SavedTrip from "./SavedTrip";
import Gallery from "./Gallery";
import SearchResult from "./SearchResult";
import { Container, Card, Row, Col, Form, Button } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";

function GroupPage(props) {
  const searchRef = React.useRef();
  const handleSearchClick = (event) => {
    //fetch data from api using this input value here - pass in api results in setSearchData
    props.setSearchData(searchRef.current.value);
  };
  return (
    <Container fluid className="profile">
      <Row>
        <Col>
          <h6>Destination:</h6>
          <h6>Date:</h6>
          <h6>Description:</h6>
          <Card  >
            <Card.Header className="text-center">Where to?</Card.Header>
            <Card.Body>
            <Form.Label>Destination:</Form.Label>
            <Form.Control size="lg" type="input" placeholder="" />
           
            <Col sm={10}>
                            <Form.Check
                            type="radio"
                            label="Things to do"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                            />
                            <Form.Check
                            type="radio"
                            label="Hotel"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                            />

                </Col>
            </Card.Body>
            <Button variant="dark" onClick={handleSearchClick}>
                 search
                </Button>
        </Card>
        <hr></hr>
        <div className="float-right">
        <Button variant="outline-dark" size="lg">Invite Friends</Button>
        </div>
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
