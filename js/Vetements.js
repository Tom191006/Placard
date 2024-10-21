import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Vetements = () => {
  return (
    <div className="vetements-container">
      <h2>Vêtements par Saison</h2>
      <div className="seasons">
        <Link to="/hiver">
          <button className="season-button">Hiver</button>
        </Link>
        <Link to="/ete">
          <button className="season-button">Été</button>
        </Link>
        <Link to="/printemps">
          <button className="season-button">Printemps</button>
        </Link>
        <Link to="/automne">
          <button className="season-button">Automne</button>
        </Link>
      </div>
    </div>
  );
};

export default Vetements;
