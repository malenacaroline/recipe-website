import React from "react";
import { Transition } from "react-transition-group";
import { Link } from "react-router-dom";

const duration = 500; // Animation duration in milliseconds

function Recipes() {
  const recipes = [
    {
      id: "recipe1",
      title: "Delicious Pasta",
      image: "/images/pasta.jpg",
      description:
        "A mouthwatering pasta recipe that will satisfy your taste buds.",
    },
    {
      id: "recipe2",
      title: "Gourmet Burger",
      image: "/images/burger.jpg",
      description: "Sink your teeth into this scrumptious gourmet burger.",
    },
    {
      id: "recipe3",
      title: "Savory Pizza",
      image: "/images/pizza.jpg",
      description:
        "A classic pizza recipe with a variety of delicious toppings.",
    },
    {
      id: "recipe4",
      title: "Creamy Soup",
      image: "/images/soup.jpg",
      description: "Warm up with a bowl of comforting and creamy soup.",
    },
    {
      id: "recipe5",
      title: "Chocolate Cookies",
      image: "/images/cookies.jpg",
      description: "Indulge in these rich and fudgy chocolate cookies.",
    },
    {
      id: "recipe6",
      title: "Healthy Salad",
      image: "/images/salad.jpg",
      description:
        "A nutritious and refreshing salad packed with fresh ingredients.",
    },
    {
      id: "recipe7",
      title: "Fruit Smoothie",
      image: "/images/smoothie.jpg",
      description:
        "Stay refreshed with a delicious and vibrant fruit smoothie.",
    },
    {
      id: "recipe8",
      title: "Stuffed Chicken",
      image: "/images/chicken.jpg",
      description:
        "Delight your taste buds with juicy and flavorful stuffed chicken.",
    },
    {
      id: "recipe9",
      title: "Homemade Sushi",
      image: "/images/sushi.jpg",
      description: "Roll your own sushi with fresh ingredients and creativity.",
    },
    {
      id: "recipe10",
      title: "Classic Pancakes",
      image: "/images/pancakes.jpg",
      description: "Start your day with fluffy and golden classic pancakes.",
    },
    {
      id: "recipe11",
      title: "Mouthwatering Tacos",
      image: "/images/tacos.jpg",
      description:
        "Savor the flavors of these tacos filled with delicious ingredients.",
    },
    {
      id: "recipe12",
      title: "Refreshing Lemonade",
      image: "/images/lemonade.jpg",
      description:
        "Quench your thirst with a glass of refreshing homemade lemonade.",
    },
  ];

  return (
    <div className="container">
      <h2 className="text-center mt-4">Recipes</h2>
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
