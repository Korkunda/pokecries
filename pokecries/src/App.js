import React from "react";
import PageComponent from "./PageComponent.js";
import ChooseDifficulty from "./ChooseDifficulty.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import EasyMode from "./gameModes/GuessTheCry/EasyMode.js";
import HardMode from "./gameModes/GuessTheCry/HardMode.js";
import InsaneMode from "./gameModes/GuessTheCry/InsaneMode.js";
import Leaderboard from "./Leaderboard.js";
import GameOver from "./gameModes/GuessTheCry/GameOver.js";

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

            <Route path="/Leaderboard" element={<Leaderboard />}/>
          </Route>

      
      </Routes>
    </BrowserRouter>
  )
}
