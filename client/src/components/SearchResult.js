import { Container, Row, Col, Form, Button } from "react-bootstrap";

function SearchResult({searchResults}) {
  const handleAddToTrip = (event) => {};
  console.log("search result: " + searchResults);

  let itemsToRender;
  if (searchResults) {
    itemsToRender = searchResults.map(item => {
      return (
        <Row>
          <Col className="searchResult">
              <div key={item.name}>Name: {item.name}</div>
              <div>Address: {item.address}</div>
              <div>Rating: {item.rating}</div>
              <div>Type of activity: {item.type}</div>
            <Button variant="dark" onClick={handleAddToTrip}>
              Add to Trip
            </Button>
          </Col>
        </Row>
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
