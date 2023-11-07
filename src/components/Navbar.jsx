import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-title">
          <h1 className="cursor-pointer">My Portfolio</h1>
        </Link>

        <div className="link-container">
          <NavLink to="/about" className="navbar-link" activeClassName="active">
            About Me
          </NavLink>

          <Link to="/projects" className="navbar-link">
            Projects
            </Link>
            <Link to="/contact" className="navbar-link">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
