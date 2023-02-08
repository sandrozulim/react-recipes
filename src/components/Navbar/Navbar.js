import React, { useState } from "react";
import PrimaryButton from "../UI/PrimaryButton";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import "./Navbar.scss";

function Navbar() {
  const [expandedNav, setExpandedNav] = useState(false);

  const linkClasses = ({ isActive }) => {
    return isActive ? "link link--active" : "link";
  };

  return (
    <nav>
      <ul className={expandedNav ? "nav--expanded" : "nav"}>
        <li>
          <NavLink
            onClick={() => setExpandedNav(false)}
            className={linkClasses}
            to="/"
            end
          >
            home
          </NavLink>
        </li>

        <li>
          <NavLink
            onClick={() => setExpandedNav(false)}
            className={linkClasses}
            to="/search"
          >
            search recipes
          </NavLink>
        </li>

        <li>
          <NavLink
            onClick={() => setExpandedNav(false)}
            className={linkClasses}
            to="/popular"
          >
            popular recipes
          </NavLink>
        </li>

        <li>
          <NavLink
            onClick={() => setExpandedNav(false)}
            className={linkClasses}
            to="/favorites"
          >
            favorites
          </NavLink>
        </li>
      </ul>

      <PrimaryButton
        className="nav__hamburger"
        onClick={() => setExpandedNav(!expandedNav)}
      >
        {expandedNav ? <GrClose /> : <GiHamburgerMenu />}
      </PrimaryButton>
    </nav>
  );
}

export default Navbar;
