import { useState } from "react";
import { Link } from "react-router-dom";
import colors from "../../config/colors";
import "./NavBar.scss";
import HamburgerMenuItem from "./HamburgerMenuItem";

const Nav = ({pageType}) => {
  

  return (
    <nav className="navigation navbar navbar-inverse fixed-top">
      <div className="container">
        <Link className="navigation-item navbar-brand" to="/">
            <h1>{pageType}</h1>
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
          <img src={"/assets/Shape.svg"} className="navbar-toggler-icon"></img>
        </button>

        <div className="collapse navbar-collapse" id = "navmenu">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="navigation-item"> ok</Link>
            </li>
            <li className="nav-item">
              <HamburgerMenuItem pageTitle="Profile" shortDescription="short description here"/>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
};

const navStyle = {
  color: "white",
  textDecoration: "none",
};

export default Nav;
