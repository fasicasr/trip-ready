import React, { useState } from "react";
function ProfileCaption() {
  const [editMode, setEditMode] = React.useState(false);

  return (
    <div className="profilecaption">
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
