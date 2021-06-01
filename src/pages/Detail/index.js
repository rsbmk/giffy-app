import React from "react";
import Gif from "../../componets/Gif";
import Header from "../../componets/Header";
import useCallSigleGif from "../../hooks/useCallSigleGif";
import Spinner from "../../componets/Spinner"
import "./style.css";
import { Redirect } from "wouter";

export default function DetailGif({ params }) {

const {gif, loading, IsError} = useCallSigleGif({id: params.id})

  if (loading) return <Spinner/>
  if (IsError) return <Redirect to={"/giffy-app/"}/>
  if (!gif) return null

  return (
    <div>
      <Header />
      <div className="containerGifDetali">
         <h2 className="titleGifDetail">{gif.title}</h2>
        <Gif title={gif.title} id={gif.id} url={gif.url} />
      </div>
    </div>
  );
}
