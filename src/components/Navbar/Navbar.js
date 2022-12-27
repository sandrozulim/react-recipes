import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

function Navbar({ navigationList, className = "", onClick }) {
  const content = navigationList.map((item) => (
    <li key={item.name} className="nav__item">
      <NavLink to={item.path} onClick={onClick}>
        {item.name}
      </NavLink>
    </li>
  ));

  return (
    <nav>
      <ul className={`nav ${className}`}>{content}</ul>
    </nav>
  );
}

export default Navbar;
