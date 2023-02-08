import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Header.scss";

function Header() {
  return (
    <>
      <header className="header">
        <div className="header-title">
          <h1 className="header-title__heading">React</h1>
          <h1 className="header-title__heading header-title__heading--green">
            Recipes
          </h1>
        </div>
        <Navbar />
      </header>
    </>
  );
}

export default Header;
