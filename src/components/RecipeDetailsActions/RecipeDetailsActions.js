import React, { useState, useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
import PrimaryButton from "../UI/PrimaryButton";
import { BsFillPeopleFill } from "react-icons/bs";
import {
  AiFillClockCircle,
  AiFillHeart,
  AiOutlinePlus,
  AiOutlineMinus,
} from "react-icons/ai";
import "./RecipeDetailsActions.scss";

function RecipeDetailsActions({ recipe, updateIngredients }) {
  const [servings, setServings] = useState(recipe.servings);
  const ctx = useContext(FavoritesContext);

  const incrementServings = () => {
    if (servings > 12) return;
    setServings((prevState) => prevState + 1);
    updateIngredients("plus", servings);
  };

  const decrementServings = () => {
    if (servings <= 1) return;
    setServings((prevState) => prevState - 1);
    updateIngredients("minus", servings);
  };

  const saveButton = ctx.favorites.find((item) => item.id === recipe.id) ? (
    <PrimaryButton
      onClick={() => ctx.removeFavoritesHandler(recipe.id)}
      className="actions__btn"
    >
      <AiFillHeart />
      Remove
    </PrimaryButton>
  ) : (
    <PrimaryButton
      onClick={() => ctx.addFavoritesHandler(recipe)}
      className="actions__btn"
    >
      <AiFillHeart />
      Save
    </PrimaryButton>
  );

  return (
    <div className="actions">
      <span>
        <AiFillClockCircle />
        {recipe.readyInMinutes}
        min
      </span>

      <div className="actions__servings">
        <BsFillPeopleFill />
        {servings}

        <PrimaryButton className="actions__btn" onClick={incrementServings}>
          <AiOutlinePlus />
        </PrimaryButton>

        <PrimaryButton className="actions__btn" onClick={decrementServings}>
          <AiOutlineMinus />
        </PrimaryButton>
      </div>
      {saveButton}
    </div>
  );
}

export default RecipeDetailsActions;
