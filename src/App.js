import React from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import './App.css';
import Recipes from "./components/Recipes"
import AddRecipe from "./components/AddRecipe"

const client = new ApolloClient({
  uri: "http://localhost:4000/"
})



function App() {
  return (
    <ApolloProvider client={client}>
      <AddRecipe />
      <Recipes />
    </ApolloProvider>
  );
}

export default App;
