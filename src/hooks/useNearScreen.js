import { useEffect, useRef, useState } from "react";

export default function useNearScrean() {
  const [isNearScreen, setShow] = useState(false);
  const elementOfObserver = useRef();

  useEffect(function () {
    const handleOnChange = (entries, observer) => {
      const element = entries[0];
      if (element.isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    };

    const observer = new IntersectionObserver(handleOnChange, {
      rootMargin: "100px",
    });

    observer.observe(elementOfObserver.current);

    return () => observer.disconnect();
  }, []);

  return { isNearScreen, elementOfObserver };
}
