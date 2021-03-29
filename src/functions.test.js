import {gePokemonEntries, gePokemonName} from "./functions";

const pokedex = JSON.parse(`{
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

it('get the pokemon entries from pokedex', () => {
    expect(gePokemonEntries(pokedex)).toStrictEqual([{
        "entry_number": 1,
        "pokemon_species": {
            "name": "bulbasaur",
            "url": "https://pokeapi.co/api/v2/pokemon-species/1/"
        }
    }])
    expect(gePokemonEntries(null)).toStrictEqual([])
    expect(gePokemonEntries(undefined)).toStrictEqual([])
    expect(gePokemonEntries([])).toStrictEqual([])
    expect(gePokemonEntries({})).toStrictEqual([])
})

it('get the pokemon name', () => {
    const pokemonEntrie = gePokemonEntries(pokedex)[0]

    expect(gePokemonName(pokemonEntrie)).toBe('bulbasaur');
    expect(gePokemonName(null)).toBeUndefined();
    expect(gePokemonName(undefined)).toBeUndefined();
    expect(gePokemonName([])).toBeUndefined();
    expect(gePokemonName({})).toBeUndefined();
})
