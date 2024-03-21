import { Children } from 'react';
import React, { useState, useEffect } from 'react';
import './App.css';

const API_ROOT = "https://chartopia.d12dev.com";
const goblinChartId = 51482;
const hobgoblinChartId = 51343;
const orcChartId = 51389;
const skelotonChartId = 51391;
const koboldChartId = 51474;



function LootTable() {
    const [data, setData] = useState(null);
    const [chartId, setChartId] = useState(51482);
    const [popUp, setPopUp] = useState(false);

    const togglePopUp = () =>{
        setPopUp(!popUp)
    }


    const buttonChartSet = () =>{ 
        const select = document.getElementById("monsters");
        let val = select.value;
        setChartId(val)
        setPopUp(!popUp)

        fetch(`${API_ROOT}/api/charts/${chartId}/roll/`
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
                </select>
                <button onClick={buttonChartSet} className='button'>
                    Get Loot!
                </button>

                {popUp && (
                <div className='popUp'>
                <div onClick={togglePopUp} className='overlay'></div>
                <div className='popUpContent'>
                <div className='root'>
                    {data ? <pre>{JSON.stringify(data.results[0], null, 2)}</pre> : 'Loading...'}
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