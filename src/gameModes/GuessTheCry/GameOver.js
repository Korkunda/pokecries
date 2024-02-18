import React, {useState, useEffect} from "react"
import { Link, useNavigate, useLocation } from "react-router-dom";




export default function GameOver(){
    const navigate = useNavigate();
    const location = useLocation();

    const { score, gameMode, leaderboard } = location.state || {};
    const [username, setUsername] = useState("");

    function recordScore(username, score, leaderboard) {
        const existingLeaderboard = JSON.parse(localStorage.getItem(leaderboard)) || [];
        
        const newEntry = { Username: username, Score: score };
        const updatedLeaderboard = [...existingLeaderboard, newEntry];
        
        localStorage.setItem(leaderboard, JSON.stringify(updatedLeaderboard));
    }

    function handleSubmit(event) {
        event.preventDefault();
        recordScore(username, score, leaderboard); 

        let leaderboardToNavigateTo = ""

        switch(leaderboard){
            case "leaderboard_easy":
                leaderboardToNavigateTo = "LeaderboardEasy"
                break;
            case "leaderboard_hard":
                leaderboardToNavigateTo = "LeaderboardHard"
                break;
            case "leaderboard_insane":
                leaderboardToNavigateTo = "LeaderboardInsane"
                break;
            default:
                console.log(`No Leaderboard found named: ${leaderboard}`)
        }
        navigate(`/${leaderboardToNavigateTo}`);
    }

    function handleTryAgain() {
        const state = {
            easy: navigate("/EasyMode"),
            hard: navigate("/HardMode"),
            insane: navigate("/InsaneMode")
        }[gameMode] || {};
        
    }
    
    return(
        <>
            <div className="page-top">
                <h1 className="gameOver">GAME OVER...</h1> 
                <h1>You had a total of {score} guesses</h1>

            </div>
         
            <div className="page-bottom">
                <div className="column">
                    <form onSubmit={handleSubmit}>
                        <input
                            className="insert-name"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter your name"
                        />
                        <button type="submit" className="button-default">Record Score</button>
                    </form>
                </div>

                <div className="row">
                    <Link to="/ChooseDifficulty"><button className="button-default">Back</button></Link>
                    <button className="button-default" onClick={()=> handleTryAgain()}>Try Again</button>
                    <Link to="/"><button className="button-default">Return</button></Link>
                </div>

            </div>
        </>
    )
}
