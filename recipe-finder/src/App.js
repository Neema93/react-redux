
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import MealPlanner from './pages/MealPlanner';
import RecipeDetails from './pages/RecipeDetails';
import RecipeSearch from './pages/RecipeSearch';
import ShoppingList from './pages/ShoppingList';
import Favorites from './pages/Favorites';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import Header from './components/Header';
import RecipeUpload from './pages/RcipeUpload';
import { Provider } from 'react-redux';
import store from './store';
import '../src/styles/Recipe.css'
import '../src/styles/Header.css'
import '../src/styles/Form.css'
function App() {
  return (
    <Provider store={store}>
    <div>
     
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Favorites" element={<Favorites />} />
          <Route path="/MealPlanner" element={<MealPlanner />} />
          <Route path="/RecipeDetails" element={<RecipeDetails />} />
          <Route path="/RecipeSearch" element={<RecipeSearch />} />
          <Route path="/ShoppingList" element={<ShoppingList />} />
          <Route path="/RecipeUpload" element={<RecipeUpload />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>

    </div>
    </Provider>
  );
}

export default App;
