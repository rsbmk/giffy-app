import React from "react";
import "./styles.css";
import GifList from "../../componets/GifList";
import Header from "../../componets/Header";

export function SearchResults({ params }) {
  const handleClickNextPage = () => {};

  return (
    <div className="wrapSearchResults">
      <Header />
      <GifList keyword={params.keyword} />
      <button className="botton" onClick={handleClickNextPage}>
        Next Page
      </button>
    </div>
  );
}

export default SearchResults;
