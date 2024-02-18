import React from "react"

export default function PokemonSquare({id, playSound}){
    let sprite = require(`../pokeSpritesOld/${id}.png`)
    return(
        <button className="choice-btn" onClick={playSound}>
            <img src={sprite} alt={`pokemon ${id}`} />
        </button>

    )
}


