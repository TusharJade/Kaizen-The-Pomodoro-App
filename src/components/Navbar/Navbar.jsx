import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [theme, setTheme] = useState(false);
  return (
    <header className="navbar-container">
      <Link to="/" className="kiazen-container">
        <img src="/assets/pomo.png" className="pomo-img" alt="error" />
        <div className="kaizen-text">Kaizen</div>
      </Link>
      <div className="links-container">
        <Link to="/tasks" className="nav-links">
          Tasks
        </Link>
        <Link to="/pomodoro-time" className="nav-links">
          Pomodoro
        </Link>
        <Link to="/login" className="nav-links">
          Login
        </Link>
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
    </header>
  );
};

export { Navbar };
