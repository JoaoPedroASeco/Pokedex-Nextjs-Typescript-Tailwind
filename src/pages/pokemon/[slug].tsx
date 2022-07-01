import { PokemonTemplate } from "../../components/Template/PokemonTemplate";
import { GetServerSideProps } from "next";
import axios from "axios";
import { pokemonArrayProps } from "../../context/HomeContext";

export interface PokemonProps {
  pokemon: pokemonArrayProps 
  pokemonDescription: {
    flavor_text: string
    language: {
      name: string
      url: string
    }
  }[]
}

const Pokemon = ({ pokemon, pokemonDescription }: PokemonProps) => <PokemonTemplate pokemon={pokemon} pokemonDescription={pokemonDescription} />

export default Pokemon

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${context.params?.slug}`)
  const flavorTextEntries = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${context.params?.slug}`)
  const pokemonDescription = flavorTextEntries.data.flavor_text_entries

  return {props: { pokemon: data, pokemonDescription }}
}