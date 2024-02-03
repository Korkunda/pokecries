import React, {useState} from "react";
import { Outlet, Link } from "react-router-dom";



export default function LeaderboardOptions(){

    return(
        <>
            <div className="page-top">
                <h1 className="title" id="title-main">Leaderboards by Mode</h1>

            </div>

            <div className="column mid">
                <Link to="/LeaderboardEasy"><button className="button-default">Classic: Easy</button></Link>
                <Link to="/LeaderboardHard"><button className="button-default">Classic: Hard</button></Link>
                <Link to="/LeaderboardInsane"><button className="button-default">Classic: Insane</button></Link>
            </div>

            <div className="page-bottom">
                <div className="row" >
                    <Link to="/"><button className="button-default">Return</button></Link>
                </div>
            </div>
        </>
    )
}
