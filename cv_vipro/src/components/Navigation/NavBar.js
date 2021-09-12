import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";
import HamburgerMenuItem from "./HamburgerMenuItem";

const Nav = ({pageType}) => {
  const orange = "#FF702F"

  return (
    <nav className="navigation navbar fixed-top">
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
              <HamburgerMenuItem pageTitle="HOME" shortDescription="LANDING PAGES, TIMELINE, INTERACTIVE" pageTitleColor={"#FF702F"} imagePath="assets/Menu_item1.svg"/>
            </li>
            <li className="nav-item">
              <HamburgerMenuItem pageTitle="PROJECT LIST" shortDescription="PROJECT LIST IN SHORT AND NARROW VIEW" pageTitleColor={orange}/>
            </li>
            <li className="nav-item">
              <HamburgerMenuItem pageTitle="PROFILE" shortDescription="ABOUT, RESUME, AND INFO" pageTitleColor={orange}/>
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
