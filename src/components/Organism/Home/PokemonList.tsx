import { HomeContext } from "../../../context/HomeContext"
import { useContext } from "react"
import Image from "next/image"
import Link from "next/link"

export const PokemonList = () => {
  const { searchedPokemons } = useContext(HomeContext)

  return (
    <ul>
      {searchedPokemons?.map(pokemon => (
        <li key={pokemon.id}>
          <Link href={`/pokemon/${pokemon.name}`}>
            <a>
              <Image src={pokemon.sprites?.front_default} alt="" width={100} height={100} />
              {pokemon.name}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}