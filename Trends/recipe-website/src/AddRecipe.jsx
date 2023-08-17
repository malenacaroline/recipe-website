// Juan Adon
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

function AddRecipe() {
  const [formData, setFormData] = useState({
    title: "",
    time: "",
    servings: "",
    ingredients: "",
    equipment: "",
    instructions: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const animationProps = useSpring({
    from: { opacity: 0, transform: "translateX(-50px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { duration: 1000 },
  });

  const successProps = useSpring({
    opacity: isSubmitted ? 1 : 0,
    transform: isSubmitted ? "translateY(0)" : "translateY(-20px)",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);

    // Simulate submission process
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        title: "",
        time: "",
        servings: "",
        ingredients: "",
        equipment: "",
        instructions: "",
      });
    }, 3000);
  };

  return (
    <div className="add-recipe-container">
      <h2 className="text-center text-warning">Add a New Recipe</h2>
      <p className="mt-4">
        Welcome to our recipe submission page! Share your culinary creations with
        the world. Fill out the form below to add your delicious recipe.
      </p>

      <animated.div style={animationProps} className="add-recipe-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="time">Preparation Time</label>
            <input
              type="text"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="servings">Servings</label>
            <input
              type="text"
              id="servings"
              name="servings"
              value={formData.servings}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="ingredients">Ingredients</label>
            <textarea
              id="ingredients"
              name="ingredients"
              rows="3"
              value={formData.ingredients}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="equipment">Equipment</label>
            <textarea
              id="equipment"
              name="equipment"
              rows="2"
              value={formData.equipment}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="5"
              value={formData.instructions}
              onChange={handleChange}
              required
            />
          </div>
          <button className="btn btn-warning text-white" type="submit">
            Add Recipe
          </button>
        </form>
      </animated.div>

      <animated.div style={successProps} className="success-message">
        Recipe added successfully!
      </animated.div>
      
    </div>
  );
}

export default AddRecipe;
