import React, { useState } from 'react';
import { Query, Mutation } from "react-apollo";
import { recipesQuery } from "../queries/recipesQuery";
import gql from "graphql-tag";

const updateRecipeStarredMutation = gql`
  mutation updateRecipeStarred($id: ID!, $isStarred: Boolean!) {
    updateRecipeStarred (id: $id, isStarred: $isStarred) @client
  }
`

function Recipes() {
  const [vegetarian, setVegetarian] = useState(false);

  return <Query query={recipesQuery} variables={{ vegetarian }}>
    {({ data, loading, error }) => {
      if (loading) { return <p>Loading...</p> }
      if (error) { return <p>Something wrong happen...</p> }
      // console.log(data)
      return <div>
        <input type="checkbox" checked={vegetarian} onChange={e => setVegetarian(!vegetarian)} /> vegetarian only
        <ul>{data.recipes.map(({ id, title, vegetarian, isStarred }) =>
          <li key={id}>
            {title} |
            vegetarian: {vegetarian ? "Yes" : "No"} |
            <Mutation
              mutation={updateRecipeStarredMutation}
              refetchQueries={[
                { query: recipesQuery, variables: { vegetarian: true } },
                { query: recipesQuery, variables: { vegetarian: false } }
              ]}
              awaitRefetchQueries={true}
            >
              {(updateRecipeStarred, { loading, error }) => (
                <span
                  onClick={() => updateRecipeStarred({
                    variables: {
                      isStarred: !isStarred,
                      id
                    }
                  })}
                  style={{ cursor: "pointer", color: isStarred ? "orange" : "gray" }}
                  role="img"> ⭐ </span>
              )}
            </Mutation>
          </li>)}
        </ul>
      </div>
    }}
  </Query>
}

export default Recipes;
