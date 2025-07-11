import React from 'react';
import './MovieCard.css';

function MovieCard({ movie }) {
  const { title, description, posterURL, rating } = movie;

  return (
    <div className="movie-card">
      <img src={posterURL} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p><strong>Rating:</strong> {rating} / 5</p>
    </div>
  );
}

export default MovieCard;
