import React, {useState} from "react";
import { Outlet, Link } from "react-router-dom";

export default function chooseDifficulty(){

    return(
        <>
            <div className="page-top">
                <h1 className="title" id="title-main">Choose Difficulty</h1>

            </div>

            <div className="page-bottom">
                <Link to="/EasyMode"><button className="button-default">Easy</button></Link>
                <Link to="/HardMode"><button className="button-default">Hard</button></Link>
                <Link to="/InsaneMode"><button className="button-default">Insane</button></Link>

                <Link to="/"><button id="back-btn" className="button-default">Back</button></Link>

            </div>
        </>
    )
}
