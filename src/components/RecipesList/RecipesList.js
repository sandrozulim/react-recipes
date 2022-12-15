import React from "react";
import Recipe from "../Recipe/Recipe";
import "./RecipesList.scss";

function RecipesList({ data }) {
  const recipes = data.map((recipe) => (
    <Recipe key={recipe.id} recipe={recipe} />
  ));

  return <ul className="recipes-list">{recipes}</ul>;
}

export default RecipesList;
