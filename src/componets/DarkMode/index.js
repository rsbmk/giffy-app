import React, { useCallback, useState } from "react";

function DarkMode() {
  const [stateDarkMode, setStateDarkMode] = useState(false);

  const handleClick = useCallback(() => {
    const tagBody = document.body.classList;
    tagBody.toggle("isDarkMode");
    setStateDarkMode(tagBody.contains("isDarkMode"));
  },[]);

  return(
    <div className="wrapDarkMode" onClick={handleClick}>
      {stateDarkMode ? (
        <i className="fas fa-sun" />
      ) : (
        <i className="far fa-moon" />
      )}
      DarkMode
    </div>
  );
}

export default DarkMode;