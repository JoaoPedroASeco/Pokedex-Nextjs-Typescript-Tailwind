import axios from "axios"
import { Spinner } from "phosphor-react"
import { useContext, useState } from "react"
import { HomeContext, pokemonArrayProps } from "../../../context/HomeContext"
import { motion } from 'framer-motion'

export const LoadMoreButton = () => {
  const { pokemons, nextPokemons, setNextPokemons, setPokemons} = useContext(HomeContext)
  const [isLoadingMore, setIsLoadingMore] = useState(false)

  const handleLoadMore = async () => {
    setIsLoadingMore(true)
    const { data } = await axios.get(nextPokemons)

    const pokemonArray = await Promise.all(data.results.map(async ({ url }: pokemonArrayProps) => {
      const { data } = await axios.get(url)
  
      return data
    }))

    const newPokemonArray = pokemons.concat(pokemonArray)

    setTimeout(() => {
      setPokemons(newPokemonArray)
      setNextPokemons(data.next)
      setIsLoadingMore(false)
    }, 500)
  }

  return (
    <div className="flex">
      <motion.button
        whileTap={{ scale: 0.99 }}
        className="flex bg-[#78A6B5] text-white text-xl tracking-wider uppercase hover:brightness-95 w-full xl:py-6 lg:py-5 md:py-4 sm:py-3 py-3 mt-6 rounded-2xl justify-center items-center"
        onClick={() => handleLoadMore()}
      >
        {isLoadingMore ? <><Spinner className="animate-spin h-8 w-8" /> <span className="pl-5">Loading...</span> </> : 'Load More'}
      </motion.button>
    </div>
  )
}