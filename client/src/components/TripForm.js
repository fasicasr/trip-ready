import React, { useState } from 'react';
import {Button, Modal, Form, Row, Col} from "react-bootstrap"

function TripForm() {
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <Button onClick={() => setLgShow(true)}>Create Trip</Button>
    
     <Modal 
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Enter Trip Information
          </Modal.Title>
        </Modal.Header>
        <Modal.Body> 
        <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Destination Name</Form.Label>
            <Form.Control type="email" placeholder="Lets get away" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Flight</Form.Label>
            <Form.Control type="email" placeholder="Flight Number" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Hotel</Form.Label>
            <Form.Control type="password" placeholder="Hotel name" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Activity</Form.Label>
            <Form.Control type="email" placeholder="List of activities" />
          </Form.Group>
        </Row>
        <Form.Group controlId="formFileSm" className="mb-3">
          <Form.Label></Form.Label>
          <Form.Control type="file" size="sm" />
        </Form.Group>

        </Form>
        </Modal.Body>
       
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Modal>
    </>
  );
}




export default TripForm;