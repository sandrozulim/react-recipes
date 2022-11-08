import React from "react";
import Recipe from "../Recipe/Recipe";
import "./RecipesList.scss";

function RecipesList({ recipesData }) {
  const recipesList = recipesData.map((recipe) => {
    return <Recipe key={recipe.id} recipe={recipe} />;
  });

  return <ul className="recipes-list">{recipesList}</ul>;
}

export default RecipesList;
