import React, { useState } from "react";
function ProfileCaption() {
  const [editMode, setEditMode] = React.useState(false);

  return (
    <div className="profilecaption">
      <Container fluid>
        <Row>
          <Col>1 of 1</Col>
          <h1>Profile Information</h1>
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
        </Row>
      </Container>
    </div>
  );
}
export default ProfileContact;
