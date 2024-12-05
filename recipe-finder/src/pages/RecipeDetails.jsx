import React from "react";

const RecipeDetails = ({ recipe }) => {
  return (
    <div >
 <section class="instructions">
      <h2>Instructions:</h2>
      <p>{recipe.instructions}</p>
      </section>
    </div>
  );
};

export default RecipeDetails;