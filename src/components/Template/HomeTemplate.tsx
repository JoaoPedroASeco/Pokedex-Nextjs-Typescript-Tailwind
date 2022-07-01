import { HomeContext, pokemonArrayProps } from "../../context/HomeContext"
import { PokemonList } from "../Organism/Home/PokemonList"
import { HomeHeader } from "../Organism/Home/Header"
import { useContext, useEffect } from "react"
import Head from "next/head"
import axios from "axios"

export const HomeTemplate = () => {
  const { setNextPokemons, setPokemons} = useContext(HomeContext)

  useEffect(() => {
    const fetchPokemons = async () => {
      const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=12')

      const pokemonArray = await Promise.all(data.results.map(async ({ url }: pokemonArrayProps) => {
        const { data } = await axios.get(url)
    
        return data
      }))

      setPokemons(pokemonArray)
      setNextPokemons(data.next)
    }

    fetchPokemons()
  }, [])

  return (
    <>
      <Head>
        <title>Pokedex</title>
      </Head>

      <div className="flex justify-center items-center w-screen h-screen">
        <div className="flex justify-center items-center bg-white rounded-3xl p-[1%] w-[100%] h-[100%]">
          <div className="flex flex-col bg-zinc-100 w-full h-full rounded-3xl p-[2%]">
            <HomeHeader />

            <PokemonList />
          </div>
        </div>
      </div>
    </>
  )
}