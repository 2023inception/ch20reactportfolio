import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="about" className="navbar-title">
          <h1 className="cursor-pointer">My Portfolio</h1>
        </Link>

        <div className="link-container">
          <a href="/about" className="navbar-link">
            About Me
          </a>

          <a href="/projects" className="navbar-link">
            Projects
          </a>
          <a href="/contact" className="navbar-link">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
