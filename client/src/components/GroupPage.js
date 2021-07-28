import React from "react";
import SavedTrip from "./SavedTrip";

function GroupPage() {
  return (
    <div className="profile">
      <SavedTrip />
    </div>
  );
}

//ustate setup using graphql to pull info from saved trip
export default GroupPage;
