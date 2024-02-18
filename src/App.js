import React from "react";
import PageComponent from "./PageComponent.js";
import ChooseDifficulty from "./ChooseDifficulty.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import EasyMode from "./gameModes/GuessTheCry/EasyMode.js";
import HardMode from "./gameModes/GuessTheCry/HardMode.js";
import InsaneMode from "./gameModes/GuessTheCry/InsaneMode.js";
import LeaderboardOptions from "./LeaderboardOptions.js";
import LeaderboardEasy from "./Leaderboards/LeaderboardEasy.js";
import LeaderboardHard from "./Leaderboards/LeaderboardHard.js";
import LeaderboardInsane from "./Leaderboards/LeaderboardInsane.js";
import GameOver from "./gameModes/GuessTheCry/GameOver.js";
import Pokedex from "./Pokedex/Pokedex.js";

export default function App(){


  return(
    <BrowserRouter>
      <Routes>

          <Route path="/" element={<Layout />}>
            <Route path="/" element={<PageComponent />}/>

            <Route path="/ChooseDifficulty" element={<ChooseDifficulty />}/>
            <Route path="/EasyMode" element={<EasyMode />}/>
            <Route path="/HardMode" element={<HardMode />}/>
            <Route path="/InsaneMode" element={<InsaneMode />}/>
            <Route path="/GameOver" element={<GameOver />}/>

            <Route path="/LeaderboardOptions" element={<LeaderboardOptions />}/>
              <Route path="/LeaderboardEasy" element={<LeaderboardEasy />}/>
              <Route path="/LeaderboardHard" element={<LeaderboardHard />}/>
              <Route path="/LeaderboardInsane" element={<LeaderboardInsane />}/>

            <Route path="/Pokedex" element={<Pokedex />}/>

          </Route>

      
      </Routes>
    </BrowserRouter>
  )
}
