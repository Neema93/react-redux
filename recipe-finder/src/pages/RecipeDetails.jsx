import React from "react";

const RecipeDetails = ({ recipe }) => {
  return (
    <div >
 <section class="instructions">
      <h3>Instructions:</h3>
      <p>{recipe.instructions}</p>
      </section>
    </div>
  );
};

export default RecipeDetails;