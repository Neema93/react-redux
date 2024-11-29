import React from "react";

const RecipeDetails = ({ recipe }) => {
  return (
    <div>
      <h3>Instructions:</h3>
      <p>{recipe.instructions}</p>
      
    </div>
  );
};

export default RecipeDetails;