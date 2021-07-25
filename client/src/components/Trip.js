import React, { useState } from 'react';
import TripForm from './TripForm';

function Trip(props) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
    eagerness: '',
  });

  console.log(props.trip);

  const submitUpdate = (value) => {
    props.editTripItem(edit.id, value);
    setEdit({ id: null, value: '', eagerness: '' });
  };

  if (edit.id) {
    return <TripForm edit={edit} onSubmit={submitUpdate} />;
  }

  return props.trip.map((item, i) => (
    <div
      className={
        item.isComplete
          ? `trip-row complete ${item.eagerness}`
          : `trip-row ${item.eagerness}`
      }
      key={i}
    >
      <div key={item.id} onClick={() => props.completeTripItem(item.id)}>
        {item.text}
      </div>
      <div className="icons">
        {console.log(item)}
        <p onClick={() => setEdit({ id: item.id, value: item.text, eagerness: item.eagerness })}> ✏️</p>
        <p onClick={() => props.removeTripItem(item.id)}> 🗑️</p>
      </div>
    </div>
  ));
}

export default Trip;
