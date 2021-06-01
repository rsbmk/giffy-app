import React from "react";
import useGifsSearch from "../../hooks/useGifsSearch";
import Gif from "../Gif";
import Spinner from "../Spinner";
import "./styles.css";

function GifList({ keyword }) {
  const { gifs, loading } = useGifsSearch(keyword);

  return (
    <div className="containerGifList">
      {keyword ? (
        <h2 className="tittleGifList">{decodeURI(keyword)}</h2>
      ) : (
        <h2 className="tittleGifList">
          Trending <i className="fas fa-chart-line"></i>
        </h2>
      )}

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
export default React.memo(GifList);