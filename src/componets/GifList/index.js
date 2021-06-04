import React from "react";
import "./styles.css";

import Gif from "../Gif";
import Spinner from "../Spinner";

function GifList({ keyword, gifList, loading}) {
  
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
          gifList.map((gifs) => {
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
export default React.memo(GifList, (preProps, nextProps) => {

 return (preProps.gifList === nextProps.gifList && preProps.loading === nextProps.loading)
});