import React from "react";
import "./styles.css";
import GifList from "../../componets/GifList";
import { URL_API_TRENDING } from "../../services/settings";
import Header from "../../componets/Header";

export function Home() {
  return (
    <div className="wrpaHome">
      <Header />
      <GifList title="trending" url={URL_API_TRENDING} />
      {/* <GifList title="Drake" keyword="drake" />
      <GifList title="Lebron James" keyword="LebronJames" />
      <GifList title="NBA" keyword="nba" /> */}
    </div>
  );
}

export default Home;
