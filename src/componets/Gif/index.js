import React from "react";
import { Link } from "wouter";
import "./styles.css";

function Gif({ title, url, id }) {
  return (
    <Link to={`/giffy-app/search/detail/gif/${id}`}>
      <div className="wrapImgGif">
        <img className="imgGif" loading="lazy" src={url} alt={title} />
      </div>
    </Link>
  );
}
export default React.memo(Gif);
