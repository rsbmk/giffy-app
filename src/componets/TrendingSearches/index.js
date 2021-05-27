import React, { Suspense } from "react";
import useNearScrean from "../../hooks/useNearScreen";
const TreandingTopics = React.lazy(() => import("../TrendingTopics"));

export default function LeazyTrending() {
  const { isNearScreen, elementOfObserver } = useNearScrean();

  return (
    <div ref={elementOfObserver}>
      <Suspense fallback={null}>
        {isNearScreen ? <TreandingTopics /> : null}
      </Suspense>
    </div>
  );
}
