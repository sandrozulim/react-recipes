import React, { useCallback, useEffect, useRef, useState } from "react";
import PageTitle from "../PageTitle/PageTitle";
import RecipesList from "../RecipesList/RecipesList";
import Spinner from "../UI/Spinner";
import InputField from "../UI/InputField";
import PrimaryButton from "../UI/PrimaryButton";
import { getData } from "../../http/getData.js";
import { apiUrlBuilder } from "../../utilites/generic.utils";
import { FaSistrix } from "react-icons/fa";
import "./SearchResults.scss";

function SearchResults() {
  const [recipes, setRecipes] = useState([]);
  const [spinnerIsShown, setSpinnerIsShown] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const searchInputRef = useRef(null);

  const getRecipes = useCallback(async () => {
    setSpinnerIsShown(true);
    const url = apiUrlBuilder(
      `complexSearch?query=${inputValue}&addRecipeInformation=true&fillIngredients=true`
    );
    const { results } = await getData(url);
    setRecipes(results);
    setSpinnerIsShown(false);
  }, [inputValue]);

  useEffect(() => {
    searchInputRef.current.focus();
    getRecipes();
  }, [getRecipes]);

  const submitHandler = () => {
    const { value } = searchInputRef.current;
    setInputValue(value);
  };

  return (
    <>
      <PageTitle title="Search recipes" />
      <div className="search-input">
        <InputField
          ref={searchInputRef}
          className="search-input__input"
          type="text"
          placeholder="Search here..."
          icon={<FaSistrix />}
        />
        <PrimaryButton onClick={submitHandler} className="search-input__btn">
          Search
        </PrimaryButton>
      </div>
      {spinnerIsShown && <Spinner />}

      <RecipesList data={recipes} />
    </>
  );
}

export default SearchResults;
