import React, { useState } from "react";
import MainNavbar from "../MainNavbar/MainNavbar";
import SecondaryNavbar from "../SecondaryNavbar/SecondaryNavbar";
import Sidebar from "../Sidebar/Sidebar";
import "./Header.scss";

function Header({ setSearchInputValue }) {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const navigationList = [
    { name: "home", path: "/" },
    { name: "popular", path: "/popular" },
    { name: "dummy", path: "/dummy" },
  ];

  return (
    <>
      <header className="header">
        <div className="header__title">
          <h1>React</h1>
          <h1 className="header__title--green">Recipes</h1>
        </div>

        <MainNavbar navigationList={navigationList} />

        <SecondaryNavbar
          setSearchInputValue={setSearchInputValue}
          setToggleSidebar={setToggleSidebar}
          toggleSidebar={toggleSidebar}
        />
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
