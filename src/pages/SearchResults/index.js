import React, { useCallback, useEffect } from "react";
import "./styles.css";

import useGifsSearch from "hooks/useGifsSearch";
import useNearScrean from "hooks/useNearScreen";

import debounce from "just-debounce-it";
import { Helmet } from "react-helmet";

const GifList = React.lazy(() => import("componets/GifList"));
const Header = React.lazy(() => import("componets/Header")) ;

export function SearchResults({ params }) {

  const {keyword, rating, language} = params

  const { gifs, loading, setPage } = useGifsSearch(keyword, rating, language);
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
        <title>Results of {decodeURI(keyword)}</title>
        <meta name="description" content={`This page is show the results on search ${decodeURI(keyword)}`} /> 
      </Helmet>
      <Header />
      <GifList keyword={keyword} gifList={gifs} loading={loading} />
      <div ref={elementOfObserver}/>
    </div>
  );
}

export default React.memo(SearchResults, (preProps, nextProps) => {
return preProps.params.keyword === nextProps.params.keyword && preProps.params.rating === nextProps.params.rating
});
