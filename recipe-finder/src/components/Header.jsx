import React from "react";
import {Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
        <header className="headerStyle">
      <div className="logoContainer">
        <h1>Recipe Finder</h1>
      </div>
      <nav>
          <ul className="navListStyle">
            <li className="navItemStyle">
              <Link to="/" className="linkStyle">Home</Link>
            </li>
            <li className="navItemStyle">
              <Link to="/Favorites" className="linkStyle">Favorites</Link>
            </li>
            <li className="navItemStyle">
              <Link to="/MealPlanner" className="linkStyle">MealPlanner</Link>
            </li>
           
            <li className="navItemStyle">
              <Link to="/ShoppingList" className="linkStyle">ShoppingList</Link>
            </li>
            <li className="navItemStyle">
            <Link to="/RecipeUpload" className="linkStyle">RecipeUpload</Link>
            </li>
          </ul>
        </nav>
        </header>
    </div>
  );
};

export default Header;