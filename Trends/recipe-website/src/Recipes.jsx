import React from 'react';
import { Link } from 'react-router-dom';

function Recipes() {
  // Sample recipe data (replace with your data)
  const recipes = [
    { id: 1, title: 'Chocolate Cake' },
    { id: 2, title: 'Pasta Carbonara' },
    // Add more recipes
  ];

  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Recipes;
