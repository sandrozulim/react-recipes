import { useEffect } from "react";
import PrimaryButton from "./PrimaryButton";
import { ITEMS_PER_PAGE } from "../../constants/pagination.constants";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "./Pagination.scss";

function Pagination({ page, setPage, dataArray }) {
  const numberOfPages = [
    ...Array(Math.ceil(dataArray.length / ITEMS_PER_PAGE)),
  ];

  const pageButtons = numberOfPages.map((_, i) => {
    return (
      <li key={i + 1}>
        <PrimaryButton
          onClick={() => setPage(i + 1)}
          className={
            page === i + 1 ? "pagination__btn--active" : "pagination__btn"
          }
        >
          {i + 1}
        </PrimaryButton>
      </li>
    );
  });

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [page]);

  const incrementPage = () => {
    setPage((prevPage) => prevPage + 1);
  };
  const decrementPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  return (
    <nav className="pagination">
      <PrimaryButton
        className="pagination__btn"
        onClick={decrementPage}
        disabled={page <= 1}
      >
        {<AiOutlineArrowLeft />}
      </PrimaryButton>

      <ul className="pagination__page-list">{pageButtons}</ul>

      <PrimaryButton
        className="pagination__btn"
        onClick={incrementPage}
        disabled={page >= numberOfPages.length}
      >
        {<AiOutlineArrowRight />}
      </PrimaryButton>
    </nav>
  );
}

export default Pagination;
