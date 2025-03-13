// RecipeSearch.js
import React, { useState } from 'react';
import axios from 'axios';

const RecipeSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();  // Prevent page refresh

    if (!searchQuery) {
      setError('Please enter a search term');
      return;
    }

    try {
      // Send GET request to the backend search endpoint
      const response = await axios.get(`http://localhost:8000/search?query=${searchQuery}`);
      setRecipes(response.data);  // Set the recipes state with the search results

      setError('');
    } catch (err) {
      console.error('Error fetching search results:', err);
      setError('No recipes found');
      setRecipes([]);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search for recipes..."
          className='search'
        />
        <button type="submit">Search</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {recipes.length > 0 ? (
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <h3>{recipe.title}</h3>
              <p>{recipe.ingredients}</p>
              <p>{recipe.instructions}</p>
              <img src={`http://localhost:8000/${recipe.image_url}`} alt={recipe.title} className="recipe-image"/>

            </li>
          ))}
        </ul>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default RecipeSearch;
