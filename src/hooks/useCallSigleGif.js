import { useContext, useEffect, useState } from "react";
/* import getSigleGif from "../services/getSingleGif"; */
import GifsContext from "../context/GifsContext";
import getSigleGif from "../services/getSingleGif";

export default function useCallSigleGif({id}) {

  const { gifs } = useContext(GifsContext);
  const gifFromContext = gifs.find(singleGif => singleGif.id === id )
  
  const [gif, setGif ] = useState(gifFromContext)
  const [loading, setLoading] = useState(false)
  const [IsError, setIsError] = useState(false)
  
  useEffect(function () {
    if (!gif) {
      setLoading(true)
      getSigleGif({id})
      .then(gif => {
        
        setGif(gif)
        
        setLoading(false)
        setIsError(false)
        
      }).catch(() =>{
        
        setLoading(false)
        setIsError(true)
      })
    }
  },[id, gif])
  
  return {gif, loading, IsError}
}
  
