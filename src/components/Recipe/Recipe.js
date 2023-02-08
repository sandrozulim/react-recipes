import React, { useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import RecipeDetails from "../RecipeDetails/RecipeDetails";
import "./Recipe.scss";

function Recipe({ recipe }) {
  const [detailsIsOpen, setDetailsIsOpen] = useState(false);

  const openDetailsHandler = () => {
    setDetailsIsOpen(true);
  };

  return (
    <>
      <li onClick={openDetailsHandler} className="recipe">
        <div className="recipe__title">
          <h3>{recipe.title}</h3>
          <span className="recipe__title-time">
            <AiOutlineClockCircle />
            {recipe.readyInMinutes}min
          </span>
        </div>

        <div className="recipe__image">
          <img src={recipe.image} alt={recipe.title} />
        </div>
      </li>

      {detailsIsOpen && (
        <RecipeDetails setDetailsIsOpen={setDetailsIsOpen} recipe={recipe} />
      )}
    </>
  );
}

export default Recipe;
