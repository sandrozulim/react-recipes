import React, { useEffect, useState } from "react";
import PageTitle from "../PageTitle/PageTitle";
import RecipesList from "../RecipesList/RecipesList";
import Spinner from "../UI/Spinner";
import { FaSistrix } from "react-icons/fa";
import InputField from "../UI/InputField";
import { BASE_API_URL, API_KEY } from "../../constants/constants";
import { getData } from "../../http/getData.js";
import "./SearchResults.scss";

function SearchResults() {
  const [recipes, setRecipes] = useState([]);
  const [spinnerIsShown, setSpinnerIsShown] = useState(false);
  const [inputValue, setInputValue] = useState("");

  //Refaktorirat useEffect!
  useEffect(() => {
    if (inputValue === "") return;
    const getRecipes = async () => {
      const url = `${BASE_API_URL}complexSearch?query=${inputValue}&addRecipeInformation=true&fillIngredients=true&apiKey=${API_KEY}`;
      setSpinnerIsShown(true);
      const { results } = await getData(url);
      setRecipes(results);
      setSpinnerIsShown(false);
    };
    getRecipes();
  }, [inputValue]);

  return (
    <>
      <PageTitle title="Search results" />
      <InputField
        className="search-input"
        type="text"
        placeholder="Search here..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        icon={<FaSistrix />}
      />
      {spinnerIsShown && <Spinner />}

      <RecipesList data={recipes} />
    </>
  );
}

export default SearchResults;
