import {gePokemonEntries, gePokemonName, pokedexMock} from "./functions";

it('get the pokemon entries from pokedex', () => {
    expect(gePokemonEntries(pokedexMock)).toStrictEqual([{
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
    const pokemonEntrie = gePokemonEntries(pokedexMock)[0]

    expect(gePokemonName(pokemonEntrie)).toBe('bulbasaur');
    expect(gePokemonName(null)).toBeUndefined();
    expect(gePokemonName(undefined)).toBeUndefined();
    expect(gePokemonName([])).toBeUndefined();
    expect(gePokemonName({})).toBeUndefined();
})
