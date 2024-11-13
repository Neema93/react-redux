CREATE DATABASE recipe_finder;
CREATE TABLE recipes (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  ingredients TEXT NOT NULL,
  instructions TEXT NOT NULL,
  image_url VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,  -- Store the hashed password
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE saved_recipes (
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  recipe_id INT REFERENCES recipes(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (user_id, recipe_id)
);

CREATE TABLE meal_plans (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  start_date DATE,
  end_date DATE
);

CREATE TABLE meal_plan_items (
  meal_plan_id INT REFERENCES meal_plans(id) ON DELETE CASCADE,
  recipe_id INT REFERENCES recipes(id) ON DELETE CASCADE,
  day_of_week VARCHAR(20), 
  PRIMARY KEY (meal_plan_id, recipe_id)
);