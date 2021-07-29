import React from "react";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import LogIn from "./LogIn";
// import Profile from "./Profile";
// import Navbar from './components/Navbar';
// import TripForm from './components/TripForm';
// import SavedTrip from './components/SavedTrip'
// import TripSearch from './components/TripSearch'
import GroupPage from "./components/GroupPage";

import 'bootstrap/dist/css/bootstrap.min.css'

import LogIn from "./pages/Login";
import HomePage from "./pages/HomePage";
import Signup from "./pages/Signup";
import ProfilePage from "./pages/ProfilePage";
import GalleryView from "./components/Gallery/GalleryView";

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

export default function App() {
  // const [loggedIn, setLoggedIn] = React.useState(false);

  return (
    <ApolloProvider client={client}>
      <Router>
          <Route exact path="/">
            <LogIn />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/profile">
            <ProfilePage />
          </Route>
          <Route path="/groupPage">
            <GroupPage />
          </Route>
          <Route exact path="/gallery">
            <GalleryView />
          </Route>
      </Router>
    </ApolloProvider>
  );
}


// export default function App() {
//   const [loggedIn, setLoggedIn] = React.useState(false);

//   return (
//     <ApolloProvider client={client}>
//     <Router>
//       <div>
//         <Navbar/>

//         <nav>
//           <ul>
//             {loggedIn ? (
//               <>
//                 <li>
//                   <Link to="/">Log In</Link>
//                 </li>
//                 <li>
//                   <Link to="/profile">Profile</Link>
//                 </li>
//               </>
//             ) : null}
//             {/* //{" "}
//             <li>
//               // <Link to="/">Log In</Link>
//               //{" "}
//             </li>
//             //{" "}
//             <li>
//               // <Link to="/profile">Profile</Link>
//               //{" "}
//             </li>
//             {/* <li>
//               <Link to="/users">Users</Link>
//             </li> */}
//           </ul>
//         </nav>

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Switch>
//           <Route path="/profile">
//             <Profile />
//             <TripSearch />
//             <TripForm />
//             <SavedTrip />
//             <GroupPage />
//           </Route>
//           <Route path="/GroupPage">
//             <GroupPage />
//           </Route>

//           {/* <Route path="/users">
//             <Users />
//           </Route> */}
//           <Route path="/">
//             <LogIn />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//     </ApolloProvider>
//   );
// }