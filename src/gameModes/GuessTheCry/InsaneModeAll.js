import React from "react";
import GuessTheCry from "./GuessTheCry";

export default function InsaneModeAll(){
    return(
        <GuessTheCry
            numPokemon={1025}
            numOptions={32}
            numLives={0}
            gameMode="insane_all"
            leaderboard={"leaderboard_all_insane"}
        />
    )
}
