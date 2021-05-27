import React from "react";
import "./styles.css";
import GifList from "../../componets/GifList";
import { URL_API_TRENDING } from "../../services/settings";
import Header from "../../componets/Header";
import TreandingTerms from "../../componets/TrendingSearches";

export function Home() {
  return (
    <>
      <Header />
      <div className="wrpaHome">
        <GifList title="trending" url={URL_API_TRENDING} />
        <TreandingTerms />
      </div>
    </>
  );
}

export default Home;
