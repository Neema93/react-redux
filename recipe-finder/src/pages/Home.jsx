
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Recipe from '../components/Recipe';
import RecipeSearch from './RecipeSearch';
import RecipeUpload from './RcipeUpload';

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:8000/api/recipes')

      .then(response => {
        setRecipes(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('There was an error fetching the recipes!', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading recipes...</div>;
  }

  return (
    <div >
      <RecipeSearch /> 
      <RecipeUpload />
    <h1>Recipe List</h1>
    {recipes.length === 0 ? (
      <p>No recipes found.</p>
    ) : (
      recipes.map(recipe => (
        <Recipe key={recipe.id} recipe={recipe} />
      ))
    )}
  </div>
  );
};

export default Home;