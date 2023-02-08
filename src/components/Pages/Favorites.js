import React, { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
import PageTitle from "../PageTitle/PageTitle";
import RecipesList from "../RecipesList/RecipesList";
import "./Favorites.scss";

function Favorites() {
  const { favorites } = useContext(FavoritesContext);

  const message = (
    <h2 className="message">
      No saved recipes! Please find a recipe you like and save it.
    </h2>
  );

  return (
    <>
      <PageTitle title="Favorites" />
      {favorites.length > 0 ? <RecipesList data={favorites} /> : message}
    </>
  );
}

export default Favorites;
