import { PokemonTemplate } from "../../components/Template/PokemonTemplate";
import { GetServerSideProps } from "next";
import axios from "axios";

export interface PokemonProps {pokemon: {}}

const Pokemon = ({ pokemon }: PokemonProps) => <PokemonTemplate pokemon={pokemon} />

export default Pokemon

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${context.params?.slug}`)

  return {props: { pokemon: data }}
}