import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LogIn from "./LogIn";
import Profile from "./Profile";
import Navbar from './components/Navbar';
import TripList from './components/TripList';
import 'bootstrap/dist/css/bootstrap.min.css'


export default function App() {
  //setting loggedIn variable to false initially - once logged in - call setLoggedIn function and pass in true
  const [loggedIn, setLoggedIn] = React.useState(false);

  return (
 
    <Router>
      <div>
        <Navbar/>
        <TripList />
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
            <Profile />
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
