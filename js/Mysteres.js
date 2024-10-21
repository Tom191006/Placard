import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Mysteres = () => {
  return (
    <div className="mysteres-container">
      <h2>Le Placard des Mystères</h2>
      <div className="categories">
        <Link to="/vetements">
          <button className="category-button">Vêtements</button>
        </Link>
        <Link to="/accessoires">
          <button className="category-button">Accessoires</button>
        </Link>
      </div>
    </div>
  );
};

export default Mysteres;
