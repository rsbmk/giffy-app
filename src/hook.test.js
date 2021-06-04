import {act, renderHook} from "@testing-library/react-hooks"
import { useForm } from "componets/Search/reducer"

test("should change keyword",()=>{
  const {result} = renderHook(()=>useForm())
  act(() =>{
    result.current.updateKeyword('batman')
    result.current.updateLanguage("es")
    result.current.updateRating("r")
  })
  expect(result.current.keyword).toBe('batman')
  expect(result.current.language).toBe('es')
  expect(result.current.rating).toBe('r')
})
