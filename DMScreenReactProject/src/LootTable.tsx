import { Children } from 'react';
import React, { useState, useEffect } from 'react';
import './App.css';

const API_ROOT = "https://chartopia.d12dev.com";
const goblinChartId = 51482;
const hobgoblinChartId = 51343;
const orcChartId = 51389;
const skelotonChartId = 51391;
const koboldChartId = 51474;
const guardChartId = 51382;
const banditChartId = 51390;
const gnollChartId = 51392;




function LootTable() {
    
    const [data, setData] = useState(null);
    const [popUp, setPopUp] = useState(false);

    const togglePopUp = () =>{
        setPopUp(!popUp)
    }


    const buttonChartSet = ()  =>{ 
        setData(null);
        const select = document.getElementById("monsters");

        fetch(`${API_ROOT}/api/charts/${select.value}/roll/`
        ,{
            method: 'POST',
            mode: 'cors',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
    },
        })
          .then(response => response.json())
          .then(json => setData(json))
          .catch(error => console.error(error));

          setPopUp(!popUp);
    }

    const parseData = () => {
        if (data != null)
        {
            const stringArray = data.results[0].split("\n");
            const newString = stringArray[1] + ": " + stringArray[4]

            return newString;
        }  
        else
        {
            console.log("Data is null :(");
        }
    }
      

    return(
        <>
            <div className="f square">
                <h2>Loot!</h2>
                <select className='select' id="monsters" name="monster">
                    <option value={goblinChartId}>Goblin</option>
                    <option value={hobgoblinChartId}>Hobgoblin</option>
                    <option value={orcChartId}>Orc</option>
                    <option value={skelotonChartId}>Skeloton</option>
                    <option value={koboldChartId}>Kobold</option>
                    <option value={guardChartId}>Guard</option>
                    <option value={banditChartId}>Bandit</option>
                    <option value={gnollChartId}>Gnoll</option>
                </select>
                <button onClick={buttonChartSet} className='button'>
                    Get Loot!
                </button>

                {popUp && (
                <div className='popUp'>
                <div onClick={togglePopUp} className='overlay'></div>
                <div className='popUpContent'>
                <div className='root'>
                    {data ? <pre>{parseData()}</pre> : 'Loading...'}
                </div>
                    <button className='button'
                    onClick={togglePopUp}> 
                    Close </button>
                </div>
            </div>
            )}
                
            </div>
        </>
    );

}

export default LootTable;