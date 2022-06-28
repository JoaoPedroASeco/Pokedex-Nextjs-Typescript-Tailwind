import Head from "next/head"
import { PokemonProps } from "../../pages/pokemon/[slug]"

export const PokemonTemplate = ({ pokemon }: PokemonProps) => {
  console.log(pokemon)
  
  return (
    <>
      <Head>
        <title>{ pokemon.name }</title>
      </Head>

      <div>
        {pokemon.name}
      </div>
    </>
  )
}