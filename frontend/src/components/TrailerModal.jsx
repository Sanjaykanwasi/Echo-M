import { useEffect, useState } from "react";

const TrailerModal = ({ movieId, onClose }) => {
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
    <div className="trailer-modal">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
        {trailerKey ? (
          <iframe
            width="100%"
            height="400px"
            src={`https://www.youtube.com/embed/${trailerKey}`}
            frameBorder="0"
            allowFullScreen
            title="Movie Trailer"
          ></iframe>
        ) : (
          <p>No Trailer Available</p>
        )}
      </div>
    </div>
  );
};

export default TrailerModal;
