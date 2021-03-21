import axios from "axios";
import {isNil, path, prop} from "ramda";

// gePokemonEntries :: -> Promise
export const getPokedex = () => {
    return axios.get('https://pokeapi.co/api/v2/pokedex/2')
}

// gePokemonEntries :: Object(pokedex) -> Array(pokemon_entrie)
export const gePokemonEntries = (pokedex) => {
    return isNil(pokedex) ? [] : prop('pokemon_entries', pokedex)
}

// gePokemonEntries :: Object(pokemon_entrie) -> String
export const gePokemonName = (pokemon_entrie) => {
    return path(['pokemon_species','name'], pokemon_entrie)
}