import { HomeTemplate } from "../components/Template/HomeTemplate"
import { GetStaticProps } from "next"
import axios from "axios"
import { useContext } from "react"
import { HomeContext} from "../context/HomeContext"

export interface HomeProps {
  data: {
    next: string
  }
  pokemonArray: [{
    id: number
    name: string
    sprites: {
      front_default: string
    }
  }]
}

export interface PokemonArrayProps {
  url: string
  name: string
}

const Home = ({ data, pokemonArray }: HomeProps) => {
  const { setNextPokemons, setPokemons} = useContext(HomeContext)

  setPokemons(pokemonArray)
  setNextPokemons(data.next)

  return (
    <HomeTemplate />
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=5')

  const pokemonArray = await Promise.all(data.results.map(async ({ url }: PokemonArrayProps) => {
    const { data } = await axios.get(url)

    return data
  }))

  return {
    props: {
      pokemonArray,
      data,
    },
    // revalidate: ??
  }
}