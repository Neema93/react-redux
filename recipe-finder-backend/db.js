const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.user,
  password: process.env.password,
  host: process.env.host,
  port: process.env.port, // default Postgres port
  database: 'recipe_finder'
});

module.exports = {
  query: (text, params) => pool.query(text, params)
};