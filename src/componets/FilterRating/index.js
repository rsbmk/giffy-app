import React from "react"
import "./ratingStyle.css"

function FilterRating({rating, updateRating}){

  const handleChangeRating = (evt) => {
    updateRating(evt.target.value)
  }

  return(
    <select 
    className="filterRating"
    onChange={handleChangeRating} 
    value={rating}>
          <option disabled>Rating type</option>
          <option value="g">G</option>
          <option value="pg">Pg</option>
          <option value="pg-13">Pg-13</option>
          <option value="r">R</option>
        </select>
      )
}

export default React.memo(FilterRating)