import React, { useState } from "react";
import PrimaryButton from "../UI/PrimaryButton";
import InputField from "../UI/InputField";
import { FaSistrix } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import "./SecondaryNavbar.scss";

function SecondaryNavbar({
  setToggleSidebar,
  toggleSidebar,
  setSearchInputValue,
}) {
  const [toggleSearchInput, setToggleSearchInput] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const searchInputSubmitHandler = (e) => {
    e.preventDefault();
    setSearchInputValue(inputValue);
    setInputValue("");
    setToggleSearchInput(false);
  };

  return (
    <nav className="secondary-nav">
      {!toggleSearchInput && (
        <>
          <PrimaryButton
            className="secondary-nav__btn secondary-nav__hamburger"
            onClick={() => setToggleSidebar(!toggleSidebar)}
          >
            {toggleSidebar ? <GrClose /> : <GiHamburgerMenu />}
          </PrimaryButton>

          <NavLink className="secondary-nav__link" to="/favorites">
            <AiFillHeart />
          </NavLink>
        </>
      )}

      <NavLink
        className="secondary-nav__link"
        to="/search"
        onClick={() => setToggleSearchInput(!toggleSearchInput)}
      >
        {toggleSearchInput ? <GrClose /> : <FaSistrix />}
      </NavLink>

      {toggleSearchInput && (
        <form
          onSubmit={searchInputSubmitHandler}
          className="secondary-nav__search"
        >
          <InputField
            type="text"
            placeholder="Search here..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            icon={<FaSistrix />}
          />
        </form>
      )}
    </nav>
  );
}

export default SecondaryNavbar;
