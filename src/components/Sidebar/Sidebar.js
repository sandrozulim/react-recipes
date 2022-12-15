import React from "react";
import Navbar from "../Navbar/Navbar";
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
      <Navbar
        navigationList={navigationList}
        className={`${!toggleSidebar ? "sidebar" : "sidebar sidebar--toggle"}`}
      />
    </>
  );
}

export default Sidebar;
