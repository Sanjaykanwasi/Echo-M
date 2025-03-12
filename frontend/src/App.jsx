import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Favourites from "./pages/Favourites";
import Navbar from "./components/Navbar";
import { MovieProvider } from "./contexts/MovieContext";
import "./css/App.css";

const App = () => {
  return (
    <MovieProvider>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </div>
    </MovieProvider>
  );
};

export default App;
