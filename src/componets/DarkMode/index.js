import React, { useEffect, useState } from "react";
import './darkMode.css';

function DarkMode() {
  const [isDarkMode, setDarkMode] = useState(false);

  const handleClickDarkMode = () => {
    const tagBody = document.body.classList;
    tagBody.toggle("isDarkMode");
    setDarkMode(tagBody.contains("isDarkMode"));
  };

  useEffect(function(){
    const { matches } = window.matchMedia('(prefers-color-scheme: dark)')
    if (matches) {
      setDarkMode(true)
      document.body.classList.add('isDarkMode')
    }
  },[])

  return(
    <>
      <input  checked={isDarkMode}  id='checkbox' type='checkbox'/> 
      <label onClick={handleClickDarkMode} className='switch' htmlFor='checkbox'/>
    </>
  );
}

export default DarkMode;