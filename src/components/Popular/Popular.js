import React, { useEffect, useState, useCallback } from "react";
import PageTitle from "../PageTitle/PageTitle";
import RecipesList from "../RecipesList/RecipesList";
import PrimaryButton from "../UI/PrimaryButton";
import Spinner from "../UI/Spinner";
import { getData } from "../../http/getData";
import { apiUrlBuilder } from "../../utilites/generic.utils";
import "./Popular.scss";

function Popular() {
  const [spinnerIsShown, setSpinnerIsShown] = useState(false);
  const [recipesData, setRecipesData] = useState([]);
  const [diet, setDiet] = useState("no diet");

  const getRecipes = useCallback(async () => {
    setSpinnerIsShown(true);
    const url = apiUrlBuilder(
      `random?number=18&tags=${diet === "no diet" ? "" : diet}`
    );
    const data = await getData(url);
    setRecipesData(data.recipes);
    setSpinnerIsShown(false);
  }, [diet]);

  useEffect(() => {
    getRecipes();
  }, [diet, getRecipes]);

  const changeDietHandler = (e) => {
    setDiet(e.target.innerText);
  };

  const diets = ["no diet", "gluten free", "vegetarian", "vegan"];
  const dietContent = diets.map((item, index) => {
    return (
      <PrimaryButton
        key={index}
        className={`diet-options__btn ${
          diet === item ? "diet-options__btn--active" : ""
        }`}
        onClick={changeDietHandler}
      >
        {item}
      </PrimaryButton>
    );
  });

  return (
    <>
      <PageTitle title="Popular" />
      <div className="diet-options">{dietContent}</div>
      {spinnerIsShown && <Spinner />}
      <RecipesList data={recipesData} />
    </>
  );
}

export default Popular;
