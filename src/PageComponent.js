import React, {useState} from "react";
import { Outlet, Link } from "react-router-dom";



export default function PageComponent(){

    return(
        <>
            <div className="page-top">
                <div className="title">
                <h1 id="title-main">Pokémon Cries</h1>
                <h4 id="subtitle">Guess the pokémon by its cry</h4>

                </div>
            </div>

            <div className="page-bottom">
                <Link to="/ChooseDifficulty"><button className="button-default">Play</button></Link>
                <Link to="/LeaderboardOptions"><button className="button-default">Leaderboards</button></Link>
                <Link to="/Pokedex"><button className="button-default">Pokedex</button></Link>
            </div>
            
        </>
    )
}
