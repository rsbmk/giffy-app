import React from "react";
import "./styles.css";

import GifList from "componets/GifList";
import Header from "componets/Header";
import TreandingTerms from "componets/TrendingSearches";

import { Helmet } from "react-helmet";


export function Home() {
  return (
    <div>
      <Helmet>
        <title>Giffy | Roberto Bocio Melo</title>
        <meta name="description" content="This App is to search gifs"/>
      </Helmet>
      <Header />
      <div className="wrpaHome">
        <GifList />
        <TreandingTerms />
      </div>
    </div>
  );
}

export default Home;
