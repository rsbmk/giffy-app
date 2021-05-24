import React, { useState } from "react";
import { useLocation } from "wouter";
import "./styles.css";

export default function Search() {
  const [keywordInput, setKeywordInput] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [location, setLocation] = useLocation();

  const handleChange = (evt) => {
    setKeywordInput(evt.target.value);
  };
  const handleSumbit = (evt) => {
    evt.preventDefault();
    setLocation(`/giffy-app/gifs/${keywordInput}`);
  };

  return (
    <form
      className="wrapInputSearch"
      onSubmit={handleSumbit}
      value={keywordInput}
    >
      <label>
        <i className="fas fa-search"></i>
      </label>
      <input
        className="inputSearch"
        onChange={handleChange}
        placeholder="Search you favorite gifs ..."
      />
    </form>
  );
}
