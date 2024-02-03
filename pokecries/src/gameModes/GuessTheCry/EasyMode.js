import React from "react";
import GuessTheCry from "./GuessTheCry";

export default function EasyMode(){
    return(
        <GuessTheCry
            numOptions={4}
            numLives={3}
            gameMode="easy"
        />
    )
}