import React from "react"
import "./languageStyle.css"

function FilterLanguage({updateLanguage, language}) {

const handleChangeLanguage = (evt) =>{
  updateLanguage(evt.target.value)
 }

 return <select 
        className="FilterLanguage"
        onChange={handleChangeLanguage} 
        value={language}>
        <option disabled>Language</option>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="pt">Portuguese</option>
        <option value="it">Italian</option>
        <option value="ja">Japanese</option>
      </select>
}

export default React.memo(FilterLanguage)