import { Link } from "react-router-dom";
import "@/components/navbar/Navbar.scss";

export default function Navbar() {
  return (
    <header className="navbar-wrapper">
      <div className="navbar-container">
        <nav className="nav-links">
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/resume">Resume</Link>
        </nav>
      </div>
    </header>
  );
}
