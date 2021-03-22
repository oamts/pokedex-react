import React from 'react';
import './Pokedex.scss';
import {gePokemonEntries, gePokemonName, getPokedex} from "./functions";
import * as R from 'ramda'

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
            searchTerm: '',
        }
        this.handleChangeSearch = this.handleChangeSearch.bind(this)
    }

    componentDidMount() {
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

    handleChangeSearch(event) {
        this.setState({searchTerm: event.target.value});
    }

    render() {
        const pokemon_entries = gePokemonEntries(this.state.pokedex)
        const pokemon_entries_search = pokemon_entries
            .filter( pokemon => gePokemonName(pokemon).includes(this.state.searchTerm));

        return (
             <div>
                 pokedex
                 <div className="search">
                     <input type="text" value={this.state.searchTerm} onChange={this.handleChangeSearch} />
                 </div>
                 <div className="container">
                     {R.map((pokemon) =>  {
                          return <PokemonBlock key={gePokemonName(pokemon)} pokemon={pokemon}/>
                     }, pokemon_entries_search)}
                 </div>
             </div>

         )
    }
}

export default Pokedex

