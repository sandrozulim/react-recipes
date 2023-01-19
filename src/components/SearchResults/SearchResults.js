import React, { useEffect, useRef, useState } from "react";
import PageTitle from "../PageTitle/PageTitle";
import RecipesList from "../RecipesList/RecipesList";
import Spinner from "../UI/Spinner";
import InputField from "../UI/InputField";
import PrimaryButton from "../UI/PrimaryButton";
import Pagination from "../UI/Pagination";
import useGetData from "../../hooks/use.get.recipes";
import ErrorModal from "../UI/ErrorModal";
import { SEARCH_ENDPOINT } from "../../constants/api.constants";
import { ITEMS_PER_PAGE } from "../../constants/pagination.constants";
import { apiUrlBuilder } from "../../utilites/generic.utils";
import { FaSistrix } from "react-icons/fa";
import "./SearchResults.scss";

function SearchResults() {
  const [page, setPage] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef(null);

  const url = apiUrlBuilder(`${SEARCH_ENDPOINT}&query=${searchQuery}`);
  const { data, isLoading, error, setError } = useGetData(url);

  const submitSearchQueryHandler = () => {
    if (inputValue.trim() === "") setError("Cannot search empty field!");
    setSearchQuery(inputValue);
  };

  const closeErrorModalHandler = () => {
    setError(null);
  };

  useEffect(() => {
    searchInputRef.current.focus();
  }, []);

  return (
    <section>
      <PageTitle title="Search recipes" />

      {error && (
        <ErrorModal onClose={closeErrorModalHandler}>{error}</ErrorModal>
      )}

      <div className="search">
        <InputField
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          ref={searchInputRef}
          type="text"
          placeholder="Search here..."
          icon={<FaSistrix />}
        />
        <PrimaryButton
          className="search__btn"
          onClick={submitSearchQueryHandler}
        >
          Search
        </PrimaryButton>
      </div>

      {isLoading && <Spinner />}

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
  );
}

export default SearchResults;
