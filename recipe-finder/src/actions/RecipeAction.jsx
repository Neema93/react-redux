import axios from 'axios';


export const fetchRecipes = () => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_RECIPES_REQUEST' });
    
    axios.get('http://localhost:8000/api/recipes')
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
