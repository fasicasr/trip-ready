import React from "react";
import SavedTrip from "./SavedTrip";
import TripForm from "./TripForm";

function GroupPage() {
  return (
    <div className="profile">
      <TripForm />
      <SavedTrip />
    </div>
  );
}

//ustate setup using graphql to pull info from saved trip
export default GroupPage;
