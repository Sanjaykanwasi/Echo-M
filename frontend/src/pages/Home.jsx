import React from "react";
import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movie");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  //   Submit Handler
  const submitHandler = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      return;
    }

    setLoading(true);
    if (loading) {
      return;
    }

    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      setError("Failed to load Movie...");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <form onSubmit={submitHandler} className="search-form">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search"
          className="search-input text-white"
        />
        <button type="submit" className="search-btn bg-red-400 rounded-xl p-2">
          Search
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
