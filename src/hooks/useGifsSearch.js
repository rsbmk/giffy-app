import { useContext, useEffect, useState } from "react";
import GifsContext from "../context/GifsContext";
import GetGifs from "../services/getGifs";

const INITIAL_PAGE = 0;

  export default function useGifsSearch(keyword, rating, language) {
  const { gifs, setGifs } = useContext(GifsContext);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);
  useEffect(
    function () {
      setLoading(true);
      GetGifs({
        keyword: keyword,
        rating: rating,
        language: language
      }).then((gifs) => {
        setGifs(gifs);
        setLoading(false);
      });
    },
    [keyword, setGifs, rating,language]
  );

  useEffect(
    function () {
      if (page === INITIAL_PAGE) return;

      GetGifs({
        keyword: keyword,
        page: page,
        rating: rating,
        language:language
      }).then((nextGifs) => {
        setGifs((preGifs) => preGifs.concat(nextGifs));
      });
    },
    [page, keyword, setGifs, rating, language]
  );
  return { gifs, loading, setPage };
}
