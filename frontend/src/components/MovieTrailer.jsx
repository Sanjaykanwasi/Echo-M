import { useEffect, useState } from "react";

const MovieTrailer = ({ movieId }) => {
  const [trailerKey, setTrailerKey] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=YOUR_TMDB_API_KEY`
    )
      .then((res) => res.json())
      .then((data) => {
        const trailer = data.results.find(
          (video) => video.site === "YouTube" && video.type === "Trailer"
        );
        if (trailer) setTrailerKey(trailer.key);
      });
  }, [movieId]);

  return (
    <div className="trailer-container">
      {trailerKey ? (
        <iframe
          width="100%"
          height="250px"
          src={`https://www.youtube.com/embed/${trailerKey}`}
          frameBorder="0"
          allowFullScreen
          title="Movie Trailer"
        ></iframe>
      ) : (
        <p>No Trailer Available</p>
      )}
    </div>
  );
};

export default MovieTrailer;
