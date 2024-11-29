import React, { useState }  from 'react';
import './../styles/Recipe.css'
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
    <div className="recipe">
      <h2>{recipe.title}</h2>
     
      <img src={recipe.image_url} alt={recipe.title} />


       <h3>Ingredients:</h3>
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
   
    </div>
  );
};

export default Recipe;
