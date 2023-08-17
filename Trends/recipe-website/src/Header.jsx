// Malena Aguiar
import React from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

function Header() {
  const animationProps = useSpring({
    from: { opacity: 0, transform: "translateY(-20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1000 },
  });

  return (
    <animated.header className="bg-dark text-white" style={animationProps}>
      <div className="header-container">
        <div>
          <Link to="/" className="text-white text-decoration-none">
            <h1 className="h3 mb-1">CulinaryDelights</h1>
          </Link>
          <p className="mb-0">Discover a world of flavors in every dish.</p>
        </div>
      </div>
    </animated.header>
  );
}

export default Header;
