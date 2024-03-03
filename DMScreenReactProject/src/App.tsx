import PageHeaderBox from "./PageHeaderBox";
import Box from "./box";
import PopUp from "./popUpText";
import './App.css';



function App() {
  return (
    <>
    <div className="GridWrap">
        <PageHeaderBox/>
        <div className="b square">
          <h2> Conditions </h2>
          <div className="conditionFlex">
          <PopUp textContent="A deafened creature cannot hear and automatically fails any ability check that requires hearing." 
          buttonString="Deafened"
          header="Deafened"
          />
          <PopUp textContent="A blinded creature cannot see and automatically fails any ability check that requires sight. Attack rolls against the creature have advantage, and the creatures attack rolls have disadvantage." 
          buttonString="Blinded"
          header="Blinded"
          />
          <PopUp textContent="A charmed creature cannnot attack the charmer or target the charmer with harmful abilities or magical effects. The charmer has advantage on any ability check to interact socially with the creature." 
          buttonString="Charmed"
          header="Charmed"
          />
          <PopUp textContent="A frightened creature has disadvantage on ability checks and attack rolls while the source of its fear is within line of sight. The creature can’t willingly move closer to the source of its fear." 
          buttonString="Frightened"
          header="Frightened"
          />
          </div>
          
        </div>
        

        <Box textContent="DC Guide" classString="c square"></Box>
        <Box textContent="Rabdom Tavern" classString="d square"></Box>
        <Box textContent="Random Encounter" classString="e square"></Box>
        <Box textContent="Random Loot Table" classString="f square"></Box>
        <Box textContent="Random NPC" classString="g square"></Box> 
    </div>
    </>
  );
}

export default App;