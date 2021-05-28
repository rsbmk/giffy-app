import { useContext, useEffect, useState } from "react";
import getGifs from "../services/getGifs";
import GifsContext from "../context/GifsContext";

export default function useGifsSearch(keyword) {
  const { gifs, setGifs } = useContext(GifsContext);
  const [loading, setLoading] = useState(false); /* 
  const [page, setPage] = useState(INITIAL_PAGE); */

  useEffect(
    function () {
      setLoading(true);
      getGifs(keyword).then((gifs) => {
        setGifs(gifs);
        setLoading(false);
      });
    },
    [keyword, setGifs]
  );

  /* useEffect(
    function () {
      if (page === INITIAL_PAGE) return;
      getGifs(keyword, page);
    },
    [page]
  ); */

  return { gifs, loading };
}
