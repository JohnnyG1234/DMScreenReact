import Box from "./box";
import './App.css';

import Conditions from "./conditions";
import DCGuide from "./DCGuide";
import PageHeaderBox from "./PageHeaderBox";
import LootTable from "./LootTable";



function App() {
  return (
    <>
    <div className="GridWrap">
        <PageHeaderBox/>
        <Conditions/>
        <DCGuide/>
        
        <Box textContent="Rabdom Tavern" classString="d square"></Box>
        <Box textContent="Random Encounter" classString="e square"></Box>
        <LootTable/>
        <Box textContent="Random NPC" classString="g square"></Box> 
    </div>
    </>
  );
}

export default App;