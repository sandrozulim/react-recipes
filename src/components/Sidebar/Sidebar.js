import React from "react";
import MainNavbar from "../MainNavbar/MainNavbar";
import "./Sidebar.scss";

function Sidebar({ toggleSidebar, setToggleSidebar, navigationList }) {
  return (
    <>
      {toggleSidebar && (
        <div
          onClick={() => setToggleSidebar(false)}
          className="sidebar-backdrop"
        ></div>
      )}
      <MainNavbar
        navigationList={navigationList}
        className={`${!toggleSidebar ? "sidebar" : "sidebar sidebar--toggle"}`}
      />
    </>
  );
}

export default Sidebar;
