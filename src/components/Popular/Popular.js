import React, { useEffect, useState } from "react";
import PageTitle from "../PageTitle/PageTitle";
import RecipesList from "../RecipesList/RecipesList";
import Spinner from "../UI/Spinner";
import { getData } from "../../http/getData";
import { API_KEY, BASE_API_URL } from "../../constants/constants";
import "./Popular.scss";
import PrimaryButton from "../UI/PrimaryButton";

function Popular() {
  const [spinnerIsShown, setSpinnerIsShown] = useState(false);
  const [recipesData, setRecipesData] = useState([]);
  const [diet, setDiet] = useState("");

  useEffect(() => {
    async function getRecipes() {
      const url = `${BASE_API_URL}random?number=18&tags=${diet}&apiKey=${API_KEY}`;
      setSpinnerIsShown(true);
      const { recipes } = await getData(url);
      setRecipesData(recipes);
      setSpinnerIsShown(false);
    }
    getRecipes();
  }, [diet]);

  const changeDietHandler = (e) => {
    const { innerText, className } = e.target;
    if (className !== "btn diet-options__btn") return;
    if (innerText === "No diet") return setDiet("");
    setDiet(innerText);
  };

  return (
    <>
      <PageTitle title="Popular" />
      <div onClick={changeDietHandler} className="diet-options">
        <PrimaryButton className="diet-options__btn">No diet</PrimaryButton>
        <PrimaryButton className="diet-options__btn">gluten free</PrimaryButton>
        <PrimaryButton className="diet-options__btn">vegetarian</PrimaryButton>
        <PrimaryButton className="diet-options__btn">vegan</PrimaryButton>
      </div>
      {spinnerIsShown && <Spinner />}
      <RecipesList data={recipesData} />
    </>
  );
}

export default Popular;
