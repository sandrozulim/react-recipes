import React, { useEffect, useState, useCallback } from "react";
import PageTitle from "../PageTitle/PageTitle";
import RecipesList from "../RecipesList/RecipesList";
import Spinner from "../UI/Spinner";
import Pagination from "../UI/Pagination";
import FilterTags from "../UI/FilterTags";
import PrimaryButton from "../UI/PrimaryButton";
import { BsFilter } from "react-icons/bs";
import { getData } from "../../http/getData";
import { apiUrlBuilder } from "../../utilites/generic.utils";
import { POPULAR_ENDPOINT } from "../../constants/api.constants";
import { ITEMS_PER_PAGE } from "../../constants/pagination.constants";
import "./Popular.scss";

function Popular() {
  const [recipes, setRecipes] = useState([]);
  const [dietFilter, setDietFilter] = useState("");
  const [mealTypeFilter, setMealTypeFilter] = useState("");
  const [toggleFilters, setToggleFilters] = useState(false);
  const [page, setPage] = useState(1);
  const [spinnerIsShown, setSpinnerIsShown] = useState(false);

  const diets = ["gluten free", "vegetarian", "vegan"];
  const mealTypes = [
    "main course",
    "side dish",
    "dessert",
    "appetizer",
    "snack",
    "fingerfood",
    "marinade",
    "sauce",
  ];

  const getRecipes = useCallback(async () => {
    setSpinnerIsShown(true);
    const url = apiUrlBuilder(
      `${POPULAR_ENDPOINT}&tags=${(dietFilter, mealTypeFilter)}`
    );
    const data = await getData(url);
    setRecipes(data.recipes);
    setSpinnerIsShown(false);
  }, [dietFilter, mealTypeFilter]);

  useEffect(() => {
    getRecipes();
  }, [getRecipes]);

  const resetFilterHandler = () => {
    setDietFilter("");
    setMealTypeFilter("");
  };

  return (
    <>
      <section>
        <PageTitle title="Popular" />

        <div className="filter-actions">
          <PrimaryButton
            className="filter-actions__btn"
            onClick={() => setToggleFilters(!toggleFilters)}
          >
            Filters
            <BsFilter className="filter-actions__btn-icon" />
          </PrimaryButton>

          {toggleFilters && (
            <PrimaryButton
              className="filter-actions__btn"
              onClick={resetFilterHandler}
            >
              clear filters
            </PrimaryButton>
          )}
        </div>

        {toggleFilters && (
          <div className="tags">
            <FilterTags
              title="diets"
              tagList={diets}
              state={dietFilter}
              setState={setDietFilter}
              setToggleFilters={setToggleFilters}
            />
            <FilterTags
              title="meal type"
              tagList={mealTypes}
              state={mealTypeFilter}
              setState={setMealTypeFilter}
              setToggleFilters={setToggleFilters}
            />
          </div>
        )}

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
