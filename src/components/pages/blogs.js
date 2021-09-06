import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./blogs.css";
import mailSymb from "../../assets/mail-input-logo.svg";
import Pagination from "./pagination";

function BlogsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const [sortAttribute, setSortAttribute] = useState("recommended");
  const [sortAscending, setSortAscending] = useState(true);
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [categoryMenu, setCategoryMenu] = useState(false);
  const [email, setEmail] = useState("");

  const showDropdownMenu = () => setDropdownMenu((prevState) => !prevState);
  const showCategoryMenu = () => setCategoryMenu((prevState) => !prevState);

  function handleEmail(e) {
    e.preventDefault();
    setEmail("");
  }

  return (
    <div>
      <div
        id="access-bar"
        onBlur={() => {
          setCategoryMenu(false);
          setDropdownMenu(false);
        }}
        tabIndex="0"
      >
        <div id="access-drop-container">
          <div id="access-drop-title">
            <div
              id="access-drop-down"
              onClick={() => {
                showCategoryMenu();
                setDropdownMenu(false);
              }}
            >
              Category
              <i
                id="access-down-arrow"
                className={
                  categoryMenu ? "fa fa-chevron-up" : "fa fa-chevron-down"
                }
              />
            </div>
          </div>
          <div
            className={categoryMenu ? "access-items" : "access-items-inactive"}
            id="category"
          >
            <Link to="/" id="access-item">
              Adventure
            </Link>
            <Link to="/" id="access-item">
              Horror
            </Link>
            <Link to="/" id="access-item">
              Filmy
            </Link>
            <Link to="/" id="access-item">
              Politics
            </Link>
            <Link to="/" id="access-item">
              Bollywood
            </Link>
            <Link to="/" id="access-item">
              Hollywood
            </Link>
          </div>
        </div>

        <div id="access-drop-container">
          <div id="access-drop-title">
            <div
              id="access-drop-down"
              onClick={() => {
                showDropdownMenu();
                setCategoryMenu(false);
              }}
            >
              Sort by {sortAttribute}{" "}
              <i
                id="access-down-arrow"
                className={
                  dropdownMenu ? "fa fa-chevron-up" : "fa fa-chevron-down"
                }
              />
            </div>
            <div>
              <i
                id="access-sort-direction"
                className={
                  sortAscending
                    ? "fa fa-sort-amount-asc"
                    : "fa fa-sort-amount-desc"
                }
                onClick={() => setSortAscending(!sortAscending)}
              />
            </div>
          </div>
          <div
            className={
              dropdownMenu && window.innerWidth <= 800
                ? "access-items"
                : "access-items-inactive"
            }
          >
            <div
              id="access-item"
              onClick={() => {
                setSortAttribute("recommended");
                showDropdownMenu();
              }}
            >
              Sort by recommended
            </div>
            <div
              id="access-item"
              onClick={() => {
                setSortAttribute("popularity");
                showDropdownMenu();
              }}
            >
              Sort by popularity
            </div>
            <div
              id="access-item"
              onClick={() => {
                setSortAttribute("rating");
                showDropdownMenu();
              }}
            >
              Sort by rating
            </div>
            <div
              id="access-item"
              onClick={() => {
                setSortAttribute("date posted");
                showDropdownMenu();
              }}
            >
              Sort by date posted
            </div>
            <div
              id="access-item"
              onClick={() => {
                setSortAttribute("duration");
                showDropdownMenu();
              }}
            >
              Sort by duration
            </div>
          </div>
        </div>
      </div>

      <div id="whole">
        <div id="core">
          <div id="nav">
            <Link to="/">
              <i id="arrow" className="fa fa-arrow-left"></i>
            </Link>
            Blogs
          </div>
          <Pagination />
        </div>

        <div
          id="side"
          onBlur={() => {
            setDropdownMenu(false);
          }}
          tabIndex="0"
        >
          <div id="drop-title">
            <div
              id="drop-down"
              onClick={() => {
                showDropdownMenu();
              }}
            >
              Sort by {sortAttribute}{" "}
              <i
                id="down-arrow"
                className={
                  dropdownMenu ? "fa fa-chevron-up" : "fa fa-chevron-down"
                }
              />
            </div>
            <i
              id="sort-direction"
              className={
                sortAscending
                  ? "fa fa-sort-amount-asc"
                  : "fa fa-sort-amount-desc"
              }
              onClick={() => setSortAscending(!sortAscending)}
            />
          </div>

          <div id={dropdownMenu ? "sort-orders" : "sort-orders-inactive"}>
            <div
              id="sort-order"
              onClick={() => {
                setSortAttribute("recommended");
                showDropdownMenu();
              }}
            >
              Sort by recommended
            </div>
            <div
              id="sort-order"
              onClick={() => {
                setSortAttribute("popularity");
                showDropdownMenu();
              }}
            >
              Sort by popularity
            </div>
            <div
              id="sort-order"
              onClick={() => {
                setSortAttribute("rating");
                showDropdownMenu();
              }}
            >
              Sort by rating
            </div>
            <div
              id="sort-order"
              onClick={() => {
                setSortAttribute("date posted");
                showDropdownMenu();
              }}
            >
              Sort by date posted
            </div>
            <div
              id="sort-order"
              onClick={() => {
                setSortAttribute("duration");
                showDropdownMenu();
              }}
            >
              Sort by duration
            </div>
          </div>

          <div id="side-menu">
            <div id="category-head">Category</div>
            <hr />
            <ul id="categories">
              <Link to="/" id="link">
                <li>Adventure</li>
              </Link>
              <Link to="/" id="link">
                <li>Horror</li>
              </Link>
              <Link to="/" id="link">
                <li>Filmy</li>
              </Link>
              <Link to="/" id="link">
                <li>Politics</li>
              </Link>
              <Link to="/" id="link">
                <li>Bollywood</li>
              </Link>
              <Link to="/" id="link">
                <li>Hollywood</li>
              </Link>
            </ul>
          </div>

          <form id="subscribe-form">
            <label htmlFor="email-id" id="mail-label">
              <img src={mailSymb} alt="mail-symbol" />
            </label>
            <input
              id="input-email-id-blogs"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Enter your email ID"
              pattern="[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+"
            />
            <button type="submit" id="subscribe-btn" onClick={handleEmail}>
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BlogsPage;
