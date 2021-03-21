import React from 'react';
import './Pokedex.scss';
import {gePokemonEntries, gePokemonName, getPokedex} from "./functions";
import {map} from "ramda";

function PokemonBlock(props) {
    return (
        <div className="item">
            <img src={`https://img.pokemondb.net/sprites/sword-shield/icon/${gePokemonName(props.pokemon)}.png`} alt="Logo" />
            <p> {gePokemonName(props.pokemon)} </p>
        </div>
    )
}

class Pokedex extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pokedex: null,
        }
        this.loadPokedex();
    }

    loadPokedex(){
        getPokedex().then( response => {
            this.setState({
                pokedex: response.data
            })
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }

    render() {
        const pokemon_entries = gePokemonEntries(this.state.pokedex)

        return (
             <div>
                 pokedex
                 <div className="container">
                     {map((pokemon) =>  {
                          return <PokemonBlock key={gePokemonName(pokemon)} pokemon={pokemon}/>
                     }, pokemon_entries)}
                 </div>
             </div>

         )
    }
}

export default Pokedex

