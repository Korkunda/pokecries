import React from "react";
import GuessTheCry from "./GuessTheCry";

export default function EasyMode(){
    return(
        <GuessTheCry
            numOptions={32}
            numLives={0}
            gameMode="insane"
        />
    )
}
