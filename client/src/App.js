import React from "react";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import GroupPage from "./components/GroupPage/GroupPage";

import 'bootstrap/dist/css/bootstrap.min.css'

// import LogIn from "./pages/Login";
// import HomePage from "./pages/HomePage";
import Signup from "./pages/Signup";
// import ProfilePage from "./pages/ProfilePage";
import GalleryView from "./components/Gallery/GalleryView";
// import LogIn from "./LogIn";
import Login from "./pages/Login"
import Profile from "./Profile";
import Navbar from "./components/Navbar";
import TripForm from "./components/TripForm";
import "bootstrap/dist/css/bootstrap.min.css";
import SavedTrip from "./components/SavedTrip";
// import GroupPage from "./components/GroupPage/GroupPage";
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

  const httpLink = createHttpLink({
    uri: '/graphql',
  });

  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route path="/profile">
            <Navbar setSearchData={setSearchData} />
            <Profile />
            <TripForm />
            <SavedTrip savedTripData={savedTripData} />
            {/* <GroupPage searchData={searchData} savedTripData={savedTripData} />  */}
          </Route>
          <Route path="/GroupPage">
            <Navbar />
            <GroupPage searchData={searchData} savedTripData={savedTripData} setSearchData={setSearchData} />
            <GalleryView />
          </Route>
          <Route exact path="/gallery">
            <GalleryView />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}