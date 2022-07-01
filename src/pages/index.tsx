import axios from "axios"
import { GetServerSideProps } from "next"
import { HomeTemplate } from "../components/Template/HomeTemplate"
import { pokemonArrayProps } from "../context/HomeContext"

const Home = ({ pokemon, next }: { pokemon: pokemonArrayProps[], next: string }) => <HomeTemplate pokemon={pokemon} next={next} />

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=12`)

  const pokemonArray = await Promise.all(data.results.map(async ({ url }: pokemonArrayProps) => {
    const { data } = await axios.get(url)

    return data
  }))

  return {props: { pokemon: pokemonArray, next: data.next }}
}