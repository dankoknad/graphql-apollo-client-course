import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const recipesQuery = gql`{
  recipes {
    id
    title
  }
}`

function Recipes() {
  return <Query query={recipesQuery}>
    {({ data, loading, error }) => {
      if (loading) { return <p>Loading...</p> }
      if (error) { return <p>Something wrong happen...</p> }
      return data.recipes.map(rec => <div key={rec.id}>{rec.title}</div>)
    }}
  </Query>
}

export default Recipes;
