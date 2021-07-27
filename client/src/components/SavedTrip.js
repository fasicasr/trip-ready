import {Card, Button, ListGroup, Container, Row, Col} from "react-bootstrap"

function SavedTrip() {
    return (
    <>

    <Container>
    <Row>
        
    </Row>    
    <Row>
        <Col sm={4}>
        <Card style={{ width: '100%' }} >      
            <Card.Header>Trip Title</Card.Header>
            <Card.Body>
                <ListGroup variant="flush">
                    <ListGroup.Item><strong>Location</strong>: Paris</ListGroup.Item>
                    <ListGroup.Item><strong>Date</strong>: August 1st - 10th</ListGroup.Item>
                </ListGroup>
                <Button variant="primary">Open</Button>
            </Card.Body>
        </Card>
        <hr></hr>
        <Card style={{ width: '100%' }} >      
            <Card.Header>Trip Title</Card.Header>
            <Card.Body>
                <ListGroup variant="flush">
                    <ListGroup.Item><strong>Location</strong>: Paris</ListGroup.Item>
                    <ListGroup.Item><strong>Date</strong>: August 1st - 10th</ListGroup.Item>
                </ListGroup>
                <Button variant="primary">Open</Button>
            </Card.Body>
        </Card>
        
        </Col>
        <Col sm={4}></Col>
  
        </Row>
    </Container>
    
    </>

    )
}
export default SavedTrip