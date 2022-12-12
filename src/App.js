import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Popular from "./components/Popular/Popular";
import Favorites from "./components/Favorites/Favorites";
import SearchResults from "./components/SearchResults/SearchResults";
import { Route, Routes } from "react-router-dom";
import { FavoritesContextProvider } from "./store/favorites-context";

function App() {
  const [searchInputValue, setSearchInputValue] = useState("");

  //Reseting searchInputValue STATE on every STATE change.
  useEffect(() => {
    setSearchInputValue("");
  }, [searchInputValue]);

  return (
    <>
      <Header setSearchInputValue={setSearchInputValue} />
      <main>
        <FavoritesContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route
              path="/search"
              element={<SearchResults searchInputValue={searchInputValue} />}
            />
          </Routes>
        </FavoritesContextProvider>
      </main>
    </>
  );
}

export default App;
