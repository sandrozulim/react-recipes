import React from "react";
import { NavLink } from "react-router-dom";
import "./MainNavbar.scss";

function MainNavbar({ navigationList, className = "" }) {
  const content = navigationList.map((item) => (
    <NavLink key={item.name} to={item.path}>
      {item.name}
    </NavLink>
  ));

  return <nav className={`main-nav ${className}`}>{content}</nav>;
}

export default MainNavbar;
