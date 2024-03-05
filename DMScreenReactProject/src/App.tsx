import Box from "./box";
import './App.css';

import Conditions from "./conditions";
import DCGuide from "./DCGuide";
import PageHeaderBox from "./PageHeaderBox";



function App() {
  return (
    <>
    <div className="GridWrap">
        <PageHeaderBox/>
        <Conditions/>
        <DCGuide/>
        
        <Box textContent="Rabdom Tavern" classString="d square"></Box>
        <Box textContent="Random Encounter" classString="e square"></Box>
        <Box textContent="Random Loot Table" classString="f square"></Box>
        <Box textContent="Random NPC" classString="g square"></Box> 
    </div>
    </>
  );
}

export default App;