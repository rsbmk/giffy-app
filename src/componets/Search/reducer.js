import { useCallback, useReducer } from "react"

const ACTIONS = {
  UPDATE_KEYWORD: "keyword",
  UPDATE_RATING: "raing",
  UPDATE_LANGUAGE: "lang"
}

const initialState = {
  keyword: '',
  rating: 'g',
  language: 'en'
}

const reducer = (state, action) =>{
  switch (action.type) {

    case ACTIONS.UPDATE_KEYWORD:
      return{
        ...state,
        keyword: action.payload
      }

    case ACTIONS.UPDATE_RATING:
      return{
        ...state,
        rating: action.payload
      }

    case ACTIONS.UPDATE_LANGUAGE:
      return{
        ...state,
        language: action.payload
      }

    default: return state
  }
}



export const useForm = () =>{
    
  const dispatchRating = useCallback((rating)=>{
  dispatch({
        type: ACTIONS.UPDATE_RATING,
        payload: rating})
  },[])

  const dispatchKeyword = useCallback(keyword =>{
  dispatch({
        type: ACTIONS.UPDATE_KEYWORD,
        payload: keyword})
  },[])

  const dispatchLanguage = useCallback((language) =>{
    dispatch({
      type: ACTIONS.UPDATE_LANGUAGE,
      payload: language
    })
  },[])

  const [state, dispatch] = useReducer(reducer, initialState)

  const {keyword, rating, language} = state

  return{
    keyword,
    rating,
    language,
    updateRating: dispatchRating ,
    updateKeyword: dispatchKeyword,
    updateLanguage: dispatchLanguage
  }
}