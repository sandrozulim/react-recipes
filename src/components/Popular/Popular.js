import React, { useState } from "react";
import PageTitle from "../PageTitle/PageTitle";
import RecipesList from "../RecipesList/RecipesList";
import Spinner from "../UI/Spinner";
import Pagination from "../UI/Pagination";
import FilterTags from "../UI/FilterTags";
import PrimaryButton from "../UI/PrimaryButton";
import { BsFilter } from "react-icons/bs";
import { apiUrlBuilder } from "../../utilites/generic.utils";
import { POPULAR_ENDPOINT } from "../../constants/api.constants";
import { ITEMS_PER_PAGE } from "../../constants/pagination.constants";
import useGetData from "../../hooks/use.get.recipes";
import "./Popular.scss";
import ErrorModal from "../UI/ErrorModal";

function Popular() {
  const [dietFilter, setDietFilter] = useState("");
  const [mealTypeFilter, setMealTypeFilter] = useState("");
  const [toggleFilters, setToggleFilters] = useState(false);
  const [page, setPage] = useState(1);

  const url = apiUrlBuilder(
    `${POPULAR_ENDPOINT}&tags=${
      dietFilter ? dietFilter + "," + mealTypeFilter : mealTypeFilter
    }`
  );

  const { data, isLoading, error, setError } = useGetData(url);

  const resetFilterHandler = () => {
    setDietFilter("");
    setMealTypeFilter("");
  };

  const closeErrorModalHandler = () => {
    setError(null);
  };

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

        {isLoading && <Spinner />}

        {error && (
          <ErrorModal onClose={closeErrorModalHandler}>{error}</ErrorModal>
        )}

        <RecipesList
          data={data.slice(
            page * ITEMS_PER_PAGE - ITEMS_PER_PAGE,
            page * ITEMS_PER_PAGE
          )}
        />

        {data.length > ITEMS_PER_PAGE && (
          <Pagination page={page} setPage={setPage} dataArray={data} />
        )}
      </section>
    </>
  );
}

export default Popular;
