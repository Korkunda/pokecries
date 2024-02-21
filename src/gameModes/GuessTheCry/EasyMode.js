import React from "react";
import GuessTheCry from "./GuessTheCry";

export default function EasyMode(){
    return(
        <GuessTheCry
            numPokemon={721}
            numOptions={4}
            numLives={3}
            gameMode="easy"
            leaderboard={"leaderboard_easy"}
        />
    )
}