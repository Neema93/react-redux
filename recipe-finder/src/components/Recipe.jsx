import React, { useState }  from 'react';

import RecipeDetails from '../pages/RecipeDetails'
const Recipe = ({ recipe }) => {
  const [showDetails, setShowDetails] = useState(false);
    const ingredientsArray = typeof recipe.ingredients === 'string' 
    ? recipe.ingredients.split(',').map(item => item.trim()) 
    : recipe.ingredients;
    const handleShowDetails = () => {
      setShowDetails(true);  
    };

  return (
    <div className="recipe-box">
      <h2 className='recipe-title'>{recipe.title}</h2>
      <div class="recipe-content">
      <img src={`http://localhost:8000/${recipe.image_url}`} alt={recipe.title} className="recipe-image"/>

      <section class="ingredients">
       <h2>Ingredients:</h2>
      <ul>
        {ingredientsArray.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      
       {showDetails ? (
        <RecipeDetails recipe={recipe} />
      ) : (
        <button onClick={handleShowDetails}>Show more details</button>
      )}
      </section>
   </div>
    </div>
  );
};

export default Recipe;
