import React, { useState } from "react";
import { FaSistrix } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import "./Header.scss";
import MainNavbar from "../MainNavbar/MainNavbar";
import Sidebar from "../Sidebar/Sidebar";

function Header() {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <header className="header">
      <div className="header__title">
        <h1>React</h1>
        <h1 className="header__title--highlighted">Recipes</h1>
      </div>

      <MainNavbar classes="header__main-nav" />

      <nav className="header__secondary-nav">
        <button
          onClick={() => setToggleSidebar(!toggleSidebar)}
          className="hamburger"
        >
          {toggleSidebar ? <GrClose /> : <GiHamburgerMenu />}
        </button>

        <button>
          <AiOutlineHeart />
        </button>
        <button>
          <FaSistrix />
        </button>
      </nav>

      <Sidebar
        toggleSidebar={toggleSidebar}
        setToggleSidebar={setToggleSidebar}
      />
    </header>
  );
}

export default Header;
