import FilterLanguage from "componets/FilterLanguage";
import FilterRating from "componets/FilterRating";
import InputSearch from "componets/InputSearch";
import React, { useCallback } from "react";

import { useLocation } from "wouter";
import { useForm } from "./reducer";
import "./styles.css";


function Search() {
  // eslint-disable-next-line no-unused-vars
  const [location, setLocation] = useLocation();

  /* handle state of inputKeyword and filter Rating with local raducer */
  const {
    keyword,
    rating,
    language,
    updateRating,
    updateKeyword,
    updateLanguage} = useForm ()

  const handleChange = (evt) => {
    updateKeyword(evt.target.value)
  };

  const handleSumbit = useCallback((evt) => {
    evt.preventDefault();
    setLocation(`/giffy-app/search/${keyword}/${rating}/${language}`);
  },[setLocation, keyword, rating,language]);

  return (
    <div className="wrapForm">
      <form
        className="wrapInputSearch"
        onSubmit={handleSumbit}
        >
        
        <button className="button">
          <i className="fas fa-search"></i>
        </button>

        <InputSearch handleChange={handleChange}/>

        <FilterLanguage 
        updateLanguage={updateLanguage}
        language={language} />

        <FilterRating 
        rating={rating} 
        updateRating={updateRating} />
      </form>
    </div>
  );
}
export default React.memo(Search)
