import React, { useEffect, useState } from "react";
import PageTitle from "../PageTitle/PageTitle";
import RecipesList from "../RecipesList/RecipesList";
import Spinner from "../UI/Spinner";
import { BASE_API_URL, API_KEY } from "../../constants/constants";
import { getData } from "../../http/getData.js";
import "./SearchResults.scss";
import InputField from "../UI/InputField";

function SearchResults({ searchInputValue }) {
  const [recipes, setRecipes] = useState([]);
  const [spinnerIsShown, setSpinnerIsShown] = useState(false);

  useEffect(() => {
    if (searchInputValue === "") return;
    const getRecipes = async () => {
      const url = `${BASE_API_URL}complexSearch?query=${searchInputValue}&addRecipeInformation=true&fillIngredients=true&apiKey=${API_KEY}`;
      setSpinnerIsShown(true);
      const { results } = await getData(url);
      setRecipes(results);
      setSpinnerIsShown(false);
    };
    getRecipes();
  }, [searchInputValue]);

  return (
    <>
      <PageTitle title="Search results" />
      {spinnerIsShown && <Spinner />}
      <InputField />
      <RecipesList data={recipes} />
    </>
  );
}

export default SearchResults;
