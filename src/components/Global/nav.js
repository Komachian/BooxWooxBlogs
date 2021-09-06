import React, { useState, useEffect } from "react";
import "./nav.css";
import logo from "../../assets/Logo.svg";
import dialCodes from "../Home/components/dial-codes";
import chevronDown from "../../assets/chevron-down.svg";
import x from "../../assets/x.svg";
import backArrow from "../../assets/back-arrow.svg";
import verticalLine from "../../assets/|.svg";
import userIcon from "../../assets/user.svg";
import pen from "../../assets/pen.svg";
import drafts from "../../assets/drafts.svg";
import logout from "../../assets/logout.svg";
import profPic from "../images/img-1.jpg";
import { Link } from "react-router-dom";
import { DragHandleOutlined } from "@material-ui/icons";
import axios from "axios";
import { useUser } from "../Contexts/UserContext";

import LoginModal from "./loginModal";

function Navbar() {
  // const [OTPToken, setOTPToken] = useState("");
  // const [loginToken, setLoginToken] = useState("");
  const {user, setUser, showOverlay, setShowOverlay} = useUser();

  const [click, setClick] = useState(false);

  const iconChange = () => setClick((prevClick) => !prevClick);
  const closeSideMenu = () => setClick(false);

  const checkSideMenuSize = () => {
    if (window.innerWidth >= 800) {
      closeSideMenu();
    }
  };

  window.addEventListener("resize", checkSideMenuSize);
  window.addEventListener("scroll", closeSideMenu);

  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showUserMenuSide, setShowUserMenuSide] = useState(false);

  return (
    // <div>
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
          {!user ? (
            <Link
              className="nav-link-side"
              id="log-side"
              onClick={() => {
                closeSideMenu();
                setShowOverlay(!showOverlay);
              }}
            >
              Login
            </Link>
          ) : (
            <div id="user-side">
              <div id="user" onClick={() => setShowUserMenu(!showUserMenu)}>
                <img id="prof-pic" src={profPic} />
                {user.username}
              </div>
            </div>
          )}
        </div>
        <div
          id={showUserMenu ? "user-menu" : "user-menu-inactive"}
          onBlur={() => {
            setShowUserMenu(false);
          }}
          tabIndex="0"
        >
          <Link to="/" className="user-menu-item">
            <img src={userIcon} class="icon" />
            My Account
          </Link>
          <Link className="user-menu-item">
            <img src={pen} class="icon" />
            My Blogs
          </Link>
          <Link className="user-menu-item">
            <img src={drafts} class="icon" />
            My Drafts
          </Link>
          <Link className="user-menu-item" onClick={() => {setUser(undefined); setShowUserMenu(false)}}>
            <img src={logout} class="icon" />
            Logout
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
            {!user ? (
              <Link
                className="nav-link-side"
                id="log-side"
                onClick={() => {
                  closeSideMenu();
                  setShowOverlay(!showOverlay);
                }}
              >
                Login
              </Link>
            ) : (
              <div id="side-user">
                <div
                  id="username-side"
                  onClick={() => setShowUserMenuSide(!showUserMenuSide)}
                >
                  <img id="prof-pic" src={profPic} />
                  {user.username}
                  <img
                    id={
                      showUserMenuSide
                        ? "chevron-up-username"
                        : "chevron-down-username"
                    }
                    src={chevronDown}
                  />
                </div>
                {showUserMenuSide ? (
                  <div
                    id="user-menu-side"
                    onBlur={() => {
                      setShowUserMenu(false);
                    }}
                    tabIndex="0"
                  >
                    <Link to="/" className="user-menu-item">
                      <img src={userIcon} class="icon" />
                      My Account
                    </Link>
                    <Link className="user-menu-item">
                      <img src={pen} class="icon" />
                      My Blogs
                    </Link>
                    <Link className="user-menu-item">
                      <img src={drafts} class="icon" />
                      My Drafts
                    </Link>
                    <Link className="user-menu-item" onClick={() => {setUser(undefined); setShowUserMenu(false)}}>
                      <img src={logout} class="icon" />
                      Logout
                    </Link>
                  </div>
                ) : null}
              </div>
            )}
          </li>
        </ul>
      </div>
      <LoginModal showOverlay={showOverlay} setShowOverlay={setShowOverlay} />
    </div>
  );
}

export default Navbar;
