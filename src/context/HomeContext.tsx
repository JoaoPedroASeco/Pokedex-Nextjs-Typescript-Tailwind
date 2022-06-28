import { createContext, ReactNode, useEffect, useState } from "react"

export interface pokemonArrayProps {
  id: number
  name: string
  sprites: {
    front_default: string
  }
}

export interface HomeContextProps {
  pokemons: pokemonArrayProps[]
  searchedPokemons: pokemonArrayProps[]
  nextPokemons: string
  setPokemons: (pokemons: pokemonArrayProps[]) => void
  setSeachedpokemons: (pokemons: pokemonArrayProps[]) => void
  setNextPokemons: (pokemonNextUrl: string) => void
  handleSearchPokemons: (pokemonSearch: string) => void
}

export interface HomeProviderProps {
  children: ReactNode
}

const initialProps = {
  pokemons: [],
  searchedPokemons: [],
  nextPokemons: '',
  setPokemons: (pokemons: pokemonArrayProps[]) => { },
  setSeachedpokemons: (pokemons: pokemonArrayProps[]) => { },
  setNextPokemons: (pokemonNextUrl: string) => { },
  handleSearchPokemons: (pokemonSearch: string) => { }
}

export const HomeContext = createContext<HomeContextProps>(initialProps)

export const HomeProvider = ({ children }: HomeProviderProps) => {
  const [pokemons, setPokemons] = useState<pokemonArrayProps[]>(initialProps.pokemons)
  const [nextPokemons, setNextPokemons] = useState(initialProps.nextPokemons)
  const [searchedPokemons, setSeachedpokemons] = useState(pokemons)

  useEffect(() => {
    setSeachedpokemons(pokemons)
  }, [pokemons])

  const handleSearchPokemons = (pokemonSearch: string) => {
    const newArray = pokemons.filter(pokemon => pokemon.name.includes(pokemonSearch))
    setSeachedpokemons(newArray)
  }

  return (
    <HomeContext.Provider value={{
      nextPokemons,
      pokemons,
      searchedPokemons,
      setNextPokemons,
      setPokemons,
      setSeachedpokemons,
      handleSearchPokemons,
    }}>
      {children}
    </HomeContext.Provider>
  )
}