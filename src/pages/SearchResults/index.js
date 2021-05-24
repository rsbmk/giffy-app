import React from "react";
import GifList from "../../componets/GifList";
import Header from "../../componets/Header";

export function SearchResults({ params }) {
  return (
    <div>
      <Header />
      <GifList title={params.keyword} keyword={params.keyword} />
    </div>
  );
}

export default SearchResults;
