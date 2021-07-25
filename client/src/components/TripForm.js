import React, { useState } from 'react';
import {Button, Modal, Form, Row, Col} from "react-bootstrap"

function TripForm() {
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
    <hr/>
      {/* <div >
        <Button onClick={() => setLgShow(true)}>Create Trip</Button>
      </div> */}

      <div class="row text-center">
        <div class="w-50 mx-auto p-3 " >
        <Button onClick={() => setLgShow(true)}>Create Trip</Button>
        </div>
      </div>
      



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
          <Form.Group as={Col} controlId="formGridInput">
            <Form.Label>Destination Name</Form.Label>
            <Form.Control type="input" placeholder="Lets get away" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridInput">
            <Form.Label>Flight</Form.Label>
            <Form.Control type="input" placeholder="Flight Number" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridInput">
            <Form.Label>Hotel</Form.Label>
            <Form.Control type="input" placeholder="Hotel name" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridInput">
            <Form.Label>Activity</Form.Label>
            <Form.Control type="input" placeholder="List of activities" />
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