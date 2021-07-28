import { Card, Button, ListGroup, Container, Row, Col } from "react-bootstrap";

function SavedTrip(props) {
  return (
    <Container fluid="md">
      {props.savedTripData.map((item) => (
        <Row>
          <Col>
            <Card style={{ width: "100%" }}>
              <Card.Header>Trip Title</Card.Header>
              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <strong>Location</strong>: Paris
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Date</strong>: August 5th - 10th
                  </ListGroup.Item>
                </ListGroup>
                <Button primary="dark">
                  <a href="./GroupPage">open</a>
                </Button>
                ;{/* <Button variant="dark">Open</Button> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
    </Container>
  );
  {
    /* <Row></Row>
        <Row>
          <Col sm={4}>
            <Card style={{ width: "100%" }}>
              <Card.Header>Trip Title</Card.Header>
              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <strong>Location</strong>: Paris
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Date</strong>: August 1st - 10th
                  </ListGroup.Item>
                </ListGroup>
                <Button variant="dark">Open</Button>
              </Card.Body>
            </Card>
            <hr></hr>
            <Card style={{ width: "100%" }}>
              <Card.Header>Trip Title</Card.Header>
              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <strong>Location</strong>: Paris
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Date</strong>: August 1st - 10th
                  </ListGroup.Item>
                </ListGroup>
                {/* //link from open button with url with this id/grouppage\ to group page */
  }
  <Button primary="dark">
    <a href="./GroupPage">open</a>
  </Button>;
  {
    /* <Button variant="dark">Open</Button> */
  }
  //             </Card.Body>
  //           </Card>
  //         </Col>
  //         <Col sm={4}></Col>
  //       </Row>
  //     </Container>
  //   </> */}
  // );
}
export default SavedTrip;
