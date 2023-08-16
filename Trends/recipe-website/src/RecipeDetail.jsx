import React from 'react';
import { useParams } from 'react-router-dom';

function RecipeDetail() {
  const { recipeId } = useParams();

  // Replace this with your actual data fetching logic
  // Example: Fetch the recipe details based on recipeId

  const recipeDetails = {
    title: 'Delicious Appetizer',
    description: 'This delightful appetizer is the perfect start to your meal...',
    image: `/images/${recipeId}.jpg`,
    ingredients: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3'],
    instructions: 'Step 1: ... Step 2: ... Step 3: ...',
  };

  return (
    <div className="container">
      <div className="recipe-detail">
        <img src={recipeDetails.image} alt={recipeDetails.title} />
        <h2>{recipeDetails.title}</h2>
        <p>{recipeDetails.description}</p>
        <h3>Ingredients:</h3>
        <ul>
          {recipeDetails.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h3>Instructions:</h3>
        <p>{recipeDetails.instructions}</p>
      </div>
    </div>
  );
}

export default RecipeDetail;
