import { HomeContext } from "../../../context/HomeContext"
import { useContext } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

export const PokemonList = () => {
  const { searchedPokemons } = useContext(HomeContext)

  return (
    <motion.ul
      className="flex flex-wrap justify-center w-full h-full xl:max-h-[680px] overflow-auto border-2 rounded-2xl mt-6 pt-4 scrollbar-thumb-zinc-300 scrollbar-track-zinc-100 scrollbar-thin"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {searchedPokemons?.map(pokemon => (
        <motion.li
          key={pokemon.id}
          className="xl:w-[200px] xl:h-[250px] lg:w-[190px] lg:h-[230px] md:w-[180px] md:h-[210px] sm:w-[160px] sm:h-[190px] w-[94px] h-[120px]  xl:m-2 lg:m-1 md:m-1 sm:m-1 m-[0.15rem]"
          variants={item}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href={`/pokemon/${pokemon.id}`}>
            <a className={`flex w-full h-full flex-col justify-between items-center rounded-2xl ${pokemon.types[0].type.name}`}>

              <div className="flex justify-center items-end h-[80%] w-[96.5%] mt-[2%] bg-white rounded-t-2xl relative">
                <span className="absolute top-[5%] right-[5%] uppercase tracking-wider xl:text-[1.75rem] lg:text-[1.5rem] md:text-[1.25rem] sm:text-[1.15rem] text-[1rem]">
                  {
                    pokemon.id < 10 ? `#00${pokemon.id}` : '' ||
                      pokemon.id < 100 && pokemon.id >= 10 ? `#0${pokemon.id}` : '' ||
                        pokemon.id >= 100 ? `#${pokemon.id}` : ''
                  }
                </span>

                <motion.div
                  whileHover={{ scale: 1.25 }}
                  className="flex h-[80%] w-[80%] relative"
                >
                  <Image
                    src={pokemon.sprites?.other['official-artwork'].front_default}
                    alt={pokemon.name}
                    layout="fill"
                    objectFit="fill"
                  />
                </motion.div>
              </div>

              <div className="flex flex-1 w-full items-center justify-center text-white capitalize xl:text-[1.5rem] lg:text-[1.25rem] md:text-[1.15rem] sm:text-[1rem] text-[0.875rem] tracking-wider">
                {pokemon.name}
              </div>

            </a>
          </Link>
        </motion.li>
      )
      )}
    </motion.ul>
  )
}