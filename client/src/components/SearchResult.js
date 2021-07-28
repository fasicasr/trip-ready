import { Container, Row, Col, Form, Button } from "react-bootstrap";

const searchData = [
  { id: 1, content: "Result 1" },
  { id: 2, content: "Result 2" },
  { id: 3, content: "Result 3" },
];

function SearchResult(props) {
  const handleAddToTrip = (event) => {};
  return (
    <Container fluid="md">
      {/* add props.searchdata here to replace result 1 tag with data rendered from api */}
      {searchData.map((item) => (
        <Row>
          <Col className="searchResult">
            {item.content}
            <Button variant="dark" onClick={handleAddToTrip}>
              Add to Trip
            </Button>
          </Col>
        </Row>
      ))}
    </Container>
  );
}
export default SearchResult;
