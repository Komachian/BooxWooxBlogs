import React, { useState } from "react";
import "./nav.css";
import logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);

  const iconChange = () => setClick((prevClick) => !prevClick);
  const closeSideMenu = () => setClick(false);

  const checkSideMenuSize = () => {
    if (window.innerWidth >= 800) {
      closeSideMenu();
    }
  };

  window.addEventListener("resize", checkSideMenuSize);
  window.addEventListener("scroll", closeSideMenu)

  return (
    <div className="nav-container">
      <nav className="navbar">
        <div className="logo" onClick={closeSideMenu}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className="menu-bar-icon" onClick={iconChange}>
          <i className={click ? "fa fa-times" : "fa fa-bars"} />
        </div>

        <div className="nav-row">
          <Link to="/features" className="nav-link" id="feat">
            Features
          </Link>
          <Link to="/blogs" className="nav-link" id="blog">
            Blogs
          </Link>
          <Link to="/downloads" className="nav-link" id="down">
            Downloads
          </Link>
          <Link to="/login" className="nav-link" id="log-text">
            Login
          </Link>
        </div>
      </nav>
      <div id="side-menu-container">
        <ul className={click ? "side-menu-active" : "side-menu"}>
          <li className="side-menu-item">
            <Link
              to="/features"
              className="nav-link-side"
              onClick={closeSideMenu}
            >
              Features
            </Link>
          </li>
          <li className="side-menu-item">
            <Link
              to="/blogs"
              className="nav-link-side"
              id="blog-side"
              onClick={closeSideMenu}
            >
              Blogs
            </Link>
          </li>
          <li className="side-menu-item">
            <Link
              to="/downloads"
              className="nav-link-side"
              onClick={closeSideMenu}
            >
              Downloads
            </Link>
          </li>
          <li className="side-menu-item">
            <Link
              to="/login"
              className="nav-link-side"
              id="log-side"
              onClick={closeSideMenu}
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;