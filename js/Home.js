import React from 'react';
import './styles.css';  // Importation des styles
import { Link } from 'react-router-dom';  // Pour gérer les liens internes

const Home = () => {
  return (
    <div className="home-container">
      <div className="video-background">
        <iframe
          src="https://www.youtube.com/embed/I_AQSEeZXO0?autoplay=1&mute=1&loop=1&playlist=I_AQSEeZXO0"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Vidéo de fond"
        />
      </div>

      <div className="content">
        <h1 className="title">Mon Placard à Moi</h1>

        <Link to="/presentation">
          <button className="enter-button">Entrer</button>
        </Link>

        <div className="social-links">
          <a href="https://www.instagram.com/tmj.nk/profilecard/?igsh=MXZpZDVpbHR1NThqbg==" target="_blank" rel="noreferrer">
            <img src="/instagram-logo.png" alt="Instagram" className="social-icon" />
          </a>
          <a href="https://www.vinted.fr/member/222458710-chrisheywood53" target="_blank" rel="noreferrer">
            <img src="/vinted-logo.png" alt="Vinted" className="social-icon" />
          </a>
        </div>

        <div className="stats">
          <p>Nombre de visiteurs : 12345</p>
          <p>Ventes réalisées : 50</p>
          <p>Délai moyen de livraison : 3 jours</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
