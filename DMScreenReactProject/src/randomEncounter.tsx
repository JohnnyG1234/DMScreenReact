import './App.css';
import {forest1To4, forest5To10, grassland1To5} from "./EncounterTables";
import React, {useState, useRef} from 'react';

function RandomEncounter(){

    const [popUp, setPopUp] = useState(false);
    const inputElement = useRef(null);

    const togglePopUp = () =>{
        setPopUp(!popUp)
    }


    const getRandom = () => {
        return Math.floor(Math.random() * 20)
    }
    
    const getEncounter = () => {
        
        if (inputElement.current == null)
        {
            console.log("Input value is null");
            return "Value is null";
        }


        if (inputElement.current == "forest1-4")
        {
            const encounter = forest1To4[getRandom()];
            return encounter;
        }
        else if (inputElement.current == "forest5-10")
        {
            const encounter = forest5To10[getRandom()];
            return encounter;
        }
        else if (inputElement.current == "grassland1-5")
        {
            const encounter = grassland1To5[getRandom()];
            return encounter;
        }
    }


    return(
        <>
        <div className="e square">

            <h2>Random Encounter</h2>

            <select ref={inputElement} className='select' id='encounter'>
                <option value="forest1-4">Forest levels 1-4</option>
                <option value="forest5-10">Forest levels 5-10</option>
                <option value="grassland1-5">Grassland levels 1-5</option>
            </select>
            <button className='button' onClick={togglePopUp}> Get Encounter! </button>

            {popUp && (
                <div className='popUp'>
                <div onClick={togglePopUp} className='overlay'></div>
                <div className='popUpContent'>
                    <h2> Encounter! </h2>
                    <p>
                        {getEncounter()}
                    </p>
                    <button className='button'
                    onClick={togglePopUp}> 
                    Close </button>
                </div>
            </div>
            )}


        </div>
        </>
    )
}

export default RandomEncounter;