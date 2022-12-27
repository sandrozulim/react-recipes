import React, { useCallback, useEffect, useRef, useState } from "react";
import PageTitle from "../PageTitle/PageTitle";
import RecipesList from "../RecipesList/RecipesList";
import Spinner from "../UI/Spinner";
import InputField from "../UI/InputField";
import PrimaryButton from "../UI/PrimaryButton";
import Pagination from "../UI/Pagination";
import { getData } from "../../http/getData.js";
import { SEARCH_ENDPOINT } from "../../constants/api.constants";
import { ITEMS_PER_PAGE } from "../../constants/pagination.constants";
import { apiUrlBuilder } from "../../utilites/generic.utils";
import { FaSistrix } from "react-icons/fa";
import "./SearchResults.scss";

function SearchResults() {
  const [recipes, setRecipes] = useState([]);
  const [page, setPage] = useState(1);
  const [spinnerIsShown, setSpinnerIsShown] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const searchInputRef = useRef(null);

  const getRecipes = useCallback(async () => {
    if (inputValue === "") return;
    setSpinnerIsShown(true);
    const url = apiUrlBuilder(`${SEARCH_ENDPOINT}&query=${inputValue}`);
    const { results } = await getData(url);
    setRecipes(results);
    setSpinnerIsShown(false);
  }, [inputValue]);

  useEffect(() => {
    searchInputRef.current.focus();
    getRecipes();
  }, [getRecipes]);

  const submitHandler = (e) => {
    e.preventDefault();
    const { value } = searchInputRef.current;
    setInputValue(value);
  };

  return (
    <section>
      <PageTitle title="Search recipes" />

      <form className="search-form">
        <InputField
          ref={searchInputRef}
          className="search-input__input"
          type="text"
          placeholder="Search here..."
          icon={<FaSistrix />}
        />
        <PrimaryButton onClick={submitHandler} className="search-form__btn">
          Search
        </PrimaryButton>
      </form>

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
