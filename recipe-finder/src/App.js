
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import MealPlanner from './pages/MealPlanner';
import RecipeDetails from './pages/RecipeDetails';
import RecipeSearch from './pages/RecipeSearch';
import ShoppingList from './pages/ShoppingList';
import Favorites from './pages/Favorites';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import Header from './components/Header';
function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Favorites">Favorites</Link>
            </li>
            <li>
              <Link to="/MealPlanner">MealPlanner</Link>
            </li>
            <li>
              <Link to="/RecipeDetails">RecipeDetails</Link>
            </li>
            <li>
              <Link to="/RecipeSearch">RecipeSearch</Link>
            </li>
            <li>
              <Link to="/ShoppingList">ShoppingList</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Favorites" element={<Favorites />} />
          <Route path="/MealPlanner" element={<MealPlanner />} />
          <Route path="/RecipeDetails" element={<RecipeDetails />} />
          <Route path="/RecipeSearch" element={<RecipeSearch />} />
          <Route path="/ShoppingList" element={<ShoppingList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
