import React, { useEffect, useState } from "react";
import RecipesList from "../RecipesList/RecipesList";
import { getData } from "../../http/getData";
import { API_KEY, BASE_API_URL } from "../../constants/constants";
import "./Popular.scss";

function Popular() {
  const [recipesData, setRecipesData] = useState([]);

  useEffect(() => {
    async function getRecipes() {
      const url = `${BASE_API_URL}random?number=12&apiKey=${API_KEY}`;
      const { recipes } = await getData(url);
      setRecipesData(recipes);
    }
    getRecipes();
  }, []);

  return (
    <>
      <h2 className="title">Popular recipes</h2>
      <RecipesList recipesData={recipesData} />
    </>
  );
}

export default Popular;
