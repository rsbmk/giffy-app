import React from "react";
import "./styles.css";

import GifList from "componets/GifList";
import Header from "componets/Header";
import TreandingTerms from "componets/TrendingSearches";

import { Helmet } from "react-helmet";
import useGifsSearch from "hooks/useGifsSearch";


export function Home() {

 const { gifs, loading } = useGifsSearch()

  return (
    <div>
      <Helmet>
        <title>Giffy | Roberto Bocio Melo</title>
        <meta name="description" content="This App is to search gifs"/>
      </Helmet>
      <Header />
      <div className="wrpaHome">
        <GifList gifList={gifs} loading={loading} />
        <TreandingTerms />
      </div>
    </div>
  );
}

export default Home;
