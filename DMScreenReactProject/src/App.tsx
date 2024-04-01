import { useEffect } from "react";

import Box from "./box";
import './App.css';

import Conditions from "./conditions";
import DCGuide from "./DCGuide";
import PageHeaderBox from "./PageHeaderBox";
import LootTable from "./LootTable";
import RandomNpc from "./RandomNpc";
import RandomTavern from "./randomTavern";




function App() {
  return (
    <>
    <div className="GridWrap">
        <PageHeaderBox/>

        <Conditions/>
        <DCGuide/>
        <RandomTavern/>
        <Box textContent="Random Encounter" classString="e square"></Box>
        <LootTable/>
        <RandomNpc/>
        
    </div>
    </>
  );
}

export default App;