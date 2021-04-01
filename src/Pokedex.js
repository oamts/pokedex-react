import React, {useEffect, useState} from 'react';
import './Pokedex.scss';
import {gePokemonEntries, gePokemonName, getPokedex} from "./functions";
import * as R from 'ramda'

function PokemonBlock(props) {
    return (
        <div className="item">
            <img src={`https://img.pokemondb.net/sprites/sword-shield/icon/${gePokemonName(props.pokemon)}.png`}
                 alt="Logo"/>
            <p> {gePokemonName(props.pokemon)} </p>
        </div>
    )
}

function Pokedex() {

    const [pokedex, setPokedex] = useState(null)
    const [searchTerm, setSearchTerm] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    function loadPokedex() {
        setIsLoading(true)
        setIsError(false)
        getPokedex().then(response => {
            setPokedex(response.data)
        })
        .catch( erro => {
            console.log(erro)
            setIsError(true)
        })
        .finally( () => {
            setIsLoading(false)
        })
    }

    function handleChangeSearch(event) {
        setSearchTerm(event.target.value)
    }

    useEffect(() => {
        loadPokedex()
    }, [])

    const pokemon_entries = gePokemonEntries(pokedex)
    const pokemon_entries_search = pokemon_entries
        .filter(pokemon => gePokemonName(pokemon).includes(searchTerm))

    return (
        <div>
            pokedex
            <div className="search">
                <input type="text" value={searchTerm} onChange={handleChangeSearch}/>
            </div>
            <div className="container">
                {isError && <div>Something went wrong ...</div>}
                {isLoading ? (
                    <div>Loading ...</div>
                ) : (
                    R.map((pokemon) => {
                        return <PokemonBlock key={gePokemonName(pokemon)} pokemon={pokemon}/>
                    }, pokemon_entries_search)
                )}
            </div>
        </div>
    )
}

export default Pokedex

