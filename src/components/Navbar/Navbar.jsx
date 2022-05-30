import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState({
    themeIcnStatus: false,
    hambergerIcn: false,
  });

  return (
    <header className="main-container">
      <div>
        <Link to="/" className="kiazen-container">
          <img src="/assets/pomo.png" className="pomo-img" alt="error" />
          <div className="kaizen-text">Kaizen</div>
        </Link>
      </div>
      <div className="nav-container">
        <ul
          className={`links-ul ${
            toggle.hambergerIcn ? "hamberger-active" : ""
          }`}
        >
          <li className="lists">
            <Link
              to="/tasks"
              className="nav-links"
              onClick={() =>
                setToggle((item) => ({ ...item, hambergerIcn: false }))
              }
            >
              Tasks
            </Link>
          </li>
          <li className="lists">
            <Link
              to="/pomodoro-time"
              className="nav-links"
              onClick={() =>
                setToggle((item) => ({ ...item, hambergerIcn: false }))
              }
            >
              Pomodoro
            </Link>
          </li>
          <li className="lists">
            <Link
              to="/login"
              className="nav-links"
              onClick={() =>
                setToggle((item) => ({ ...item, hambergerIcn: false }))
              }
            >
              Login
            </Link>
          </li>
        </ul>
        <div className="theme-icn">
          {toggle.themeIcnStatus ? (
            <i
              className="fa-solid fa-sun light-theme"
              onClick={() =>
                setToggle((item) => ({ ...item, themeIcnStatus: false }))
              }
            ></i>
          ) : (
            <i
              className="fa-solid fa-moon"
              onClick={() =>
                setToggle((item) => ({ ...item, themeIcnStatus: true }))
              }
            ></i>
          )}
        </div>
        <div className="bars">
          {toggle.hambergerIcn ? (
            <i
              class="fa-solid fa-xmark cross-icn"
              onClick={() =>
                setToggle((item) => ({ ...item, hambergerIcn: false }))
              }
            ></i>
          ) : (
            <i
              class="fa-solid fa-bars"
              onClick={() =>
                setToggle((item) => ({ ...item, hambergerIcn: true }))
              }
            ></i>
          )}
        </div>
      </div>
    </header>
  );
};

export { Navbar };
