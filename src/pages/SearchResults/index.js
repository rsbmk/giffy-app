import React, { useCallback, useEffect } from "react";
import "./styles.css";

import GifList from "componets/GifList";
import Header from "componets/Header";

import useGifsSearch from "hooks/useGifsSearch";
import useNearScrean from "hooks/useNearScreen";

import debounce from "just-debounce-it";
import { Helmet } from "react-helmet";

export function SearchResults({ params }) {
  const { gifs, loading, setPage } = useGifsSearch(params.keyword);
  const {isNearScreen, elementOfObserver } = useNearScrean({once: false});
 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceHandleNextPage = useCallback(debounce(
    () => setPage((prePage) => prePage + 1), 500
  ),[]); 

  useEffect(function () {
    if (isNearScreen) debounceHandleNextPage();
  },[debounceHandleNextPage,isNearScreen]);


  return (
    <div className="wrapSearchResults">
      <Helmet>
        <title>Results of {decodeURI(params.keyword)}</title>
        <meta name="description" content={`This page is show the results on search ${decodeURI(params.keyword)}`} /> 
      </Helmet>
      <Header />
      <GifList keyword={params.keyword} gifList={gifs} loading={loading} />
      <div ref={elementOfObserver}/>
    </div>
  );
}

export default React.memo(SearchResults);
