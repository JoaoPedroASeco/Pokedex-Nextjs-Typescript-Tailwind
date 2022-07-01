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
      className="flex flex-wrap justify-center w-full h-full xl:max-h-[680px] overflow-auto border-2 rounded-2xl mt-6 pt-4"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {searchedPokemons?.map(pokemon => (
        <motion.li
          key={pokemon.id}
          className="xl:min-w-[420px] h-[493px]  m-2"
          variants={item}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href={`/pokemon/${pokemon.id}`}>
            <a className={`flex w-full h-full flex-col justify-between items-center rounded-3xl ${pokemon.types[0].type.name}`}>

              <div className="flex justify-center items-end h-[80%] w-[96.5%] mt-[2%] bg-white rounded-t-2xl relative">
                <span className="absolute top-[5%] right-[5%] uppercase tracking-wider text-[1.75rem]">
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

              <div className="flex flex-1 w-full items-center justify-center text-white capitalize text-[2rem] tracking-wider">
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