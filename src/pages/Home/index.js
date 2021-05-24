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
    </div>
  );
}

export default Home;
