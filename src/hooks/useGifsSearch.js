import { useContext, useEffect, useState } from "react";
import getGifs from "../services/getGifs";
import GifsContext from "../context/GifsContext";

const INITIAL_PAGE = 0;

export default function useGifsSearch(keyword) {

  const { gifs, setGifs } = useContext(GifsContext);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);
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

  useEffect(
    function () {
      if (page === INITIAL_PAGE) return;

      getGifs(keyword, page).then((nextGifs) => {
        setGifs((preGifs) => preGifs.concat(nextGifs));
      });
    },
    [page, keyword, setGifs]
  );
  return { gifs, loading, setPage };
}
