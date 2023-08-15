import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning">
      <div className="container">
        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/recipes">Recipes</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/add-recipe">Add Recipe</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
