import { Link } from "react-router-dom";
import "../css/Navbar.css";
import logo from "../assets/logo.png";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand flex justify-center items-center ">
        <img className="w-12 h-12" src={logo} alt="" />
        <Link className="!text-white" to="/">
          Echo M
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link !text-white">
          Home
        </Link>
        <Link to="/favorites" className="nav-link !text-white">
          Favorites
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
