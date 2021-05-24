import { useContext, useEffect, useState } from "react";
import getGifs from "../services/getGifs";
import GifsContext from "../context/GifsContext";

export default function useGifsSearch(keyword = "", url = "") {
  const { gifs, setGifs } = useContext(GifsContext);
  const [loading, setLoading] = useState(false);
  useEffect(
    function () {
      setLoading(true);
      getGifs(keyword, url).then((gifs) => {
        setGifs(gifs);
        setLoading(false);
      });
    },
    [keyword, url, setGifs]
  );

  return { gifs, loading };
}
