import React, { useState } from 'react';
import axios from 'axios';

const RecipeUpload = () => {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [image, setImage] = useState(null);

  // Handle file input change
  const onFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Handle form submit to upload recipe
  const onSubmit = async (e) => {
    e.preventDefault();

    // Prepare the form data
    const formData = new FormData();
    formData.append('name', name);
    formData.append('ingredients', ingredients);
    formData.append('instructions', instructions);
    formData.append('image', image);

    try {
      const response = await axios.post('http://localhost:8000/recipes/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data); // Recipe upload response
    } catch (error) {
      console.error('Error uploading recipe:', error);
    }
  };


  return (
    <div>
      <h1>Upload Recipe</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Recipe Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br/>
        <textarea
          placeholder="Ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <textarea
          placeholder="Instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
        />
        <input type="file" onChange={onFileChange} />
        <button type="submit">Upload Recipe</button>
      </form>
    </div>
  );
};

export default RecipeUpload;
