import Head from "next/head"
import { HomeHeader } from "../Organism/Home/Header"
import { PokemonList } from "../Organism/Home/PokemonList"

export const HomeTemplate = () => {
  return (
    <>
      <Head>
        <title>Pokedex</title>
      </Head>

      <div className="flex justify-center items-center w-screen h-screen">
        <div className="flex justify-center items-center w-[30%] h-[100%] p-[1%] bg-white rounded-2xl">
          <div className="flex flex-col bg-zinc-200 w-full h-full rounded-2xl">
            <HomeHeader />

            <PokemonList />
          </div>
        </div>
      </div>
    </>
  )
}