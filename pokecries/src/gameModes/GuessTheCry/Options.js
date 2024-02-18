import React from "react"

export default function Options(props){
    let sprite = require(`../../pokeSpritesOld/${props.option.id}.png`)
    return(
        <button className="choice-btn" onClick={()=> props.checkAnswer(props.option)}>
            <img src={sprite} alt="pokemon"/>
        
        </button>

    )
}


