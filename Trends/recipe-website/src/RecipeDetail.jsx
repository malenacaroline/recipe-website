// Malena Aguiar
import React from "react";
import { useParams } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { FaClock, FaUtensils, FaTools, FaListUl, FaListOl } from "react-icons/fa";
import recipeDetails from "./recipeDetails";

function RecipeDetail() {
  const { recipeId } = useParams();

  const detailProps = useSpring({
    from: { opacity: 0, transform: "translateX(50px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { duration: 1000 },
  });

  const recipe = recipeDetails.find((recipe) => recipe.id === recipeId);

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className="container">
      <animated.div style={detailProps} className="recipe-detail">
        <img src={recipe.image} alt={recipe.title} />
        <h2 className="text-warning text-center">{recipe.title}</h2>
        <p className="text-secondary text-center mb-4">{recipe.description}</p>
        <div className="info-section">
          <h6 className="info-title">
            <FaClock className="info-icon" />Preparation Time:
          </h6>
          <p className="text-secondary">{recipe.preparationTime}</p>
        </div>
        <div className="info-section">
          <h6 className="info-title">
            <FaUtensils className="info-icon" />Servings:
          </h6>
          <p className="text-secondary">{recipe.servings}</p>
        </div>
        <div className="info-section">
          <h6 className="info-title">
            <FaTools className="info-icon" />Equipment:
          </h6>
          <p className="text-secondary">{recipe.equipment}</p>
        </div>
        <div className="info-section">
          <h6 className="info-title">
            <FaListUl className="info-icon" />Ingredients:
          </h6>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="text-secondary">
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
        <div className="info-section">
          <h6 className="info-title">
            <FaListOl className="info-icon" />Instructions:
          </h6>
          <ol>
            {recipe.instructions.map((instruction, index) => (
              <li key={index} className="text-secondary">
                {instruction}
              </li>
            ))}
          </ol>
        </div>
      </animated.div>
    </div>
  );
}

export default RecipeDetail;
