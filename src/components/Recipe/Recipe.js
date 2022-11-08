import React from "react";
import "./Recipe.scss";

function Recipe({ recipe }) {
  return (
    <li className="recipe">
      <h3 className="recipe__title">{recipe.title}</h3>
      <div className="recipe__image">
        <img src={recipe.image} alt={recipe.title} />
      </div>
    </li>
  );
}

export default Recipe;
