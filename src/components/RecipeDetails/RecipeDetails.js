import React, { useState } from "react";
import RecipeDetailsActions from "../RecipeDetailsActions/RecipeDetailsActions";
import PrimaryButton from "../UI/PrimaryButton";
import Modal from "../UI/Modal";
import { GrClose } from "react-icons/gr";
import "./RecipeDetails.scss";

function RecipeDetails({ recipe, setDetailsIsOpen }) {
  const [ingredients, setIngredients] = useState(recipe.extendedIngredients);

  const recipeInstructions = recipe.analyzedInstructions[0]?.steps.map(
    (item) => {
      return <p key={item.number}>{item.step}</p>;
    }
  );

  const ingredientsList = ingredients.map((ingredient) => {
    return (
      <li key={ingredient.original}>
        <span>{ingredient.amount}</span>
        <span>{ingredient.unit}</span>
        <span>{ingredient.name}</span>
      </li>
    );
  });

  return (
    <Modal onClose={() => setDetailsIsOpen(false)}>
      <article className="recipe-details">
        <PrimaryButton
          className="recipe-details__close-btn"
          onClick={() => setDetailsIsOpen(false)}
        >
          <GrClose />
          <span>close</span>
        </PrimaryButton>

        <h2 className="recipe-details__title">{recipe.title}</h2>

        <img
          className="recipe-details__img"
          src={recipe.image}
          alt={recipe.title}
        />

        <RecipeDetailsActions
          recipe={recipe}
          ingredients={ingredients}
          setIngredients={setIngredients}
        />

        <section className="recipe-details__ingredients">
          <h3>Ingredients</h3>
          <ul className="recipe-details__ingredients-list">
            {ingredientsList}
          </ul>
        </section>

        <section className="recipe-details__instructions">
          <h3>Instructions</h3>
          {recipeInstructions
            ? recipeInstructions
            : "Instructions are not available for this recipe =("}
        </section>
      </article>
    </Modal>
  );
}

export default RecipeDetails;
