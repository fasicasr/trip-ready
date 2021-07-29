import React, { useState } from "react";
import "./profile.css";
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
      <h1>Name</h1>
      <form>
        <div>
          {editMode ? (
            <>
              <textarea />
              <button className="btn" onClick={() => setEditMode(false)}>
                Save
              </button>
            </>
          ) : (
            <button className="btn-2" onClick={() => setEditMode(true)}>
              Edit
            </button>
          )}
        </div>
      </form>
      <h1 className="caption ms-5"> About Me</h1>
      <form>
        <div>
          {editMode ? (
            <>
              <textarea />
              <button onClick={() => setEditMode(false)}>Save</button>
            </>
          ) : (
            <button onClick={() => setEditMode(true)}>Edit</button>
          )}
        </div>
      </form>
      <h1 className="caption ms-5">Email</h1>
      <form>
        <div>
          {editMode ? (
            <>
              <textarea />
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
