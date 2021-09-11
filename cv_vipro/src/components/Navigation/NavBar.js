import { useState } from "react";
import { Link } from "react-router-dom";
import colors from "../../config/colors";
import "./NavBar.scss";

const Nav = ({pageType}) => {
  

  return (
    <div className="navigation">
      <Link className="navigation-item" to="/" style={{textDecoration:'none'}}>
          <h1>{pageType}</h1>
      </Link>
    </div>

  );
};

const navStyle = {
  color: "white",
  textDecoration: "none",
};

export default Nav;
