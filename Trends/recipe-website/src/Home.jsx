import React from "react";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";

function Home() {
  const sectionProps = useSpring({
    from: { opacity: 0, transform: "translateX(-50px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { duration: 1000 },
  });

  return (
    <div className="container">
      <animated.section
        className="home-section flex-reverse"
        style={sectionProps}
      >
        <div className="section-content">
          <h2 className="h2 text-warning">Featured Recipes</h2>
          <p className="my-3">
            Dive into a world of culinary inspiration as you peruse our
            handpicked assortment of dishes, ranging from comforting classics to
            innovative creations. Whether you're a novice in the kitchen or a
            seasoned pro, our featured recipes cater to every skill level and
            palate. Discover the perfect weekday dinner ideas, impressive dishes
            for entertaining, and delightful treats that make every moment
            special.
          </p>
          <Link to="/recipes" className="btn btn-outline-secondary">
            View Recipes
          </Link>
        </div>
        <img
          src="/images/featured-recipes.jpg"
          alt="Featured Recipes"
          className="section-image"
        />
      </animated.section>

      <animated.section
        className="home-section flex-normal"
        style={sectionProps}
      >
        <div className="section-content">
          <h2 className="h2 text-warning">Cooking Tips</h2>
          <p className="mt-4">
            Cooking is an art that marries technique and creativity, and we're
            here to guide you every step of the way. Our cooking tips offer more
            than just instructions – they provide you with a deeper
            understanding of ingredients, methods, and the science behind the
            flavors. With our tips, you'll not only prepare mouthwatering dishes
            but also unlock the secrets to culinary mastery.
          </p>
          <Link to="/cooking-tips" className="btn btn-outline-secondary mt-3">
            Explore Tips
          </Link>
        </div>
        <img
          src="/images/cooking-tips.jpg"
          alt="Cooking Tips"
          className="section-image"
        />
      </animated.section>

      <animated.section
        className="home-section flex-reverse"
        style={sectionProps}
      >
        <div className="section-content">
          <h2 className="h2 text-warning">Add Your Own Recipe</h2>
          <p className="mt-4">
            A Community of Flavors: By adding your recipe, you're not just
            sharing a meal – you're sharing a part of yourself. Whether it's a
            classic comfort food, an innovative fusion, or a decadent dessert,
            your contribution enriches the lives of those who recreate it in
            their own kitchens. Join us in building a community that celebrates
            the joys of cooking, sharing, and discovering new flavors. Together,
            we're creating a space where culinary enthusiasts from all walks of
            life can connect, learn, and savor the magic of homemade dishes.
            Ready to Share? Click below to add your recipe and become a part of
            our culinary mosaic!
          </p>
          <Link to="/add-recipe" className="btn btn-outline-secondary mt-3">
            Add Recipe
          </Link>
        </div>
        <img
          src="/images/add-recipe.jpg"
          alt="Add Your Own Recipe"
          className="section-image"
        />
      </animated.section>

      <animated.section
        className="home-section flex-normal"
        style={sectionProps}
      >
        <div className="section-content">
          <h2 className="h2 text-warning">Contact</h2>
          <p className="mt-4">
            Our Commitment: Your satisfaction and engagement are our priorities.
            When you reach out to us, you're not just contacting a support team
            – you're connecting with a community of like-minded individuals who
            share a passion for all things culinary. We're here to make your
            experience memorable and your culinary journey unforgettable. Get in
            Touch Today: Ready to start a conversation? Don't hesitate – reach
            out to us and let's embark on this culinary adventure together. Your
            thoughts, questions, and ideas are the ingredients that fuel our
            success, and we can't wait to hear from you. Contact us now and let
            the conversation begin!
          </p>
          <Link to="/contact" className="btn btn-outline-secondary mt-3">
            Contact Us
          </Link>
        </div>
        <img
          src="/images/contact.jpg"
          alt="Contact"
          className="section-image"
        />
      </animated.section>
    </div>
  );
}

export default Home;
