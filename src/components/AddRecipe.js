import React, { useState } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { recipesQuery } from "../queries/recipesQuery";

const addRecipeMutation = gql`
  mutation addRecipe ($recipe: RecipeInput!) {
    addRecipe (recipe: $recipe) {
      title
      vegetarian
    }
  }
`

function AddRecipe() {
  const [recipe, setRecipe] = useState({ title: "", vegetarian: false });

  return (
    <Mutation
      mutation={addRecipeMutation}
      refetchQueries={[
        { query: recipesQuery, variables: { vegetarian: true } },
        { query: recipesQuery, variables: { vegetarian: false } }
      ]}
      awaitRefetchQueries={true}
    >
      {(addRecipe, { loading, error }) => {
        if (loading) { return <p>Saving data..</p> }
        else if (!error) {
          return (
            <form onSubmit={e => {
              e.preventDefault()
              addRecipe({
                variables: { recipe }
              })
              setRecipe({ title: "", vegetarian: false })
            }}>
              <label>Recipe title: </label>
              <input
                value={recipe.title}
                onChange={e => setRecipe({ ...recipe, title: e.target.value })}
              />
              <br />
              <label> Vegetarian: </label>
              <input
                type="checkbox"
                checked={recipe.vegetarian}
                onChange={e => setRecipe({ ...recipe, vegetarian: !recipe.vegetarian })}
              /><br />
              <button type="submit">Save</button>
              <br /><br /><br />
            </form>
          )
        }
      }}
    </Mutation>
  )
}

export default AddRecipe;
