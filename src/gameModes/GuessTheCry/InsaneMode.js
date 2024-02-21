import React from "react";
import GuessTheCry from "./GuessTheCry";

export default function InsaneMode(){
    return(
        <GuessTheCry
            numPokemon={721}
            numOptions={32}
            numLives={0}
            gameMode="insane"
            leaderboard={"leaderboard_insane"}
        />
    )
}
