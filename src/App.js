import React from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import './App.css';
import Recipes from "./components/Recipes"

const client = new ApolloClient({
  uri: "http://localhost:4000/"
})



function App() {
  return (
    <ApolloProvider client={client}>
      <Recipes />
    </ApolloProvider>
  );
}

export default App;
