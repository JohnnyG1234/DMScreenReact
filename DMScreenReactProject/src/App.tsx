import Box from "./box";
import './App.css';

import Conditions from "./conditions";
import DCGuide from "./DCGuide";
import PageHeaderBox from "./PageHeaderBox";
import LootTable from "./LootTable";
import RandomNpc from "./RandomNpc";
import { useEffect } from "react";



function App() {

  useEffect(() => {
      document.title = 'Digital DM Screen'
    },[]);

  return (
    <>
    <div className="GridWrap">
        <PageHeaderBox/>
        <Conditions/>
        <DCGuide/>
        
        <Box textContent="Rabdom Tavern" classString="d square"></Box>
        <Box textContent="Random Encounter" classString="e square"></Box>
        <LootTable/>
        <RandomNpc/>
    </div>
    </>
  );
}

export default App;