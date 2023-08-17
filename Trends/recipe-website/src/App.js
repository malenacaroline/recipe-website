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
import NotFound from "./NotFound";

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
          <Route path="/recipes/:recipeId" component={RecipeDetail} />
          <Route path="/add-recipe" component={AddRecipe} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
