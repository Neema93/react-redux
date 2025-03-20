import axios from 'axios';
const API_URL = 'http://localhost:8000/api/recipes';

export const fetchRecipes = () => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_RECIPES_REQUEST' });
    
    axios.get(API_URL)
      .then((response) => {
        dispatch({
          type: 'FETCH_RECIPES_SUCCESS',
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: 'FETCH_RECIPES_FAILURE',
          payload: error.message,
        });
      });
  };
};

