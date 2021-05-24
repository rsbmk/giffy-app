import React, { useState } from "react";
import { Link } from "wouter";
import Search from "../Search";
import "./styles.css";

export function Header() {
  const [stateDarkMode, setStateDarkMode] = useState(false);

  const handleClick = (_) => {
    const tagBody = document.body.classList;
    tagBody.toggle("isDarkMode");
    setStateDarkMode(tagBody.contains("isDarkMode"));
  };

  return (
    <div className="containerHeader">
      <div className="wrapTitle-DarkMode">
        <Link className="title" to="/giffy-app/">
          Giffy
        </Link>
        <div className="wrapDarkMode" onClick={handleClick}>
          {stateDarkMode ? (
            <i className="fas fa-sun" />
          ) : (
            <i className="far fa-moon" />
          )}
          DarkMode
        </div>
      </div>
      <Search />
    </div>
  );
}

export default Header;
