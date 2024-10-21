import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';

const Hiver = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('/api/vinted/hiver')
      .then(response => setArticles(response.data))
      .catch(error => console.error('Erreur lors de la récupération des articles :', error));
  }, []);

  return (
    <div className="hiver-container">
      <h2>Vêtements d'Hiver</h2>
      <div className="article-grid">
        {articles.map(article => (
          <div className="article-item" key={article.id}>
            <img src={article.image_url} alt={article.title} />
            <p>{article.title}</p>
            <a href={article.url} target="_blank" rel="noreferrer">Voir sur Vinted</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hiver;
