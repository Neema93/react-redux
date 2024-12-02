const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(cors());
// Set up multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = './uploads';
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Renaming the file to ensure uniqueness
  }
});

const upload = multer({ storage: storage });
// get all Recipe

app.get('/api/recipes', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM recipes');
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'No recipes found' });
    }
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

// Endpoint for handling recipe upload (including image)
app.post('/recipes/upload', upload.single('image'), async (req, res) => {
  const { name, ingredients, instructions } = req.body;
  const imagePath = req.file ? req.file.path : null;  // Store image path if image is uploaded

  try {
    const result = await client.query(
      'INSERT INTO recipes (name, ingredients, instructions, image_path) VALUES ($1, $2, $3, $4) RETURNING id',
      [name, ingredients, instructions, imagePath]
    );

    // Respond with the recipe data (including ID)
    res.status(200).json({
      message: 'Recipe uploaded successfully!',
      recipeId: result.rows[0].id,
      imagePath,  // Return the image path in the response
    });
  } catch (error) {
    console.error('Error uploading recipe:', error);
    res.status(500).json({ error: 'Recipe upload failed' });
  }
});
const port = process.env.port || 8000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});