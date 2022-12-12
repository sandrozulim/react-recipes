import React, { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
import PageTitle from "../PageTitle/PageTitle";
import RecipesList from "../RecipesList/RecipesList";
import "./Favorites.scss";

function Favorites() {
  const ctx = useContext(FavoritesContext);

  return (
    <>
      <PageTitle title="Favorites" />
      <RecipesList data={ctx.favorites} />
    </>
  );
}

export default Favorites;
