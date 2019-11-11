import React, { useState } from 'react';
import { Query } from "react-apollo";
import { recipesQuery } from "../queries/recipesQuery";

function Recipes() {
  const [vegetarian, setVegetarian] = useState(false);

  return <Query query={recipesQuery} variables={{ vegetarian }}>
    {({ data, loading, error }) => {
      if (loading) { return <p>Loading...</p> }
      if (error) { return <p>Something wrong happen...</p> }
      // console.log(data)
      return <div>
        <input type="checkbox" checked={vegetarian} onChange={e => setVegetarian(!vegetarian)} /> vegetarian only
        <ul>{data.recipes.map(rec => <div key={rec.id}>{rec.title} | vegetarian: {rec.vegetarian ? "Yes" : "No"}</div>)}</ul>
      </div>
    }}
  </Query>
}

export default Recipes;
