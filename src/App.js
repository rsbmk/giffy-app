import React from "react";
import "./App.css";
import { GifsContextProvider } from "./context/GifsContext";
import { Route } from "wouter";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import DetailGif from "./pages/Detail";

function App() {
  return (
    <GifsContextProvider>
      <Route path="/giffy-app/" component={Home} />
      <Route path="/giffy-app/search/:keyword/:rating/:language" component={SearchResults} />
      <Route path="/giffy-app/detail/gif/:id" component={DetailGif} />
    </GifsContextProvider>
  );
}

export default App;
