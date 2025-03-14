import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Recipe from '../components/Recipe';
import RecipeSearch from './RecipeSearch';
import { fetchRecipes } from '../actions/RecipeAction';

const Home = () => {
  const dispatch = useDispatch();
  const { recipes, loading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  if (loading) {
    return <div>Loading recipes...</div>;
  }

  if (error) {
    return <div>{`Error: ${error}`}</div>;
  }

  return (
    <div>
      <RecipeSearch />
      <h1>Recipe List</h1>
      <div className='recipe-section'>
        {recipes.length === 0 ? (
          <p>No recipes found.</p>
        ) : (
          recipes.map(recipe => (
            <Recipe key={recipe.id} recipe={recipe} />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
