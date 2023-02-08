import React, { useState } from "react";
import PageTitle from "../PageTitle/PageTitle";
import RecipesList from "../RecipesList/RecipesList";
import Spinner from "../UI/Spinner";
import Pagination from "../UI/Pagination";
import FilterTags from "../UI/FilterTags";
import ErrorModal from "../UI/ErrorModal";
import { apiUrlBuilder } from "../../utilites/generic.utils";
import { POPULAR_ENDPOINT } from "../../constants/api.constants";
import { ITEMS_PER_PAGE } from "../../constants/pagination.constants";
import useGetData from "../../hooks/useGetData";
import mealTypes from "../../mealTypes.json";
import "./Popular.scss";

function Popular() {
  const [page, setPage] = useState(1);
  const [selectedTag, setSelectedTag] = useState("");

  const url = apiUrlBuilder(`${POPULAR_ENDPOINT}&tags=${selectedTag}`);
  const { data, isLoading, error, setError } = useGetData(url);

  return (
    <>
      <section>
        <PageTitle title="Popular" />

        {error && (
          <ErrorModal onClose={() => setError(null)}>{error}</ErrorModal>
        )}

        {data.length > 0 && (
          <FilterTags
            title="meal type"
            tagList={mealTypes}
            selectedTag={selectedTag}
            setSelectedTag={setSelectedTag}
          />
        )}

        {isLoading && <Spinner />}

        {data.length > 0 && (
          <RecipesList
            data={data.slice(
              page * ITEMS_PER_PAGE - ITEMS_PER_PAGE,
              page * ITEMS_PER_PAGE
            )}
          />
        )}

        {data.length > ITEMS_PER_PAGE && (
          <Pagination page={page} setPage={setPage} dataArray={data} />
        )}
      </section>
    </>
  );
}

export default Popular;
