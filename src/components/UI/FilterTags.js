import React from "react";
import PrimaryButton from "./PrimaryButton";
import "./FilterTags.scss";

function FilterTags({ tagList, state, setState, title, setToggleFilters }) {
  const changeTagHandler = (e) => {
    setState(e.target.innerText);
    setToggleFilters(false);
  };

  const tags = tagList.map((item, index) => {
    return (
      <li key={index}>
        <PrimaryButton
          className={`filter-options__btn ${
            state === item ? "filter-options__btn--active" : ""
          }`}
          onClick={changeTagHandler}
        >
          {item}
        </PrimaryButton>
      </li>
    );
  });

  return (
    <ul className="filter-options">
      {<h4 className="filter-options__title">{title}</h4>}
      {tags}
    </ul>
  );
}

export default FilterTags;
