import React, { useContext } from "react";
import Gif from "../../componets/Gif";
import Header from "../../componets/Header";
import GifsContext from "../../context/GifsContext";
import "./style.css";

export default function DetailGif({ params }) {
  const { gifs } = useContext(GifsContext);

  const { title, id, url } = gifs.find((gif) => gif.id === params.id);

  return (
    <div>
      <Header />
      <div className="containerGifDetali">
        <h2 className="titleGifDetail">{title}</h2>
        <Gif title={title} id={id} url={url} />
      </div>
    </div>
  );
}
