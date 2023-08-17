import React from "react";
import { useParams } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import recipeDetails from "./data"; 

function RecipeDetail() {
  const { recipeId } = useParams();

  const fadeProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  const recipe = recipeDetails.find((recipe) => recipe.id === recipeId);

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className="container">
      <animated.div style={fadeProps} className="recipe-detail">
        <img src={recipe.image} alt={recipe.title} />
        <h2 className="text-warning">{recipe.title}</h2>
        <p className="text-secondary">{recipe.description}</p>
        <h3 className="text-warning">Preparation Time:</h3>
        <p className="text-secondary">{recipe.preparationTime}</p>
        <h3 className="text-warning">Servings:</h3>
        <p className="text-secondary">{recipe.servings}</p>
        <h3 className="text-warning">Equipment:</h3>
        <p className="text-secondary">{recipe.equipment}</p>
        <h3 className="text-warning">Ingredients:</h3>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="text-secondary">
              {ingredient}
            </li>
          ))}
        </ul>
        <h3 className="text-warning">Instructions:</h3>
        <ol>
          {recipe.instructions.map((instruction, index) => (
            <li key={index} className="text-secondary">
              {instruction}
            </li>
          ))}
        </ol>
      </animated.div>
    </div>
  );
}

export default RecipeDetail;
