import { useContext, useState } from "react"
import { HomeContext } from "../../../context/HomeContext"

export const HomeSearchField = () => {
  const [textLength, setTextLenght] = useState(0)
  const { handleSearchPokemons } = useContext(HomeContext)

  return (
    <div className="flex w-full h-full relative justify-center items-center">
      <input
        className="flex w-full border-2 border-gray-300 rounded-lg xl:h-[3rem] lg:h-[2.875rem] md:h-[2.75rem] sm:h-[2.5rem] h-[2.175rem] text-center text-[1.25rem]"
        onChange={(event) => {
          handleSearchPokemons(event.target.value)
          setTextLenght(event.target.value.length)
        }}
        type="text"
        id="home_search_field"
      />

      <label className={`${textLength > 0 ? 'hidden' : 'flex' } absolute`} htmlFor="home_search_field">
        <span className="flex">
          <svg className="flex w-[1.25rem]" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.44492 7.3262L6.54814 5.42942C6.51221 5.39349 6.46533 5.37474 6.41534 5.37474H6.2091C6.70126 4.80445 6.99968 4.0623 6.99968 3.24984C6.99968 1.45462 5.54507 0 3.74984 0C1.95462 0 0.5 1.45462 0.5 3.24984C0.5 5.04507 1.95462 6.49968 3.74984 6.49968C4.5623 6.49968 5.30445 6.20126 5.87474 5.7091V5.91534C5.87474 5.96533 5.89505 6.01221 5.92942 6.04814L7.8262 7.94492C7.89964 8.01836 8.01838 8.01836 8.09182 7.94492L8.44492 7.59182C8.51836 7.51838 8.51836 7.39964 8.44492 7.3262ZM3.74984 5.74972C2.36866 5.74972 1.24996 4.63102 1.24996 3.24984C1.24996 1.86866 2.36866 0.749963 3.74984 0.749963C5.13102 0.749963 6.24972 1.86866 6.24972 3.24984C6.24972 4.63102 5.13102 5.74972 3.74984 5.74972Z" fill="#666666" />
          </svg>
          <p className="ml-[1rem]">Procurar</p>
        </span>
      </label>
    </div>
  )
}