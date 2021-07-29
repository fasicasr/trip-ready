import React, { useState } from "react";
import "./profile.css";

function ProfileCaption() {
  const [editMode, setEditMode] = React.useState(false);

  return (
    <div className="profilecaption">
      <img src="./header.jpeg" class="img-fluid" alt="Responsive image"></img>
      <h1 className="caption ms-5"> Name</h1>
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
