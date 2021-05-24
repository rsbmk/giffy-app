import React from "react";
import { Link } from "wouter";
import "./styles.css";

export function Gif({ title, url, id }) {
  return (
    <Link to={`/gifs/detail/${id}`}>
      <div className="wrapImgGif">
        <img className="imgGif" loading="lazy" src={url} alt={title} />
      </div>
    </Link>
  );
}
