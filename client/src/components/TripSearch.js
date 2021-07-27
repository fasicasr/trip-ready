import {Card, Form, Row, Button , Col} from "react-bootstrap"

function TripSearch() {
    return (
    <>
      <hr/>
        <Card  >
            <Card.Header className="text-center">Where to?</Card.Header>
            <Card.Body>
            <Col sm={10}>
                            <Form.Check
                            type="radio"
                            label="One-way"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                            />
                            <Form.Check
                            type="radio"
                            label="Round-trip"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                            />
                    
                </Col>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridInput">
                        <Form.Label>From</Form.Label>
                        <Form.Control type="input" placeholder="Leaving from" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridInput">
                        <Form.Label>To</Form.Label>
                        <Form.Control type="input" placeholder="Going to" />
                    </Form.Group>
                 </Row>
                 <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridInput">
                        <Form.Label>Departing</Form.Label>
                        <Form.Control type="input" placeholder="Enter date" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridInput">
                        <Form.Label>Returning</Form.Label>
                        <Form.Control type="input" placeholder="Enter date" />
                    </Form.Group>
                 </Row>
                 <div className="d-grid gap-2">
                <Button variant="primary" >Search</Button>
                </div>
            </Card.Body>
           
        </Card>

    
    </>

   )
}
export default TripSearch


