import React from "react";
import GuessTheCry from "./GuessTheCry";

export default function HardMode(){
    return(
        <GuessTheCry
            numPokemon={721}
            numOptions={16}
            numLives={1}
            gameMode="hard"
            leaderboard={"leaderboard_hard"}
        />
    )
}