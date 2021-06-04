import React from "react"
import "./inputStyle.css"

function InputSearch({handleChange}) {
  return <input
        className="inputSearch"
        onChange={handleChange}
        placeholder="Search you favorite gifs ..."
      />
}

export default React.memo(InputSearch)