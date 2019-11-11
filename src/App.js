import React from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import './App.css';
import Recipes from "./components/Recipes"
import AddRecipe from "./components/AddRecipe"

const resolvers = {
  Recipe: {
    isStarred: parent => {
      const starredRecipes = JSON.parse(localStorage.getItem("starredRecipes")) || []
      return starredRecipes.includes(parent.id)
    }
  },
  Mutation: {
    updateRecipeStarred: (_, variables) => {
      const starredRecipes = JSON.parse(localStorage.getItem("starredRecipes")) || []

      if (variables.isStarred) {
        localStorage.setItem("starredRecipes", JSON.stringify(starredRecipes.concat([variables.id])))
      } else {
        localStorage.setItem("starredRecipes", JSON.stringify(starredRecipes.filter(recipeId => recipeId !== variables.id)))
      }

      console.log("variables", variables)

      return {
        __typename: "Recipe",
        isStarred: variables.isStarred
      }
    }
  }
}

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  clientState: {
    resolvers
  }
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
