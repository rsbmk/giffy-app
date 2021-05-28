import React from "react";
import "./styles.css";
import GifList from "../../componets/GifList";
import Header from "../../componets/Header";
import useGifsSearch from "../../hooks/useGifsSearch";

export function SearchResults({ params }) {
  const { setPage } = useGifsSearch(params.keyword);

  const handleClickNextPage = () => setPage((prePage) => prePage + 1);

  return (
    <div className="wrapSearchResults">
      <Header />
      <GifList keyword={params.keyword} />
      <button className="botton" onClick={handleClickNextPage}>
        Ver más
      </button>
    </div>
  );
}

export default SearchResults;
