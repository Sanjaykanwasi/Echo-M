import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-brand flex">
        <img src={logo} className="w-12 h-12" alt="Logo" />
        <Link className="!text-white" to="/">
          Echo-M
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link !text-white">
          Home{" "}
        </Link>
        <Link to="/favourites" className="nav-link !text-white">
          Favourites{" "}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
