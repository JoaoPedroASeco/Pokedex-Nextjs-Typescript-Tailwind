import Head from "next/head"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "phosphor-react"
import { PokemonProps } from "../../pages/pokemon/[slug]"
import Image from "next/image"

export const PokemonTemplate = ({ pokemon, pokemonDescription }: PokemonProps) => {
  return (
    <>
      <Head>
        <title>{pokemon.name}</title>
      </Head>

      <main className={`flex flex-col w-screen h-screen justify-between items-center relative ${pokemon.types[0].type.name}`}>

        {/* Background absolute Poke-ball */}
        <div className="absolute top-0 right-0 w-[40%] z-0">
          <svg viewBox="0 0 206 199" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.1">
              <path d="M127.762 104.081C127.762 117.756 116.676 128.842 103 128.842C89.3244 128.842 78.2381 117.756 78.2381 104.081C78.2381 90.4049 89.3244 79.3187 103 79.3187C116.676 79.3187 127.762 90.4049 127.762 104.081Z" fill="white" />
              <path d="M103 208.081C155.393 208.081 198.738 169.338 205.947 118.938H145.035C138.917 136.249 122.407 148.652 103 148.652C83.5933 148.652 67.0835 136.249 60.9648 118.938H0.0532055C7.26233 169.338 50.6067 208.081 103 208.081ZM60.9648 89.2234H0.0532055C7.26233 38.8236 50.6067 0.0805664 103 0.0805664C155.393 0.0805664 198.738 38.8236 205.947 89.2234H145.035C138.917 71.912 122.407 59.5091 103 59.5091C83.5933 59.5091 67.0835 71.912 60.9648 89.2234ZM127.762 104.081C127.762 117.756 116.676 128.842 103 128.842C89.3244 128.842 78.2381 117.756 78.2381 104.081C78.2381 90.4049 89.3244 79.3187 103 79.3187C116.676 79.3187 127.762 90.4049 127.762 104.081Z" fill="white" />
            </g>
          </svg>
        </div>

        {/* Pokemon Header */}
        <div className="flex max-w-screen-2xl w-full justify-between h-[10%] z-[999]">
          <div className="flex items-center">
            <Link href='/'>
              <a className="text-white">
                <ArrowLeft className="w-[4rem] h-[4rem]" />
              </a>
            </Link>

            <h1 className="text-white capitalize text-[3.5rem] pl-24">
              {pokemon.name}
            </h1>
          </div>

          <span className=" flex uppercase tracking-wider text-[3rem] text-white items-center justify-center">

            {
              pokemon.id < 10 ? `#00${pokemon.id}` : '' ||
                pokemon.id < 100 && pokemon.id >= 10 ? `#0${pokemon.id}` : '' ||
                  pokemon.id >= 100 ? `#${pokemon.id}` : ''
            }
          </span>
        </div>

        {/* Pokemon Body */}
        <strong className="flex flex-row desktop-4:flex-col justify-center pt-6 items-center bg-white w-[97%] h-[60%] rounded-t-3xl z-[9]">
          {/* Pokemon Image */}
          <div className="relative h-full w-[60%] z-0">
            <div className="absolute desktop-1:w-[45rem] desktop-1:h-[45rem] desktop-2:w-[40rem] desktop-2:h-[40rem] desktop-3:w-[36rem] desktop-3:h-[36rem] desktop-4:w-[30rem] desktop-4:h-[30rem] left-[15%] bottom-[5%] z-[9]">
              <Image
                src={pokemon.sprites.other["official-artwork"].front_default}
                objectFit="fill"
                layout="fill"
              />
            </div>
          </div>


          <div className="flex flex-col w-full h-full max-w-screen-lg items-center justify-start">
            {/* Pokemon Types */}
            <div className="flex w-full justify-around mb-6">
                <Link href={`/pokemon/${pokemon.id <= 1 ? pokemon.id : pokemon.id - 1}`}>
                  <a className="flex items-center ">
                    <ArrowLeft />
                    <span className="ml-4">Previews</span>
                  </a>
                </Link>

              <div className="flex">
                {pokemon.types.map(type => (
                  <span key={type.type.name} className={`${type.type.name} px-8 py-[0.675rem] rounded-full mx-2`}>
                    <p className="text-white capitalize tracking-wider">
                      {type.type.name}
                    </p>
                  </span>
                ))}
              </div>


                <Link href={`/pokemon/${pokemon.id + 1}`}>
                  <a className="flex items-center">
                    <span className="mr-4">Next</span>
                    <ArrowRight />
                  </a>
                </Link>
            </div>

            {/* Pokemon About */}
            <span className="flex w-full justify-center items-center text-xl">
              About
            </span>

            {/* Pokemon Weight, Height and Moves */}
            <div className="flex w-full items-center justify-center text-zinc-700 my-6 font-normal">

              <div className="flex flex-col items-center justify-between h-full px-12">
                <span className="flex">
                  <svg width="30" height="30" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.5 2.08057H12.4747C11.5609 0.873691 10.1272 0.0805664 8.5 0.0805664C6.87281 0.0805664 5.43906 0.873691 4.52531 2.08057H2.5C1.39719 2.08057 0.5 2.97775 0.5 4.08057L0.5 14.0806C0.5 15.1834 1.39719 16.0806 2.5 16.0806H14.5C15.6028 16.0806 16.5 15.1834 16.5 14.0806V4.08057C16.5 2.97775 15.6028 2.08057 14.5 2.08057ZM8.5 1.08057C10.7091 1.08057 12.5 2.8715 12.5 5.08057C12.5 7.28963 10.7091 9.08057 8.5 9.08057C6.29094 9.08057 4.5 7.28963 4.5 5.08057C4.5 2.8715 6.29094 1.08057 8.5 1.08057ZM15.5 14.0806C15.5 14.6328 15.0522 15.0806 14.5 15.0806H2.5C1.94781 15.0806 1.5 14.6328 1.5 14.0806L1.5 4.08057C1.5 3.52838 1.94781 3.08057 2.5 3.08057H3.92375C3.65437 3.694 3.5 4.36869 3.5 5.08057C3.5 7.83744 5.74312 10.0806 8.5 10.0806C11.2569 10.0806 13.5 7.83744 13.5 5.08057C13.5 4.36869 13.3456 3.694 13.0762 3.08057H14.5C15.0522 3.08057 15.5 3.52838 15.5 4.08057V14.0806ZM8.5 8.08057C9.32719 8.08057 10 7.40775 10 6.58057C10 6.14557 9.81094 5.75682 9.51437 5.48275L10.4594 3.27744C10.5681 3.024 10.4506 2.72994 10.1966 2.62119C9.94406 2.51244 9.64906 2.62963 9.54031 2.884L8.59469 5.09025C7.48656 5.01807 7 5.97588 7 6.58057C7 7.40775 7.67281 8.08057 8.5 8.08057ZM8.5 6.08057C8.77625 6.08057 9 6.30432 9 6.58057C9 6.85682 8.77625 7.08057 8.5 7.08057C8.22375 7.08057 8 6.85682 8 6.58057C8 6.30432 8.22375 6.08057 8.5 6.08057Z" fill="#212121" />
                  </svg>

                  <p className="pl-3 text-xl">
                    {(pokemon.weight / 10 % 2 === 0 ? `${pokemon.weight / 10},0` : pokemon.weight / 10).toString().replace('.', ',')}kg
                  </p>
                </span>

                <p className="text-zinc-400 text-lg">
                  Weight
                </p>
              </div>


              <div className="flex flex-col items-center justify-between h-full px-12 border-x-2 border-zinc-300">
                <span className="flex">
                  <svg width="20" height="30" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 0.0805664L1.5 0.0805664C0.947812 0.0805664 0.5 0.528379 0.5 1.08057L0.5 15.0806C0.5 15.6328 0.947812 16.0806 1.5 16.0806H7.5C8.05219 16.0806 8.5 15.6328 8.5 15.0806V1.08057C8.5 0.528379 8.05219 0.0805664 7.5 0.0805664ZM1.5 15.0806L1.5 1.08057L7.5 1.08057V3.08057H5.75C5.61187 3.08057 5.5 3.19244 5.5 3.33057V3.83057C5.5 3.96869 5.61187 4.08057 5.75 4.08057H7.5V6.08057H5.75C5.61187 6.08057 5.5 6.19244 5.5 6.33057V6.83057C5.5 6.96869 5.61187 7.08057 5.75 7.08057H7.5L7.5 9.08057H5.75C5.61187 9.08057 5.5 9.19244 5.5 9.33057V9.83057C5.5 9.96869 5.61187 10.0806 5.75 10.0806H7.5V12.0806H5.75C5.61187 12.0806 5.5 12.1924 5.5 12.3306V12.8306C5.5 12.9687 5.61187 13.0806 5.75 13.0806H7.5V15.0806H1.5Z" fill="#212121" />
                  </svg>

                  <p className="pl-3 text-xl">
                    {(pokemon.height / 10).toString().replace('.', ',')}m
                  </p>
                </span>

                <p className="text-zinc-400 text-lg">
                  Height
                </p>
              </div>


              <div className="flex flex-col items-center px-12">
                <span className="text-xl">{pokemon.moves[0].move.name}</span>
                <span className="text-xl">{pokemon.moves[1].move.name}</span>
                <p className="text-zinc-400 pt-1 text-lg">Moves</p>
              </div>
            </div>

            {/* Pokemon flavor text */}
            <div className="flex w-full justify-center items-center">
              <p className="text-zinc-700 max-w-[53%] font-normal text-xl tracking-wider text-center">
                {pokemonDescription[0].flavor_text}
              </p>
            </div>

            {/* Pokemon Base Stats */}
            <div className="flex justify-center w-full  mt-6">
              {/* Pokemon Stats Name */}
              <ul className="flex flex-col items-center justify-start border-r-2 border-zinc-300 w-[8%] pr-6">
                {pokemon.stats.map(stats => {
                  return (
                    <li key={stats.stat.name} className="uppercase text-lg">
                      {stats.stat.name === "attack" ? 'atk' : '' ||
                        stats.stat.name === "defense" ? 'def' : '' ||
                          stats.stat.name === "special-attack" ? 'satk' : '' ||
                            stats.stat.name === "special-defense" ? 'sdef' : '' ||
                              stats.stat.name === "speed" ? 'spd' : '' ||
                      stats.stat.name
                      }
                    </li>
                  )
                })}
              </ul>

              {/* Pokemon Stats */}
              <ul className="flex flex-col items-start justify-start w-[40%] h-full ml-6">
                {pokemon.stats.map(stats => (
                  <li key={stats.stat.name} className="flex items-center w-full h-full">
                    <div className="text-zinc-700 text-lg mr-6">
                      {stats.base_stat < 100 ? `0${stats.base_stat}` : stats.base_stat}
                    </div>

                    <div className={`w-full h-3 bg-zinc-300 rounded-3xl`}>
                      <span
                        className={`flex h-full rounded-3xl ${pokemon.types[0].type.name}`}
                        style={{ width: `${stats.base_stat}px` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </strong>
      </main>
    </>
  )
}