import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Navbar from './components/Navbar';
import TripList from './components/TripList';
import './App.css';

function App() {
  return (
    <div>
        <Navbar />
        <TripList />
        {/* <OmdbContainer /> */}
    </div>
    
  );
}




// const client = new ApolloClient({
//   uri: '/graphql',
//   cache: new InMemoryCache(),
// });

// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

export default App;
