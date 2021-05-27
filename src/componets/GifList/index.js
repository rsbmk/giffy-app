import React from "react";
import useGifsSearch from "../../hooks/useGifsSearch";
import { Gif } from "../Gif";
import Spinner from "../Spinner";
import "./styles.css";

export default function GifList({ keyword, url, title }) {
  const { gifs, loading } = useGifsSearch(keyword, url);

  return (
    <div className="containerGifList">
      <h2 className="tittleGifList">{decodeURI(title)}</h2>
      <div className="wrpaListOfGifs">
        {loading ? (
          <Spinner />
        ) : (
          gifs.map((gifs) => {
            return (
              <Gif
                key={gifs.id}
                id={gifs.id}
                title={gifs.title}
                url={gifs.url}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
