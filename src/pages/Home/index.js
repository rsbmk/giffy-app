import React from "react";
import "./styles.css";
import GifList from "../../componets/GifList";
import Header from "../../componets/Header";
import TreandingTerms from "../../componets/TrendingSearches";

export function Home() {
  return (
    <div>
      <Header />
      <div className="wrpaHome">
        <GifList />
        <TreandingTerms />
      </div>
    </div>
  );
}

export default Home;
