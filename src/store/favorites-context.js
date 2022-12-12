import React, { useState } from "react";

const FavoritesContext = React.createContext({
  favorites: [],
  addFavoritesHandler: () => {},
  removeFavoritesHandler: () => {},
});

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const removeFavoritesHandler = (id) => {
    const updatedFavorites = [...favorites].filter((item) => item.id !== id);
    setFavorites(updatedFavorites);
  };

  const addFavoritesHandler = (recipe) => {
    if (favorites.find((item) => item.id === recipe.id)) return;
    setFavorites((prev) => {
      return [...prev, recipe];
    });
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites: favorites,
        addFavoritesHandler: addFavoritesHandler,
        removeFavoritesHandler: removeFavoritesHandler,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
