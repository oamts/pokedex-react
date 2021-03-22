import axios from "axios";
import * as R from 'ramda'

// gePokemonEntries :: -> Promise
export const getPokedex = () => {
    return axios.get('https://pokeapi.co/api/v2/pokedex/2')
}

// gePokemonEntries :: Object(pokedex) -> Array(pokemon_entrie)
export const gePokemonEntries = (pokedex) => {
    return R.isNil(pokedex) ? [] : R.prop('pokemon_entries', pokedex)
}

// gePokemonEntries :: Object(pokemon_entrie) -> String
export const gePokemonName = (pokemon_entrie) => {
    return R.path(['pokemon_species','name'], pokemon_entrie)
}