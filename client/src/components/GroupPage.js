import React, {useState} from "react";
import SavedTrip from "./SavedTrip";
import Gallery from "./Gallery";
import SearchResult from "./SearchResult";
import { Container, Card, Row, Col, Form, Button } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";

function GroupPage(props) {
  const [hotels, setHotels] = useState([]);
  const [things, setThings] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const searchRef = React.useRef();
  const handleSearchClick = (event) => {
    event.preventDefault();
    const destination = document.getElementById("destinationInput").value;
    if(document.getElementById("thingsToDoCheck").checked){
      renderThingsToDoSearch(destination);
    }else{
      renderHotelsData(destination);
    }    
  };

  const renderThingsToDoSearch = (destination) => {
    const key = 'AIzaSyCH-vDcWNCDsoG4WXCJ8S9cpFf3jpzzF54';
    const requestUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=things%20to%20do+in+${destination}&key=${key}`;

    fetch(requestUrl)
    .then(response => response.json())
    .then(data => {
      // console.log(data)
      let object = [];
      for(let i = 0; i < 5; i++){
        object.push({
          name: data.results[i].name,
          address: data.results[i].formatted_address,
          rating: data.results[i].rating,
          type: data.results[i].types[0],
          // open_now: data.results[i].opening_hours.open_now
        })
      }
      console.log(object);
      console.log(data);
      // props.setSearchData(searchRef.current.object);
      setSearchResults(object);
      return data;
    });
  }

  const renderHotelsData = async (destination, startDate, endDate) => {
    startDate = '2020-01-08';
    endDate = '2020-01-15';
    const urlCity = `https://hotels4.p.rapidapi.com/locations/search?locale=en_US&query=${destination}`;
    const urlHotels = `https://hotels4.p.rapidapi.com/properties/list?adults1=1&pageNumber=1&pageSize=25&sortOrder=GUEST_RATING&locale=en_US&currency=USD`;
    const options = await fetch(urlCity, {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '104de11843msh5ae1c2f8ad1b87cp1c6c24jsn3f47b6dc594d',
        'x-rapidapi-host': 'hotels4.p.rapidapi.com'
      }
    });
    options.json().then(data => {
      const cityId = data.suggestions[0].entities[0].destinationId;
      fetch(`${urlHotels}&destinationId=${cityId}&
                        checkOut=${endDate}&
                        checkIn=${startDate}`, {
        "method": "GET",
        "headers": {
          "x-rapidapi-key": "104de11843msh5ae1c2f8ad1b87cp1c6c24jsn3f47b6dc594d",
          "x-rapidapi-host": "hotels4.p.rapidapi.com"
        }
      })
      .then(res => res.json())
      .then(data => {
        const results = data.data.body.searchResults.results;
        const object = [];
        for (let i = 0; i < 5; i++){
          object.push({
            name: results[i].name,
            address: results[i].address.streetAddress,
            neighbourhood: results[i].neighbourhood,
            rating: results[i].starRating
          })
        }
        // props.setSearchData(searchRef.current.object);
        setSearchResults(object);
        console.log(object);
        return object;
      })
    });
  }

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
            <Form.Control size="lg" type="input" id="destinationInput" placeholder="" />
           
            <Col sm={10}>
              <Form.Check
                type="radio"
                label="Things to do"
                name="formHorizontalRadios"
                id="thingsToDoCheck"
              />
              <Form.Check
                type="radio"
                label="Hotel"
                name="formHorizontalRadios"
                id="hotelsCheck"
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
          <SearchResult searchResults={searchResults} />
        </Col>
      </Row>
    </Container>
  );
}

//ustate setup using graphql to pull info from saved trip
export default GroupPage;