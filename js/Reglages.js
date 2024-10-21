import React, { useState } from 'react';
import './styles.css';

const Reglages = () => {
  const [theme, setTheme] = useState('clair');
  const [police, setPolice] = useState('normal');

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
    document.body.className = e.target.value;
  };

  const handlePoliceChange = (e) => {
    setPolice(e.target.value);
    document.body.style.fontFamily = e.target.value;
  };

  return (
    <div className="reglages-container">
      <h2>Réglages</h2>

      <div className="theme-selector">
        <label>Choisir un thème :</label>
        <select value={theme} onChange={handleThemeChange}>
          <option value="clair">Clair</option>
          <option value="sombre">Sombre</option>
          <option value="auto">Automatique</option>
        </select>
      </div>

      <div className="police-selector">
        <label>Changer la police :</label>
        <select value={police} onChange={handlePoliceChange}>
          <option value="Arial">Arial</option>
          <option value="Georgia">Georgia</option>
          <option value="Times">Times</option>
        </select>
      </div>
    </div>
  );
};

export default Reglages;
