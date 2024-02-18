import React, {useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom";
import Options from "./Options.js"



export default function GuessTheCry({numOptions, numLives, gameMode, leaderboard}){
    
    //NAVIGATION
    const navigate = useNavigate()

    //SET GAME
    let [game, setGame] = useState({
        status: null, lives: null, guesses: 0, options: {currentOptions: [], correctAnswer: {pokemon: null, audio: null}}
    })

    let audioBtn = require(`../../icons/audioBtn.png`)

    //-----------------GET ALL POKEMON------------------//
    const [allPokemon, setAllPokemon] = useState([])

    useEffect(()=> {
        // const controller = new AbortController()
        async function getAllPokemon(dexLimit){
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${dexLimit}`)/*, {signal: controller.signal})*/
            const pokemonData = await res.json()
            setAllPokemon(
                pokemonData.results.map((pokemon, index) => ({id: index + 1, name: pokemon.name}))
            )  
        } getAllPokemon(721)
        // return ()=> controller.abort()
    },[])
    
    //----------------GENERATE GAME-------------------//
    function generateOptions(totalOptions){
        let pokemonArray = allPokemon.map(mon => mon) 
        let optionsArray = []

        let randomOption = Math.floor(Math.random() * pokemonArray.length) 
        let foundOption = pokemonArray[randomOption]
        
        //generate all options
        while(optionsArray.length<totalOptions){
            let randomOption = Math.floor(Math.random() * pokemonArray.length) 
            let foundOption = pokemonArray[randomOption]
            
            optionsArray.push(foundOption) 
            pokemonArray = pokemonArray.filter(mon => mon !== foundOption)
        }  

        let answerNumber = Math.floor(Math.random()* totalOptions)
        let correctAnswer = optionsArray[answerNumber]
        console.log(correctAnswer)

        let audio = new Audio(require(`../../pokecries/${correctAnswer.id}.ogg`))
            audio.volume = 0.1

        setGame(prevGame => ({...prevGame, 
            options: {
                currentOptions: optionsArray,
                correctAnswer: {
                    pokemon: correctAnswer,
                    audio: audio
                }
        }}))
    }

    function renderOptions(totalOptions){
        return <div className="divOptions">{totalOptions.map(option => <Options checkAnswer={checkAnswer} option={option}/>)}</div>
    }

    function startGame(){
        setGame(prevGame => ({...prevGame, guesses: 0, status: "ongoing", lives: numLives}))
        generateOptions(numOptions)
    }

    //---------------GAMEPLAY-------------------//
    function checkAnswer(option){
        if(option === game.options.correctAnswer.pokemon){
            console.log("Correct") 
            setGame(prevGame => ({...prevGame, guesses: prevGame.guesses + 1}))
            generateOptions(numOptions)
            
        }else {
            console.log("Wrong")
            setGame(prevGame => ({...prevGame, lives: prevGame.lives - 1, guesses: prevGame.guesses + 0}))
            if(game.lives === 0){setGame(prevGame => ({...prevGame, status: "lost"})); console.log("porrada") }
            console.log(game.status)
        }
    }

    //GAME OVER
    useEffect(() => {
        if (game.status === "lost") {
            navigate("/GameOver", { state: { score: game.guesses, gameMode: gameMode, leaderboard: leaderboard } });
        }
        console.log("guesses: " + game.guesses)
    }, [game]);

    return(
        <>
            <div className="page-top">
                <div className="audioPlayer">
                    {game.status === "ongoing" ? <h1 className="title-round">Guesses: {game.guesses}</h1> : null}
                
                    {game.status === "ongoing" ? <button className="title-round" id="audio-btn" onClick={()=> game.options.correctAnswer.audio.play()}>
                        {<img className="audio-icon" src={audioBtn} alt="audioBtn"/>}
                    </button> : null}

                </div>

                <div>
                    {game.status === "ongoing" ? <h1 className="title-round">Lives: {game.lives}</h1> : null}
                </div>

            </div>
            <div className="mid">
                {game.status === null ? <button className="button-default" onClick={()=> startGame()}>START</button> : renderOptions(game.options.currentOptions)}
                
                <div className="row" >
                    <Link to="/ChooseDifficulty"><button className="button-default">Back</button></Link>

                </div>
            </div>
            <div className="page-bottom">
               
            </div>
        </>
    )
}