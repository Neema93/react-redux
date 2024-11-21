import React from 'react';
import './../styles/Recipe.css'
const Recipe = ({ recipe }) => {
    const ingredientsArray = typeof recipe.ingredients === 'string' 
    ? recipe.ingredients.split(',').map(item => item.trim()) 
    : recipe.ingredients;
  return (
    <div className="recipe">
      <h2>{recipe.title}</h2>
      {/* <h3>Ingredients:</h3> */}
      <img src={recipe.image_url} alt={recipe.title}/>
      {/* <ul>
        {ingredientsArray.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul> */}
      <h3>Instructions:</h3>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default Recipe;
