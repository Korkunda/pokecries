import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import PokemonSquare from "./PokemonSquare";


export default function Pokedex(){

    const [gen1, setGen1] = useState([])
    const [gen2, setGen2] = useState([])
    const [gen3, setGen3] = useState([])
    const [gen4, setGen4] = useState([])
    const [gen5, setGen5] = useState([])
    const [gen6, setGen6] = useState([])
    const [gen7, setGen7] = useState([])
    const [gen8, setGen8] = useState([])
    const [gen9, setGen9] = useState([])
    const [selectedGen, setSelectedGen] = useState([])
    const [allPokemon, setAllPokemon] = useState([])
    
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=> {
        async function getAllPokemon(dexLimit){
            setIsLoading(true)
            try{
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${dexLimit}`)
                const pokemonData = await res.json()
                setAllPokemon(
                    pokemonData.results.map((pokemon, index) => ({id: index + 1, name: pokemon.name}))
                )  
            } 
            catch(error) {
                console.log(error)
            } 
            finally {
                setIsLoading(false); 
            }
        } getAllPokemon(1025)
    },[])

 
    function generateGenerationsPokemonLists(){
        let pokemonArray = allPokemon.map(mon => mon) 
        //gen1
        let gen1 = []
        for(let i = 1; i<151 + 1; i++){
            let pokemon = pokemonArray[i - 1]
            let cry = require.context('../pokecries', true, /\.ogg$/);
            let audioFile = cry(`./${pokemon.id}.ogg`);
            gen1.push({pokemon: pokemon, audio: audioFile});
        }
        setGen1(gen1)
        //gen2
        let gen2 = []
        for(let i = 152; i<251 + 1; i++){
            let pokemon = pokemonArray[i - 1]
            let cry = require.context('../pokecries', true, /\.ogg$/);
            let audioFile = cry(`./${pokemon.id}.ogg`);
            gen2.push({pokemon: pokemon, audio: audioFile});
        }
        setGen2(gen2)
        //gen3
        let gen3 = []
        for(let i = 252; i<386 + 1; i++){
            let pokemon = pokemonArray[i - 1]
            let cry = require.context('../pokecries', true, /\.ogg$/);
            let audioFile = cry(`./${pokemon.id}.ogg`);
            gen3.push({pokemon: pokemon, audio: audioFile});
        }
        setGen3(gen3)
        //gen4
        let gen4 = []
        for(let i = 387; i<493 + 1; i++){
            let pokemon = pokemonArray[i - 1]
            let cry = require.context('../pokecries', true, /\.ogg$/);
            let audioFile = cry(`./${pokemon.id}.ogg`);
            gen4.push({pokemon: pokemon, audio: audioFile});
        }
        setGen4(gen4)
        //gen5
        let gen5 = []
        for(let i = 494; i<649 + 1; i++){
            let pokemon = pokemonArray[i - 1]
            let cry = require.context('../pokecries', true, /\.ogg$/);
            let audioFile = cry(`./${pokemon.id}.ogg`);
            gen5.push({pokemon: pokemon, audio: audioFile});
        }
        setGen5(gen5)
        //gen6
        let gen6 = []
        for(let i = 650; i<721 + 1; i++){
            let pokemon = pokemonArray[i - 1]
            let cry = require.context('../pokecries', true, /\.ogg$/);
            let audioFile = cry(`./${pokemon.id}.ogg`);
            gen6.push({pokemon: pokemon, audio: audioFile});
        }
        setGen6(gen6)
        //gen7
        let gen7 = []
        for(let i = 722; i<809 + 1; i++){
            let pokemon = pokemonArray[i - 1]
            let cry = require.context('../pokecries', true, /\.ogg$/);
            let audioFile = cry(`./${pokemon.id}.ogg`);
            gen7.push({pokemon: pokemon, audio: audioFile});
        }
        setGen7(gen7)
        //gen8
        let gen8 = []
        for(let i = 810; i<905 + 1; i++){
            let pokemon = pokemonArray[i - 1]
            let cry = require.context('../pokecries', true, /\.ogg$/);
            let audioFile = cry(`./${pokemon.id}.ogg`);
            gen8.push({pokemon: pokemon, audio: audioFile});
        }
        setGen8(gen8)
        //gen9
        let gen9 = []
        for(let i = 906; i<1025 + 1; i++){
            let pokemon = pokemonArray[i - 1]
            let cry = require.context('../pokecries', true, /\.ogg$/);
            let audioFile = cry(`./${pokemon.id}.ogg`);
            gen9.push({pokemon: pokemon, audio: audioFile});
        }
        setGen9(gen9)
    }

    function playSound(file){
        let audio = new Audio(file)
        audio.volume = 0.1
        audio.play()
    }

    function renderPokedex(generation){
        return <div className="divOptions">{generation.map(option => <PokemonSquare key={option.pokemon.id} id={option.pokemon.id} playSound={() => playSound(option.audio)} />)}</div>
    }

    useEffect(() => {
        if (!isLoading) {
            generateGenerationsPokemonLists();
        }
    }, [isLoading, allPokemon]);
   
    return(
        <>
            <div className="page-top">  
                <div className="column"> 
                    <div className="row">
                        <div className="title">
                            <h1 id="title-main">Pokedex</h1>
                            <h4 id="subtitle">Choose the Generation</h4>

                        </div>
                    </div>
                    <div className="row top-options">
                        <button className="button-default thin" onClick={()=>{setSelectedGen(gen1)}}>Gen1</button>
                        <button className="button-default thin" onClick={()=>{setSelectedGen(gen2)}}>Gen2</button>
                        <button className="button-default thin" onClick={()=>{setSelectedGen(gen3)}}>Gen3</button>
                        <button className="button-default thin" onClick={()=>{setSelectedGen(gen4)}}>Gen4</button>
                        <button className="button-default thin" onClick={()=>{setSelectedGen(gen5)}}>Gen5</button>
                        <button className="button-default thin" onClick={()=>{setSelectedGen(gen6)}}>Gen6</button>
                        <button className="button-default thin" onClick={()=>{setSelectedGen(gen7)}}>Gen7</button>
                        <button className="button-default thin" onClick={()=>{setSelectedGen(gen8)}}>Gen8</button>
                        <button className="button-default thin" onClick={()=>{setSelectedGen(gen9)}}>Gen9</button>
                    </div>
                </div>
            </div>
            <div className="mid">
                {renderPokedex(selectedGen)}
            </div>
            <div className="page-bottom">
                <Link to="/"><button className="button-default">Return</button></Link>
            </div>
            
        </>
    )
}
