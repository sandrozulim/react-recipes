import React from "react";
import "./MainNavbar.scss";
import { Link } from "react-router-dom";

function MainNavbar({ classes }) {
  return (
    <nav className={classes}>
      <Link to="/">Home</Link>
      <Link to="/popular">Popular</Link>
      <Link to="/">Dummy</Link>
      <Link to="/">Dummy</Link>
    </nav>
  );
}

export default MainNavbar;
