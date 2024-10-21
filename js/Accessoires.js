import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Accessoires = () => {
  return (
    <div className="accessoires-container">
      <h2>Accessoires</h2>
      <div className="categories">
        <Link to="/casquettes-bonnets">
          <button className="category-button">Casquettes et Bonnets</button>
        </Link>
        <Link to="/bijoux-lunettes">
          <button className="category-button">Bijoux et Lunettes</button>
        </Link>
      </div>
    </div>
  );
};

export default Accessoires;
