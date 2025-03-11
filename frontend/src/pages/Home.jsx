import React from "react";
import MovieCard from "../components/MovieCard";
import { useState } from "react";
import "../css/Home.css";

const Home = () => {
  // Array of Movies
  const movies = [
    {
      id: 1,
      title: "The Batman",
      release_date: "2024",
    },
    {
      id: 2,
      title: "Drive",
      release_date: "2016",
    },
    {
      id: 3,
      title: "Joker",
      release_date: "2020",
    },
    {
      id: 4,
      title: "Avenger's Endgame",
      release_date: "2019",
    },
    {
      id: 5,
      title: "Dead Pool",
      release_date: "2015",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  //   Submit Handler
  const submitHandler = (e) => {
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery("");
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
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
