import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [theme, setTheme] = useState(false);
  return (
    <nav className="navbar-container">
      <Link to="/" className="kiazen-container Link">
        <img src="/assets/pomo.png" className="pomo-img" alt="error" />
        <div className="kaizen-text">Kaizen</div>
      </Link>
      <div className="links-container">
        <div className="nav-links">Tasks</div>
        <div className="nav-links">Pomodoro</div>
        <div className="nav-links">Login</div>
        <div className="theme-icn">
          {theme ? (
            <i
              className="fa-solid fa-sun light-theme"
              onClick={() => setTheme(false)}
            ></i>
          ) : (
            <i className="fa-solid fa-moon" onClick={() => setTheme(true)}></i>
          )}
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
