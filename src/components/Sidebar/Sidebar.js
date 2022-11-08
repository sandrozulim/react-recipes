import React from "react";
import MainNavbar from "../MainNavbar/MainNavbar";
import "./Sidebar.scss";

function Sidebar({ toggleSidebar, setToggleSidebar }) {
  return (
    <>
      {toggleSidebar && (
        <div onClick={() => setToggleSidebar(false)} className="overlay"></div>
      )}

      <MainNavbar
        classes={` ${!toggleSidebar ? "sidebar" : "sidebar sidebar--toggle"}`}
      />
    </>
  );
}

export default Sidebar;
