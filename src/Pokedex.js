import React, { Component } from 'react'
import PokeCard from './PokeCard'
import './Pokedex.css'

class Pokedex extends Component {

    render(){
        let title;
        if(this.props.isWinner){
            title= <h1 className="Pokedex-winner"> Winning Hand</h1>
        }
        else{
            title= <h1 className="Pokedex-loser">Losing Hand</h1>
        }
        let loop = this.props.pokemon.map( info => (
            <PokeCard id={info.id} name={info.name} type={info.type} exp={info.base_expreance} />
        ))
        return(
            <div className="Pokedex">
            {title}
            <h4> Total Experience: {this.props.exp}</h4>

            <div className="Pokedex-cards"> {loop}</div>
            </div>
        )

    }
}

export default Pokedex;