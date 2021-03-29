import axios from "axios";
import * as R from 'ramda'

// gePokemonEntries :: -> Promise
/*
{
  "id": 1,
  "name": "generation-i",
  "abilities": [],
  "main_region": {
    "name": "kanto",
    "url": "https://pokeapi.co/api/v2/region/1/"
  },
  "moves": [
    {
      "name": "pound",
      "url": "https://pokeapi.co/api/v2/move/1/"
    }
  ],
  "names": [
    {
      "name": "Generation I",
      "language": {
        "name": "de",
        "url": "https://pokeapi.co/api/v2/language/6/"
      }
    }
  ],
  "pokemon_species": [
    {
      "name": "bulbasaur",
      "url": "https://pokeapi.co/api/v2/pokemon-species/1/"
    }
  ],
  "types": [
    {
      "name": "normal",
      "url": "https://pokeapi.co/api/v2/type/1/"
    }
  ],
  "version_groups": [
    {
      "name": "red-blue",
      "url": "https://pokeapi.co/api/v2/version-group/1/"
    }
  ]
}
*/

export const isNilOrEmpty = R.anyPass([R.isNil, R.isEmpty]);

export const getPokedex = () => {
    return axios.get('https://pokeapi.co/api/v2/pokedex/2')
}

// gePokemonEntries :: Object(pokedex) -> Array(pokemon_entrie)
export const gePokemonEntries = (pokedex) => {
    return isNilOrEmpty(pokedex) ? [] : R.prop('pokemon_entries', pokedex)
}

// gePokemonEntries :: Object(pokemon_entrie) -> String
export const gePokemonName = (pokemon_entrie) => {
    return R.path(['pokemon_species','name'], pokemon_entrie)
}