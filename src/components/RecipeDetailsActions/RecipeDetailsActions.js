import React, { useState, useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
import PrimaryButton from "../UI/PrimaryButton";
import { numToTwoDecimals } from "../../utilites/generic.utils";
import { BsFillPeopleFill } from "react-icons/bs";
import {
  AiFillClockCircle,
  AiFillHeart,
  AiOutlinePlus,
  AiOutlineMinus,
} from "react-icons/ai";
import "./RecipeDetailsActions.scss";

function RecipeDetailsActions({ recipe, ingredients, setIngredients }) {
  const [servings, setServings] = useState(recipe.servings);
  const ctx = useContext(FavoritesContext);

  const incrementServings = () => {
    setServings((previous) => previous + 1);

    const updatedIngredients = ingredients.map((ingredient) => {
      const ingredientPerPerson = ingredient.amount / servings;
      const newIngredientAmount = numToTwoDecimals(
        ingredient.amount + ingredientPerPerson
      );
      return { ...ingredient, amount: newIngredientAmount };
    });

    setIngredients(updatedIngredients);
  };

  const decrementServings = () => {
    if (servings <= 1) return;

    setServings((previous) => previous - 1);

    const updatedIngredients = ingredients.map((ingredient) => {
      const ingredientPerPerson = ingredient.amount / servings;
      const newIngredientAmount = numToTwoDecimals(
        ingredient.amount - ingredientPerPerson
      );
      return { ...ingredient, amount: newIngredientAmount };
    });

    setIngredients(updatedIngredients);
  };

  let saveButtonText;
  let saveButtonHandler;
  const isAlreadyFavorite = ctx.favorites.find((item) => item.id === recipe.id);

  if (isAlreadyFavorite) {
    saveButtonText = "Remove";
    saveButtonHandler = () => ctx.removeFavoritesHandler(recipe.id);
  } else {
    saveButtonText = "Save";
    saveButtonHandler = () => ctx.addFavoritesHandler(recipe);
  }

  return (
    <section className="actions">
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

      <PrimaryButton onClick={saveButtonHandler} className="actions__btn">
        <AiFillHeart />
        {saveButtonText}
      </PrimaryButton>
    </section>
  );
}

export default RecipeDetailsActions;
