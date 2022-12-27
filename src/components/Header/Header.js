import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import PrimaryButton from "../UI/PrimaryButton";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import "./Header.scss";

function Header() {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const navigationList = [
    { name: "home", path: "/" },
    { name: "search recipes", path: "/search" },
    { name: "popular", path: "/popular" },
    { name: "favorites", path: "/favorites" },
  ];

  return (
    <>
      <header className="header">
        <div className="header__title">
          <h1>React</h1>
          <h1 className="header__title--green">Recipes</h1>
        </div>

        <Navbar className="header__nav" navigationList={navigationList} />

        <PrimaryButton
          className="header__hamburger"
          onClick={() => setToggleSidebar(!toggleSidebar)}
        >
          {toggleSidebar ? <GrClose /> : <GiHamburgerMenu />}
        </PrimaryButton>
      </header>

      <Sidebar
        navigationList={navigationList}
        toggleSidebar={toggleSidebar}
        setToggleSidebar={setToggleSidebar}
      />
    </>
  );
}

export default Header;
