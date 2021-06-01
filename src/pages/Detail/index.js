import React from "react";
import "./style.css";

import Gif from "componets/Gif";
import Header from "componets/Header";
import Spinner from "componets/Spinner"

import useCallSigleGif from "hooks/useCallSigleGif";

import { Redirect } from "wouter";
import { Helmet } from "react-helmet"

 function DetailGif({ params }) {
  const {gif, loading, IsError} = useCallSigleGif({id: params.id})

  console.log(gif);

  if (loading){
     return (
     <>
     <Helmet>
       <title>Cargando...</title>
     </Helmet>
       <Spinner/>
     </>
     )
  }

  if (IsError) return <Redirect to={"/giffy-app/"}/>
  if (!gif) return null

  return (
    <div>
      <Helmet>
        <title>{gif.title} | Giffy</title>
      </Helmet>
      <Header />
      <div className="containerGifDetali">
         <h2 className="titleGifDetail">{gif.title}</h2>
        <Gif title={gif.title} id={gif.id} url={gif.url} />
      </div>
    </div>
  );
}

export default React.memo(DetailGif)
