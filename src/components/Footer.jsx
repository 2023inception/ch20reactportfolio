import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <Link to="https://fr.linkedin.com/">
        <BsGithub className="footer-link" />
      </Link>
      <Link to="https://fr.linkedin.com/">
        <BsLinkedin className="footer-link" />
      </Link>
    </footer>
  );
}

export default Footer;
