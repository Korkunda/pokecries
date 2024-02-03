import React, {useState, useEffect} from "react"
import { Link, useNavigate, useLocation } from "react-router-dom";
import Options from "./Options.js"




export default function GameOver(){
    const navigate = useNavigate()
    const location = useLocation();
    const { score, gameMode } = location.state || {};

    const [username, setUsername] = useState("");

    function recordScore(username, score) {
        const existingLeaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
        
        const newEntry = { Username: username, Score: score };
        const updatedLeaderboard = [...existingLeaderboard, newEntry];
        
        localStorage.setItem('leaderboard', JSON.stringify(updatedLeaderboard));
    }

    function handleSubmit(event) {
        event.preventDefault();
        recordScore(username, score); 
        navigate("/Leaderboard");
    }

    function handleTryAgain() {
        const state = {
            easy: { numOptions: 4, numLives: 3 },
            hard: { numOptions: 16, numLives: 1 },
            insane: { numOptions: 32, numLives: 0 }
        }[gameMode] || {};

        navigate("/GuessTheCry", { state });
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
