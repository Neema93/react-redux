const express = require('express');
const db = require('./db');

const app = express();

app.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM recipes');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});
const port = process.env.port || 8000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});