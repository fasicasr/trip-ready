import React, { useState } from "react";
import { Button, Modal, Form, Row, Col, FloatingLabel  } from "react-bootstrap";

function TripForm() {
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
    <hr></hr>
      <div class="row text-center">
        <div class="w-50 mx-auto p-3 ">
          <Button variant="dark" onClick={() => setLgShow(true)}>
            Create Trip
          </Button>
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
                <Form.Label>Date</Form.Label>
                <Form.Control type="input" placeholder="From" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridInput">
                <Form.Label>...</Form.Label>
                <Form.Control type="input" placeholder="to" />
              </Form.Group>
            </Row>
            <FloatingLabel controlId="floatingTextarea2" label="Description">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: '100px' }}
              />
            </FloatingLabel>
            <Form.Group controlId="formFileSm" className="mb-3">
              <Form.Label></Form.Label>
              <Form.Control type="file" size="sm" />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Button variant="dark">Submit</Button>
      </Modal>
    </>
  );
}

export default TripForm;
