import React from "react";
import "./style.scss";
import { HiMenuAlt1 } from "react-icons/hi";
import { CgProfile, CgSearch } from "react-icons/cg";
import { Link } from "react-router-dom";


import Logo from "./../../logo.svg";

const Navbar = () => {
  return (
    <>
      <nav>
        <div id="logo">
          <a href="/">
            <img src={Logo} alt="Exposure" />
          </a>
        </div>
        <ul className="right-list">
          <li id="menu" className="item">
            <HiMenuAlt1 size={30} />
            Menu
          </li>
          <li id="menu" className="item">
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Home
            </Link>
          </li>
          <li id="menu" className="item">
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "black" }}
            >
              About
            </Link>
          </li>

          <li id="search-bar" className="item">
            <input type="text" placeholder="Movie, Series etc..." />

            <span>
              <CgSearch size={20} />
            </span>
          </li>
          <li id="profile" className="item">
            <Link to="/profile" style={{ textDecoration: "none", display:"flex", alignItems:'center'}}>
              <CgProfile size={40} color={'black'}/>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
