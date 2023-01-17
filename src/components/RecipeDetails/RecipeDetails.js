import React, { useState } from "react";
import RecipeDetailsActions from "../RecipeDetailsActions/RecipeDetailsActions";
import PrimaryButton from "../UI/PrimaryButton";
import Modal from "../UI/Modal";
import { numToTwoDecimals } from "../../utilites/generic.utils";
import { GrClose } from "react-icons/gr";
import "./RecipeDetails.scss";

function RecipeDetails({ recipe, onCloseHandler }) {
  const [ingredients, setIngredients] = useState(recipe.extendedIngredients);

  const recipeInstructions = recipe.analyzedInstructions[0]?.steps.map(
    ({ step }, index) => {
      return <p key={index}>{step}</p>;
    }
  );

  const ingredientsList = ingredients.map((ingredient) => {
    return (
      <li key={Math.random()}>
        <span>{ingredient.amount}</span>
        <span>{ingredient.unit}</span>
        <span>{ingredient.name}</span>
      </li>
    );
  });

  const updateIngredients = (operator, servings) => {
    const updatedIngredients = ingredients.map((ingredient) => {
      const perPerson = numToTwoDecimals(ingredient.amount / servings);
      if (operator === "plus") {
        return {
          ...ingredient,
          amount: numToTwoDecimals(ingredient.amount + perPerson),
        };
      } else {
        return {
          ...ingredient,
          amount: numToTwoDecimals(ingredient.amount - perPerson),
        };
      }
    });
    setIngredients(updatedIngredients);
  };

  return (
    <Modal onClose={onCloseHandler}>
      <section className="recipe-details">
        <PrimaryButton
          className="recipe-details__close-btn"
          onClick={onCloseHandler}
        >
          <GrClose />
          <span>close</span>
        </PrimaryButton>

        <img src={recipe.image} alt={recipe.title} />
        <h2 className="recipe-details__title">{recipe.title}</h2>

        <RecipeDetailsActions
          recipe={recipe}
          updateIngredients={updateIngredients}
        />

        <ul className="recipe-details__ingredients">
          <h3>Ingredients</h3>
          {ingredientsList}
        </ul>

        <div className="recipe-details__instructions">
          <h3>Instructions</h3>
          {recipeInstructions
            ? recipeInstructions
            : "Instructions are not available for this recipe =("}
        </div>
      </section>
    </Modal>
  );
}

export default RecipeDetails;
