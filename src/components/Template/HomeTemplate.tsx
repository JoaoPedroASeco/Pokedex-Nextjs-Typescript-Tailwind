import { HomeContext, pokemonArrayProps } from "../../context/HomeContext"
import { PokemonList } from "../Organism/Home/PokemonList"
import { HomeHeader } from "../Organism/Home/Header"
import { useContext, useEffect } from "react"
import Head from "next/head"

export const HomeTemplate = ({ pokemon, next }: { pokemon: pokemonArrayProps[], next: string }) => {
  const { setNextPokemons, setPokemons} = useContext(HomeContext)

  useEffect(() => {
    setPokemons(pokemon)
    setNextPokemons(next)
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