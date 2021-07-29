import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LogIn from "./LogIn";
import Profile from "./Profile";
import Navbar from "./components/Navbar";
import TripForm from "./components/TripForm";
import "bootstrap/dist/css/bootstrap.min.css";
import SavedTrip from "./components/SavedTrip";
import GroupPage from "./components/GroupPage";
import { propTypes } from "react-bootstrap/esm/Image";
const testSavedTripData = [
  { id: 1, content: "Result 1" },
  { id: 2, content: "Result 2" },
  { id: 3, content: "Result 3" },
];
export default function App() {
  //setting loggedIn variable to false initially - once logged in - call setLoggedIn function and pass in true
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [searchData, setSearchData] = React.useState(null);
  const [savedTripData, setSavedTripData] = React.useState(testSavedTripData);
  return (
    <Router>
      <div>
       

        <nav>
          <ul>
            {loggedIn ? (
              <>
                <li>
                  <Link to="/">Log In</Link>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
              </>
            ) : null}
            {/* //{" "}
            <li>
              // <Link to="/">Log In</Link>
              //{" "}
            </li>
            //{" "}
            <li>
              // <Link to="/profile">Profile</Link>
              //{" "}
            </li>
            {/* <li>
              <Link to="/users">Users</Link>
            </li> */}
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/profile">
          <Navbar setSearchData={setSearchData} />
            <Profile />
            <TripForm />
            <SavedTrip savedTripData={savedTripData} />
            {/* <GroupPage searchData={searchData} savedTripData={savedTripData} />  */}
          </Route>
          <Route path="/GroupPage">
          <Navbar/>
            <GroupPage searchData={searchData} savedTripData={savedTripData} setSearchData={setSearchData}/>
          </Route>

          {/* <Route path="/users">
            <Users />
          </Route> */}
          <Route path="/">
            <LogIn />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }
