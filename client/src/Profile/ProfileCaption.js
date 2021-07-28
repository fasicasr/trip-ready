import React, { useState } from "react";
import { usePlacesContext } from '../components/Navbar';


function ProfileCaption() {
  const [editMode, setEditMode] = React.useState(false);
  // const { places } = usePlacesContext();

  return (
    <div className="profilecaption">

      {/* {places.map((place) => (
        <div>key={place.name}
        {place.name} : {place.formatted_address}
        </div>
      ))} */}

      <h1>Profile Caption</h1>
      <form>
        <div>
          {editMode ? (
            <>
              <input />
              <button onClick={() => setEditMode(false)}>Save</button>
            </>
          ) : (
            <button onClick={() => setEditMode(true)}>Edit</button>
          )}
        </div>
      </form>
    </div>
  );
}
export default ProfileCaption;
