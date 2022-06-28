import { useContext } from "react"
import { HomeContext } from "../../../context/HomeContext"

export const HomeSearchField = () => {
  const { handleSearchPokemons } = useContext(HomeContext)

  return (
    <input
      type="text"
      onChange={(event) => handleSearchPokemons(event.target.value)}
    />
  )
}