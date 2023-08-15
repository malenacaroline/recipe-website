import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Recipes from "./Recipes";
import RecipeDetail from "./RecipeDetail";
import AddRecipe from "./AddRecipe";
import CookingTips from "./CookingTips";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/recipes" exact component={Recipes} />
          <Route path="/recipes/:id" component={RecipeDetail} />
          <Route path="/add-recipe" component={AddRecipe} />
          <Route path="/cooking-tips" component={CookingTips} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
