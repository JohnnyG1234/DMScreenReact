import PageHeaderBox from "./PageHeaderBox";
import Box from "./box";
import './App.css';



function App() {
  return (
    <div className="GridWrap">
        <PageHeaderBox/>
        <Box textContent="Condition Rules" classString="b square"></Box>
        <Box textContent="DC Guide" classString="c square"></Box>
        <Box textContent="Rabdom Tavern" classString="d square"></Box>
        <Box textContent="Random Encounter" classString="e square"></Box>
        <Box textContent="Random Loot Table" classString="f square"></Box>
        <Box textContent="Random NPC" classString="g square"></Box>
    </div>
  );
}

export default App;