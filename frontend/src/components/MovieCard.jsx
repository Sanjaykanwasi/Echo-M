import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";
import { useState } from "react";
import TrailerModal from "./TrailerModal";

function MovieCard({ movie }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const favorite = isFavorite(movie.id);
  const [showTrailer, setShowTrailer] = useState(false);

  function onFavoriteClick(e) {
    e.preventDefault();
    if (favorite) removeFromFavorites(movie.id);
    else addToFavorites(movie);
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={onFavoriteClick}
          >
            ♥
          </button>
          <button className="trailer-btn" onClick={() => setShowTrailer(true)}>
            🎬 Watch Trailer
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
      {showTrailer && (
        <TrailerModal
          movieId={movie.id}
          onClose={() => setShowTrailer(false)}
        />
      )}
    </div>
  );
}

export default MovieCard;
