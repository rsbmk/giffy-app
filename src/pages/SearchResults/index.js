import React, { useCallback, useEffect } from "react";
import "./styles.css";
import GifList from "../../componets/GifList";
import Header from "../../componets/Header";
import useGifsSearch from "../../hooks/useGifsSearch";
import useNearScrean from "../../hooks/useNearScreen";
import debounce from 'just-debounce-it'

export function SearchResults({ params }) {
  const { setPage } = useGifsSearch(params.keyword);
  const {isNearScreen, elementOfObserver } = useNearScrean({once: false})
 
  const debounceHandleNextPage = useCallback(debounce(
    () => setPage((prePage) => prePage + 1), 500
  ),[]) 

  useEffect(function () {
    if (isNearScreen) debounceHandleNextPage()
  },[debounceHandleNextPage,isNearScreen])


  return (
    <div className="wrapSearchResults">
      <Header />
      <GifList keyword={params.keyword} />
      <div ref={elementOfObserver}/>
    </div>
  );
}

export default SearchResults;