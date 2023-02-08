import { useState } from "react";
import PrimaryButton from "./PrimaryButton";
import { BsFilter } from "react-icons/bs";
import "./FilterTags.scss";

function FilterTags({ tagList, title, selectedTag, setSelectedTag }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const changeTagHandler = (e) => {
    setSelectedTag(e.target.innerText);
    setIsExpanded(false);
  };

  const clearFilterHandler = () => {
    setSelectedTag("");
    setIsExpanded(false);
  };

  const tagsContent = tagList.map((item) => {
    return (
      <li key={item}>
        <PrimaryButton
          className={`filter-options__btn ${
            selectedTag === item ? "filter-options__btn--active" : ""
          }`}
          onClick={changeTagHandler}
        >
          {item}
        </PrimaryButton>
      </li>
    );
  });

  return (
    <>
      <div className="filter-actions">
        <PrimaryButton
          onClick={() => setIsExpanded(!isExpanded)}
          className="filter-actions__btn"
        >
          Filters
          <BsFilter />
        </PrimaryButton>

        {isExpanded && (
          <PrimaryButton
            onClick={clearFilterHandler}
            className="filter-actions__btn"
          >
            Clear
          </PrimaryButton>
        )}
      </div>

      {isExpanded && (
        <>
          <ul className="filter-options">
            <h4 className="filter-options__title">{title}</h4>
            {tagsContent}
          </ul>
        </>
      )}
    </>
  );
}

export default FilterTags;
