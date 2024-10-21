import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Presentation = () => {
  return (
    <div className="presentation-container">
      <div className="presentation-content">
        <div className="text-section">
          <h2>Bienvenue sur Mon Placard à Moi</h2>
          <p>
            Ce site est dédié à tous ceux qui cherchent des vêtements abordables, spécialement les étudiants.
            Vous trouverez ici une grande variété de vêtements pour chaque saison, sans dépenser une fortune.
          </p>
        </div>

        <div className="image-section">
          <img src="https://emploi.ouest-france.fr/sites/default/files/styles/originale/public/job-etudiant.jpg?itok=AGuvpsLx" alt="Étudiant content" />
        </div>
      </div>

      <div className="next-section">
        <Link to="/mysteres">
          <button className="mystere-button">
            Le placard des mystères
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Presentation;
