import { Container, Row, Col, Form, Button, Card, ListGroup} from "react-bootstrap";

function SearchResult({searchResults}) {
  const handleAddToTrip = (event) => {};
  console.log("search result: " + searchResults);

  let itemsToRender;
  if (searchResults) {
    itemsToRender = searchResults.map(item => {
      return (
        <Container>
          <Row></Row>
          <Row>
            <Col sm={4}>
            <Card style={{ width: "100%" }}>
              <Card.Header>Trip Title</Card.Header>
              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <strong>Location</strong>: {item.name}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Address</strong>: {item.address}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Rating</strong>: {item.rating}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Type of activity</strong>: {item.type}
                  </ListGroup.Item>
                </ListGroup>
                <Button variant="dark">Open</Button>
              </Card.Body>
            </Card>
            </Col>
          </Row>
        </Container>
      )
    });
  }

  return (
    <Container fluid="md">
      {itemsToRender}        
    </Container>
  );
}
export default SearchResult;
