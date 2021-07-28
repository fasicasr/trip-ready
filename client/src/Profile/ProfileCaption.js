import React, { useState } from "react";
function ProfileCaption() {
  const [editMode, setEditMode] = React.useState(false);

  return (
    <div className="profilecaption">
      <h1>Name</h1>
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
      <h1>About Me</h1>
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
      <h1>Email</h1>
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
