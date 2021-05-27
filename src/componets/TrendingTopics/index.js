import React, { useEffect, useState } from "react";
import getTreandingTerms from "../../services/getTreandingTemrs";
import Category from "../Category";

export default function TreandingTopics() {
  const [trends, setTrends] = useState([]);

  useEffect(function () {
    getTreandingTerms().then(setTrends);
  }, []);

  return <Category options={trends} />;
}
