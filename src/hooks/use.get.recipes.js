import { useState, useEffect, useCallback } from "react";
import { getData } from "../http/getData";

const useGetRecipes = (url) => {
  const [recipes, setRecipes] = useState([]);
  const [spinnerIsShown, setSpinnerIsShown] = useState(false);

  const getRecipes = useCallback(async () => {
    setSpinnerIsShown(true);
    const data = await getData(url);
    const [results] = Object.keys(data);
    setRecipes(data[results]);
    setSpinnerIsShown(false);
  }, [url]);

  useEffect(() => {
    getRecipes();
  }, [getRecipes]);

  return {
    recipes,
    spinnerIsShown,
  };
};

export default useGetRecipes;
