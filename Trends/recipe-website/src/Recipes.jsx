// Malena Aguiar
import React from "react";
import { Transition } from "react-transition-group";
import { Link } from "react-router-dom";
import recipes from "./recipesData";

const duration = 500;

function Recipes() {

  return (
    <div className="container">
      <h2 className="text-warning text-center mt-4">Recipes</h2>
      <div className="recipes-grid">
        {recipes.map((recipe) => (
          <Transition key={recipe.id} in timeout={duration}>
            {(state) => (
              <Link
                to={`/recipes/${recipe.id}`}
                key={recipe.id}
                className="recipe-link"
              >
                <div
                  className={`recipe-card ${
                    state === "entered" ? "active" : ""
                  }`}
                >
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="recipe-image"
                  />
                  <h3>{recipe.title}</h3>
                  <p>{recipe.description}</p>
                </div>
              </Link>
            )}
          </Transition>
        ))}
      </div>
    </div>
  );
}

export default Recipes;
