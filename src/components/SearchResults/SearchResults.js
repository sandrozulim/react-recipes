import React, { useEffect, useRef, useState } from "react";
import PageTitle from "../PageTitle/PageTitle";
import RecipesList from "../RecipesList/RecipesList";
import Spinner from "../UI/Spinner";
import InputField from "../UI/InputField";
import PrimaryButton from "../UI/PrimaryButton";
import Pagination from "../UI/Pagination";
import useGetRecipes from "../../hooks/use.get.recipes";
import { SEARCH_ENDPOINT } from "../../constants/api.constants";
import { ITEMS_PER_PAGE } from "../../constants/pagination.constants";
import { apiUrlBuilder } from "../../utilites/generic.utils";
import { FaSistrix } from "react-icons/fa";
import "./SearchResults.scss";

function SearchResults() {
  const [page, setPage] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef(null);

  const url = apiUrlBuilder(`${SEARCH_ENDPOINT}&query=${searchQuery}`);
  const { recipes, spinnerIsShown } = useGetRecipes(url);

  const submitSearchQueryHandler = () => {
    setSearchQuery(inputValue);
  };

  useEffect(() => {
    searchInputRef.current.focus();
  }, []);

  return (
    <section>
      <PageTitle title="Search recipes" />

      <div className="search">
        <InputField
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          ref={searchInputRef}
          type="text"
          placeholder="Search here..."
          icon={<FaSistrix />}
        />
        <PrimaryButton
          className="search__btn"
          onClick={submitSearchQueryHandler}
        >
          Search
        </PrimaryButton>
      </div>

      {spinnerIsShown && <Spinner />}

      <RecipesList
        data={recipes.slice(
          page * ITEMS_PER_PAGE - ITEMS_PER_PAGE,
          page * ITEMS_PER_PAGE
        )}
      />

      {recipes.length > ITEMS_PER_PAGE && (
        <Pagination page={page} setPage={setPage} dataArray={recipes} />
      )}
    </section>
  );
}

export default SearchResults;
