import React, { useState } from 'react';
import TripForm from './TripForm';
import Trip from './Trip';

function TripList() {
  const [trip, setTrip] = useState([]);

  // Function to add a trip list item
  const addTripItem = (item) => {
    console.log(
      '🚀 ~ file: TripList.js ~ line 10 ~ addTripItem ~ item',
      item
    );
    // Check to see if the item text is empty
    if (!item.text) {
      return;
    }

    // Add the new trip list item to the existing array of objects
    const newTrip = [item, ...trip];
    console.log(newTrip);

    // Call setTrip to update state with our new set of trip list items
    setTrip(newTrip);
  };

  // Function to mark trip list item as complete
  const completeTripItem = (id) => {
    // If the ID passed to this function matches the ID of the item that was clicked, mark it as complete
    let updatedTrip = trip.map((item) => {
      if (item.id === id) {
        item.isComplete = !item.isComplete;
      }
      return item;
    });

    console.log(updatedTrip);
    setTrip(updatedTrip);
  };

  // Function to remove trip list item and update state
  const removeTripItem = (id) => {
    const updatedTrip = [...trip].filter((item) => item.id !== id);

    setTrip(updatedTrip);
  };

  // Function to edit the trip list item
  const editTripItem = (itemId, newValue) => {
    // Make sure that the value isn't empty
    if (!newValue.text) {
      return;
    }

    // We use the "prev" argument provided with the useState hook to map through our list of items
    // We then check to see if the item ID matches the if of the item that was clicked and if so we set it to a new value
    setTrip((prev) =>
      prev.map((item) => (item.id === itemId ? newValue : item))
    );
  };

  return (
    <div>
      <h1>Welcome (Login) </h1>
      <TripForm onSubmit={addTripItem} />
      <Trip
        trip={trip}
        completeTripItem={completeTripItem}
        removeTripItem={removeTripItem}
        editTripItem={editTripItem}
      ></Trip>
    </div>
  );
}

export default TripList;
