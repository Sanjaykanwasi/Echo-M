import { Link } from "react-router-dom";
import "../css/Navbar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link className="!text-white" to="/">Movie App</Link>
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
