import axios from "axios";
import * as R from 'ramda'

// gePokemonEntries :: -> Promise
export const pokedexMock = JSON.parse(`{
  "id": 2,
  "name": "kanto",
  "is_main_series": true,
  "descriptions": [
    {
      "description": "Rot/Blau/Gelb Kanto Dex",
      "language": {
        "name": "de",
        "url": "https://pokeapi.co/api/v2/language/6/"
      }
    }
  ],
  "names": [
    {
      "name": "Kanto",
      "language": {
        "name": "de",
        "url": "https://pokeapi.co/api/v2/language/6/"
      }
    }
  ],
  "pokemon_entries": [
    {
      "entry_number": 1,
      "pokemon_species": {
        "name": "bulbasaur",
        "url": "https://pokeapi.co/api/v2/pokemon-species/1/"
      }
    },
    {
      "entry_number": 2,
      "pokemon_species": {
        "name": "ivysaur",
        "url": "https://pokeapi.co/api/v2/pokemon-species/2/"
      }
    },
    {
      "entry_number": 3,
      "pokemon_species": {
        "name": "venusaur",
        "url": "https://pokeapi.co/api/v2/pokemon-species/3/"
      }
    }
  ],
  "region": {
    "name": "kanto",
    "url": "https://pokeapi.co/api/v2/region/1/"
  },
  "version_groups": [
    {
      "name": "red-blue",
      "url": "https://pokeapi.co/api/v2/version-group/1/"
    }
  ]
}`)

export const isNilOrEmpty = R.anyPass([R.isNil, R.isEmpty]);

export const getPokedex = () => {
    return axios.get('https://pokeapi.co/api/v2/pokedex/2')
}

export const getMockPokedex = () => {
    return Promise.resolve({data: pokedexMock})
}

// gePokemonEntries :: Object(pokedex) -> Array(pokemon_entrie)
export const gePokemonEntries = (pokedex) => {
    return isNilOrEmpty(pokedex) ? [] : R.prop('pokemon_entries', pokedex)
}

// gePokemonEntries :: Object(pokemon_entrie) -> String
export const gePokemonName = (pokemon_entrie) => {
    return R.path(['pokemon_species','name'], pokemon_entrie)
}