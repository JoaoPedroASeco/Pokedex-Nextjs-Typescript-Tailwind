import { createContext, ReactNode, useEffect, useState } from "react"

export interface pokemonArrayProps {
  url: string,
  id: number
  name: string
  weight: number
  base_experiences: number
  height: number
  stats: {
    base_stat: number
    effort: number
    stat: {
      name: string
      url: string
    }
  }[]
  moves: {
    move: {
      name: string
      url: string
    }
    version_group_details: {
      level_learned_at: number
      move_learn_method: {
        name: string
        url: string
      }
      version_group: {
        name: string
        url: string
      }
    }[]
  }[]
  sprites: {
    other: {
      'official-artwork': {
        front_default: string
      }
    }
  }
  types:{
    slot: number
    type: {
      name: string
      url: string
    }
  }[]
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