import React, { useEffect, useState } from "react";
import getTreandingTerms from "../../services/getTreandingTemrs";
const Category = React.lazy(()=> import("../Category"))

 function TreandingTopics() {
  const [trends, setTrends] = useState([]);

  useEffect(function () {
    getTreandingTerms().then(setTrends);
  }, []);

  return <Category options={trends} />;
}
export default React.memo(TreandingTopics)