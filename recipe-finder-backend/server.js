const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(cors());
// get all Recipe
app.get('/api/recipes', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM recipes');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});
// search recipe

app.get('/search', async (req, res) => {
  const { query } = req.query;  

  if (!query) {
    return res.status(400).json({ error: 'Query parameter is required' });
  }

  try {

    const sqlQuery = `
      SELECT * FROM recipes
      WHERE title ILIKE $1 OR ingredients ILIKE $1
      LIMIT 10; 
    `;
    const result = await db.query(sqlQuery, [`%${query}%`]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'No recipes found' });
    }

    res.json(result.rows);  
  } catch (err) {
    console.error('Error fetching recipes:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});
const port = process.env.port || 8000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});