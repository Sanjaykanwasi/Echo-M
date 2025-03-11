import React from "react";
import "../css/MovieCard.css";

const MovieCard = ({ movie }) => {
  // Function
  const onFavouriteClick = (e) => {
    e.preventDefault();
    alert("🤍");
  };
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.img} alt={movie.title} />
        <div className="movie-overlay">
          <button className="favourite-btn" onClick={onFavouriteClick}>
            🤍
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
};

export default MovieCard;
