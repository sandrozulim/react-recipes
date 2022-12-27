import React, { useEffect, useState, useCallback } from "react";
import PageTitle from "../PageTitle/PageTitle";
import RecipesList from "../RecipesList/RecipesList";
import PrimaryButton from "../UI/PrimaryButton";
import Spinner from "../UI/Spinner";
import Pagination from "../UI/Pagination";
import { getData } from "../../http/getData";
import { apiUrlBuilder } from "../../utilites/generic.utils";
import { POPULAR_ENDPOINT } from "../../constants/api.constants";
import { ITEMS_PER_PAGE } from "../../constants/pagination.constants";
import "./Popular.scss";

function Popular() {
  const [spinnerIsShown, setSpinnerIsShown] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [diet, setDiet] = useState("no diet");
  const [page, setPage] = useState(1);

  const getRecipes = useCallback(async () => {
    setSpinnerIsShown(true);
    const url = apiUrlBuilder(
      `${POPULAR_ENDPOINT}&tags=${diet === "no diet" ? "" : diet}`
    );
    const data = await getData(url);
    setRecipes(data.recipes);
    setSpinnerIsShown(false);
  }, [diet]);

  useEffect(() => {
    getRecipes();
  }, [diet, getRecipes]);

  const changeDietHandler = (e) => {
    setDiet(e.target.innerText);
  };

  const diets = ["no diet", "gluten free", "vegetarian", "vegan"];
  const dietContent = diets.map((item, index) => {
    return (
      <PrimaryButton
        key={index}
        className={`diet-options__btn ${
          diet === item ? "diet-options__btn--active" : ""
        }`}
        onClick={changeDietHandler}
      >
        {item}
      </PrimaryButton>
    );
  });

  return (
    <>
      <section>
        <PageTitle title="Popular" />

        <div className="diet-options">{dietContent}</div>

        {spinnerIsShown && <Spinner />}

        <RecipesList
          data={recipes.slice(
            page * ITEMS_PER_PAGE - ITEMS_PER_PAGE,
            page * ITEMS_PER_PAGE
          )}
        />

        {recipes.length > ITEMS_PER_PAGE && (
          <Pagination page={page} setPage={setPage} dataArray={recipes} />
        )}
      </section>
    </>
  );
}

export default Popular;
